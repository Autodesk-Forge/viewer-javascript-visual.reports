
// Color Scheming
// Override the model color(material) according to a specifc theme(property/type).
// Overriding are mainly done in overrideColorOnObjects and overrideColorOnFragment.
// This script also creates the theme tables in HTML
//

var _themeOptions = [
    { label : "*NONE*",           type: "Original"   },
    { label : "Type",             type: "ModelType"  },
    { label : "Level",            type: "Property "  },
    { label : "Base Constraint",  type: "Property"   },
    { label : "System Type",      type: "Property"   },
    { label : "Material",         type: "Property"   }
];

var _colorIndex = -1;
var _colorDict = [
    "#FFA500", "#FA8072", "#32CD32", "#1E90FF", "#EE82EE", "#40E0D0", "#F5DEB3", "#FFC0CB", "#FFD700",
    "#00FFFF", "#FF0000", "#CD853F", "#008080", "#DA70D6", "#000080", "#800000", "#FF00FF", "#00FF00",
    "#FFFF00", "#800080", "#0000FF", "#FF7F50", "#A52A2A", "#00FFFF", "#008000", "#B22222", "#4B0082",
    "#E6E6FA", "#FAF0E6"
];

var _originalFragMaterial;
var _applicabledbIds;

var _ambientLight;
var _directionalLight;

function unitializeThemePanel() {
    if (_originalFragMaterial) {
        $("#pu_colorTheme").prop('selectedIndex', 0);
        restoreToOriginal();
    }

    _originalFragMaterial = null;
    _applicabledbIds = null;
    _ambientLight = null;
    _directionalLight = null;
}

function getColor() {

    if (_colorIndex < _colorDict.length - 1) {
        _colorIndex += 1;
        return _colorDict[_colorIndex];
    }

    // generate random color
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function loadColorThemeMenuOptions() {

    var themeSel = $("#pu_colorTheme");
    $.each(_themeOptions, function(i, data) {
        themeSel.append($("<option>", {
            value: i,
            text: data.label
        }));
    });
}

function applyTheme(index) {
    if (index === -1)
        index = parseInt($("#pu_colorTheme option:selected").val(), 10);

    // reset color index and applicable dbIds
    _colorIndex = -1;
    _applicabledbIds = [];

    // remove the lightening from previous scheme
    _viewerMain.impl.scene.remove(_ambientLight);
    _viewerMain.impl.scene.remove(_directionalLight);

    switch (_themeOptions[index].type) {
        case "Original": 
            restoreToOriginal();
            break;
        case "ModelType":
            var modelTypes = groupDataByType();
            wrapColorData(modelTypes);
            break;
        case "Custom":
            overrideColorOnObjects(_savedThemes[_themeOptions[index].label]);
            break;
        default:
            groupDataByProperty(_themeOptions[index].label, wrapColorData);
    };
}

function restoreToOriginal() {

    $("#themecanvas").empty();

    if (_originalFragMaterial) {

        var frglst = _viewerMain.impl.modelQueue().getFragmentList();

        // get the mesh object of each fragment and restore their material to orignal
        for (var fragId in _originalFragMaterial) {
            var vizmesh = frglst.getVizmesh(fragId);
            vizmesh.material = _originalFragMaterial[fragId];
            frglst.setMesh(fragId, vizmesh);
        }

        // restore ambient shadows on model
        _viewerMain.setQualityLevel(true, _viewerMain.prefs.antialiasing);
    }
}

function wrapColorData(colorBuckets, misCount) {
    var colorMap = [];

    // for objects that doesn't have such property and can't be categorized
    if (typeof(misCount) !== "undefined" && misCount !== null)
        colorBuckets["Not applicable"] = misCount;

    for (var colorKey in colorBuckets) {
        var hexColorStr = getColor();
        var objects = colorBuckets[colorKey];
        var colorObj = {"color":hexColorStr, "label":colorKey, "dbIds":objects};
        colorMap.push(colorObj);
    }
    overrideColorOnObjects(colorMap);
}

function overrideColorOnObjects(colorMap) {

    if (typeof (colorMap) === "undefined" || colorMap.length === 0) {
        restoreToOriginal();
        $("#themecanvas").html("No data can be retrieved for this property");
        return;
    }

    _viewerMain.getObjectTree(function(objTree) {

        // record original materials for the first time
        if (!(_originalFragMaterial)) {
            _originalFragMaterial = {};
            for (var i = _modelLeafNodes.length - 1; i >= 0; i--) {
                objTree.enumNodeFragments(_modelLeafNodes[i], function(fragId) {
                    var mat = _viewerMain.impl.getRenderProxy(_viewerMain.model, fragId).material;
                    _originalFragMaterial[fragId] = mat;
                });
            };
        }

        for (var index = 0; index < colorMap.length; index++) {
            var objects = colorMap[index]["dbIds"];
            var hexColorStr = colorMap[index]["color"];
            for (var i = 0; i < objects.length; i++) {
                // override the color on each fragment
                objTree.enumNodeFragments(objects[i], function(fragId) {
                    overrideColorOnFragment(fragId, hexColorStr);
                });
            };
        };
        loadThemeChart(colorMap);
    });

    // record the applicable dbIds of current themes, used for click event and isolation
    var isolateIds = [];
    for (var i = 0; i < colorMap.length; i++) {
        if (colorMap[i].label === "Not applicable")
            continue;
        isolateIds = isolateIds.concat(colorMap[i].dbIds);
    };
    _applicabledbIds = isolateIds;

    if (!(document.getElementById("nonpropchckbx").checked)) {
        _viewerMain.isolate(isolateIds);
    }

    // we need to add light for MeshPhongMaterial, otherwise it will look all black
    var scene = _viewerMain.impl.scene;

    // add subtle ambient lighting
    _ambientLight = new THREE.AmbientLight(0x888888);
    scene.add(_ambientLight);

    // directional lighting
    _directionalLight = new THREE.DirectionalLight(0xffffff);
    _directionalLight.position.set(1, 1, 3).normalize();
    scene.add(_directionalLight);

    // hide ambient shadows for better visual result
    _viewerMain.setQualityLevel(false, _viewerMain.prefs.antialiasing);
}

function overrideColorOnFragment(fragId, hexColorStr) {
    var frglst = _viewerMain.impl.modelQueue().getFragmentList();

    // Rather than chaning the color of the mesh material, we change the material
    // directly to gain better visual result
    var vizmesh = frglst.getVizmesh(fragId);
    // vizmesh.material = new THREE.MeshBasicMaterial({color: hexColorStr});
    // using mesh phong preserves the shadows and other functionalities
    vizmesh.material = new THREE.MeshPhongMaterial({
        specular: "#000000",
        color: hexColorStr, 
        emissive: "#000000",
        reflectivity: 0,
        shininess: 100,            
    });
    frglst.setMesh(fragId, vizmesh);  
}


$(document).ready(function() {

    loadColorThemeMenuOptions();

    $("#pu_colorTheme").change(function(evt) {
        evt.preventDefault();
        var index = parseInt($("#pu_colorTheme option:selected").val(), 10);
        applyTheme(index);
    });
    // $("#thmbtn").click(addCustomizedTheme);
    $("#nonpropchckbx").click(toggleNonApplicable);

});

function toggleNonApplicable() {
    if (this.checked) {
        _viewerMain.showAll();
    } else {
        _viewerMain.isolate(_applicabledbIds);
    }
}

function loadThemeChart(colorMap) {

    $("#themecanvas").empty();
    $("#themecanvas").css("margin-top", "20px");

    var barChartHeight = 80 * colorMap.length + 20;
    var svg = d3.select("#themecanvas").append("svg")
       .attr("height", barChartHeight);
    var contents = svg.append("g");
    var bars = contents.selectAll("rect").data(colorMap)
        .enter().append("rect");

    bars.attr("x", "50%")
        .attr("y", function(d, i) { return i*50; })
        .attr("width", 200)
        .attr("height", 40)
        .attr("fill", function(d, i) { return d.color})
        .attr("opacity", 1)
        .style("cursor", "pointer");
        
    var labels = contents.selectAll("text").data(colorMap)
        .enter().append("text");
    
    labels.attr("x", "20%")
        .attr("y", function(d, i) { return 25 + i*50; })
        .text(function(d) { return d.label; })
        .style("text-align", "center")
        .style("font-family", "Open Sans")
        .style("font-style", "italic")
        .style("font-size", 13);

    d3.selectAll("svg rect")
    .on("click", colorBarClicked)
    .on("mouseover", function() {
        this.style.opacity = 0.4;
    })
    .on("mouseout", function() {
        this.style.opacity = 1;
    });
}

var _prev_isolated = [];
var _selected_label = null;

function colorBarClicked(obj) {

    if (d3.event.shiftKey) {
        var toBeIsolated = _prev_isolated.concat(obj.dbIds);
        _viewerMain.isolate(toBeIsolated);
        _prev_isolated = toBeIsolated;
    } else {        
        if (_selected_label === obj.label) {
            _viewerMain.isolate(_applicabledbIds);
            _selected_label = null;
            _prev_isolated = [];
        } else {
            _viewerMain.isolate(obj.dbIds);
            _selected_label = obj.label;
            _prev_isolated = obj.dbIds;
        }
    }
}



//
//    Uncomment for Adding Customized Themes
//    TBD, now it requires manual selection on the model/dbId to create a theme,
//    we could add some query features to complete this procedure more automatically.
//

/*

var _customizedTheme = [];
var _savedThemes = {};
var _currentRow = -1;

function addCustomizedTheme() {

    _viewerMain.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, updateThemeSelection);

    _colorIndex = -1;
    $("#pu_colorTheme").prop('selectedIndex', 0);
    restoreToOriginal();
    
    $('#pu_colorTheme').attr("disabled", true);
    $('#nonpropchckbx').attr("disabled", true);

    var staticLabel = document.createElement("label");
    staticLabel.innerHTML = "New Theme";
    staticLabel.className = "editable";
    var editableLabel = document.createElement("input");
    editableLabel.type = "text";
    editableLabel.style.display = "none";
    editableLabel.style.textAlign = "center";
    editableLabel.style.fontSize = "17px";
    editableLabel.className = "editable";
    staticLabel.onclick = function() {
        $(this).toggle();
        $(this).next().toggle().attr("placeholder", this.innerHTML).focus();
    };
    editableLabel.onblur = function() {
        $(this).toggle();
        $(this).prev().toggle().html(this.value.trim());
    };

    var themeTitle = $("#themetitle");
    themeTitle.attr("style", "text-align:center;font-size:25px;margin-top:20px;");
    themeTitle.append(staticLabel);
    themeTitle.append(editableLabel);

    var themecanvas = $("#themecanvas");
    var themeTable = document.createElement("div");
    themeTable.id = "themetable";
    themeTable.className = "tablelist";
    themecanvas.append(themeTable);
    
    var btnRow = document.createElement("div");
    btnRow.style.textAlign = "center";
    btnRow.style.margin = "10px";
    btnRow.style.width = "100%";

    var addMoreBtn = document.createElement("button");
    addMoreBtn.innerHTML = "Add";
    addMoreBtn.onclick = function() {
        var themeObj = {};
        themeObj.color = getColor();
        themeObj.label = "undefined";
        themeObj.divid = "themerowdivid" + _customizedTheme.length;
        themeObj.dbIds = [];
        
        _customizedTheme.push(themeObj);
        _currentRow = _customizedTheme.length - 1;
        _viewerMain.clearSelection(true);
        reloadTable("themetable");
    };

    var cancelBtn = document.createElement("button");
    cancelBtn.innerHTML = "Cancel";
    cancelBtn.onclick = function() {
        $("#themetitle").empty();
        $("#themecanvas").empty();
        _customizedTheme = [];
        _currentRow = -1;
        _viewerMain.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, updateThemeSelection);
        
        $('#pu_colorTheme').attr("disabled", false);
        $('#nonpropchckbx').attr("disabled", false);
        _viewerMain.clearSelection(true);

    };

    var doneBtn = document.createElement("button");
    doneBtn.innerHTML = "Done";
    doneBtn.onclick = function() {
        var themeId = $("#themetitle :first-child").html();
       
        _savedThemes[themeId] = _customizedTheme;

        $("#themetitle").empty();
        $("#themecanvas").empty();
        _customizedTheme = [];
        _currentRow = -1;
        $("#pu_colorTheme").append($("<option>", {
            value: _themeOptions.length,
            text: themeId 
        }));
        _themeOptions.push({"label":themeId, "type":"Custom"});

        $('#pu_colorTheme').attr("disabled", false);
        $('#nonpropchckbx').attr("disabled", false);
        _viewerMain.clearSelection(true);

    };

    btnRow.appendChild(addMoreBtn);
    btnRow.appendChild(cancelBtn);
    btnRow.appendChild(doneBtn);
    $("#themecanvas").append(btnRow);

    reloadTable(themeTable.id);
    addMoreBtn.onclick();
}

function updateThemeSelection() {
    if (_currentRow === -1)
        return;
    // set the selected dbIds for current row
    _customizedTheme[_currentRow].dbIds = _viewerMain.getSelection();
}

function reloadTable(tableid) {

    var themeTable = $("#"+tableid).empty();    

    for (var i = 0; i < _customizedTheme.length; i++) {
        var theme = _customizedTheme[i];

        var row = document.createElement("div");
        row.id = theme.divid;
        row.className = "tablecell";

        var label = document.createElement("div");
        label.className = "celllabel";
        label.innerHTML = theme.label;

        var colorBtn = document.createElement("div");
        colorBtn.className = "cellbtn";
        colorBtn.style.display = "inline-block";
        colorBtn.style.backgroundColor = theme.color;
        colorBtn.style.width = "10%";
        colorBtn.style.height = "66%";
        colorBtn.style.textAlign = "right";

        label.ondblclick = function() {
            var editableLabel = document.createElement("input");
            editableLabel.type = "text";
            editableLabel.className = "editable";
            editableLabel.style.textAlign = "center";
            editableLabel.style.fontSize = "16px";
            editableLabel.placeholder = this.textContent;
            editableLabel.onblur = function() {
                var parentLabel = this.parentNode;
                parentLabel.removeChild(this);
                parentLabel.textContent = this.value;

                var rowid = parentLabel.parentNode.id;
                                console.log("ID is ", rowid);

                var index = rowid.substring(rowid.length-1, rowid.length);
                var obj = _customizedTheme[index];
                obj.label = this.value;
            };

            this.innerHTML = null;
            this.appendChild(editableLabel);
            editableLabel.focus();
        };

        row.onclick = function() {
            var index = this.id.substring(this.id.length-1, this.id.length);
            _currentRow = index;
            _viewerMain.select(_customizedTheme[index].dbIds);
        };

        row.appendChild(colorBtn);
        row.appendChild(label);
        
        themeTable.append(row);
    }
}

*/