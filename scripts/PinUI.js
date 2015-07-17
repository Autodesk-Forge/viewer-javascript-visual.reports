//
//  This script contains the functions that creates the UI for the pins,
//  including an overlay canvas for the pushpins and the headsup div
//  and a pin tablelist on the side for user editing. Most of the work
//  is done in pure javascript, as document.createElement is relatively faster
//  than jQuery's $('<div>')
//

var _selected = null;
var _prev_x = 0;
var _prev_y = 0;
var _bounding_left = 0;
var _bounding_top = 0;

    // creating headsup div
function createHeadsUpDiv() {

    var headsupDiv = document.createElement("div");
    headsupDiv.id = "headsup";
    headsupDiv.style.zIndex = "999";
    headsupDiv.style.pointerEvents = "auto";    // need to set pointerEvents to auto to receieve mouse action 

    headsupDiv.onmousedown = function (evt) {
        _prev_x = evt.clientX;
        _prev_y = evt.clientY;
        var viewport = _viewerMain.navigation.getScreenViewport();
        _bounding_left = viewport.width - this.offsetWidth;
        _bounding_top = viewport.height - this.offsetHeight;
        _selected = this;

        return false;
    };
    headsupDiv.onmousemove = function (evt) {
        if (_selected === null)
            return;

        var next_left = _selected.offsetLeft + evt.clientX - _prev_x;
        var next_top = _selected.offsetTop + evt.clientY - _prev_y;
        if (next_left >= 0 && next_left < _bounding_left)
            _selected.style.left = next_left + "px";
        if (next_top >= 0 && next_top < _bounding_top)
            _selected.style.top = next_top + "px";

        _prev_x = evt.clientX;
        _prev_y = evt.clientY;
    };
    headsupDiv.onmouseup = function () {
        _selected = null;
        return false;
    };

    var navbar = document.createElement("div");
    navbar.className = "navbar";
    var hidebtn = document.createElement("div");
    hidebtn.className = "navbtn";
    hidebtn.innerHTML = "X";

    hidebtn.onclick = function() {
        hideHeadesUpDiv(false);
    };
    navbar.appendChild(hidebtn);
    headsupDiv.appendChild(navbar);

    var content = document.createElement("div");
    content.className = "navbody";
    headsupDiv.appendChild(content);

    return headsupDiv;
}

    // hide headsup div
function hideHeadesUpDiv(animated) {
    var headsupDiv = $("#headsup"); 
    if (headsupDiv.is(":visible")) {
        if (animated)
            headsupDiv.fadeToggle(300, "linear");
        else
            headsupDiv.toggle();
    }
}

    //  set headsup div text and position on overlay canvas
function setHeadsUpDisplay(content, x, y, animated) {
    var headsupDiv = $("#headsup");
    var canvas = _viewerMain.navigation.getScreenViewport();
    var deltaX = 60;
    var deltaY = 60;

    if (x + headsupDiv.width() < canvas.width - deltaX)
        x += deltaX;
    else
        x = x - headsupDiv.width() - deltaX;
    if (y + headsupDiv.height() < canvas.height - deltaY)
        y += deltaY;
    else
        y = y - headsupDiv.height() - deltaY;
    
    headsupDiv.css({left:x, top:y});
    $("#headsup :first-child").next().text(content);
    if (animated)
        headsupDiv.fadeToggle(400, "linear");
    else
        headsupDiv.toggle();
}

    // create an overlay on top of the viewer
function initPinOverlay() {

    var overlayDiv = document.createElement("div");
    overlayDiv.id = "pushpinOverlay";
    _viewerMain.container.appendChild(overlayDiv);

    overlayDiv.style.top = "0";
    overlayDiv.style.left = "0";
    overlayDiv.style.right = "0";
    overlayDiv.style.bottom = "0";
    overlayDiv.style.zIndex = "998";
    overlayDiv.style.position = "absolute";
    overlayDiv.style.pointerEvents = "none";

        // creating a svg canvas for the pins
    var svg = d3.select("#" + overlayDiv.id).append("svg")
                .style("width", "100%")
                .style("height", "100%");


        // adding a drop shadow for the pin circles
    var defs = svg.append("defs");
    var filter = defs.append("filter")
        .attr("id", "dropshadow")

    filter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 1)
        .attr("result", "blur");

    filter.append("feComponentTransfer")
        .append("feFuncA")
        .attr("type", "linear")
        .attr("slope", "0.2");

    filter.append("feOffset")
        .attr("in", "blur")
        .attr("dx", 1)
        .attr("dy", 1)
        .attr("result", "offsetBlur");

    var feMerge = filter.append("feMerge");

    feMerge.append("feMergeNode")
        .attr("in", "offsetBlur")
    feMerge.append("feMergeNode")
        .attr("in", "SourceGraphic");

        // iterate through the pins and put them on the canvas
    _viewerPin.each(function(pinid, label, position) {
        var world = positionToVector3(position);
        var client = worldToClient(world, _viewerMain.getCamera());
        pushPinToOverlay(pinid, client);
    });

        // create a headsup div for display
    var headsupDiv = createHeadsUpDiv();
    overlayDiv.appendChild(headsupDiv);
    hideHeadesUpDiv(false);

    return svg;
}

    // add a pin to the overlay
function pushPinToOverlay(pinid, client) {

        // draw a circle pin in d3
    d3.select("#pushpinOverlay svg").append("circle").attr("id", pinid).attr("cx", client.x)
        .attr("cy", client.y).attr("r", 10).style("fill", "#c66")
        .style("cursor", "pointer")
        .style("pointer-events", "visible")
        .attr("filter", "url(#dropshadow)");

        // attach user events to pin
    $("#"+pinid)
    .on("click", viewPinClicked)
    .on("mouseover", function() {
        d3.select(this).style("fill", "#66c");
    })
    .on("mouseout", function() {
        d3.select(this).style("fill", "#c66"); 
    });

    d3.select("#pushpinOverlay")
    .style("pointer-events", "none");

        // end editing mode done,  mouse click event should be normal on the viewer
    _shouldAddNewPin = false;
}



    // init pin table list
function initPinTablelist() {
    var pintable = $("#pintablelist");
    pintable.empty();

    var table = document.createElement("div");
    table.id = "pintable";
    table.className = "tablelist";

    _viewerPin.each(function(pinid, label, position) {
        pushPinToTableList(pinid, label, table);
    });
    
    pintable.append(table);
}

    // add a pin row to the table list
function pushPinToTableList(pinid, pinlabel, table) {

    var row = document.createElement("div");
    row.id = "row" + pinid;
    row.className = "tablecell";

    var label = document.createElement("div");
    label.className = "celllabel";
    label.innerHTML = pinlabel;

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
            var pinid = rowid.substring(3, rowid.length);
            var pinObj = _viewerPin.getPinObj(pinid);
            pinObj.label = this.value;
        };
        editableLabel.onkeydown = function(e) {
            if (e.keyCode == 13) {
                this.blur();
            }
        };

        this.innerHTML = null;
        this.appendChild(editableLabel);
        editableLabel.focus();
    };

    var orderbtn = document.createElement("div");
    orderbtn.className = "cellbtn icon icon-menu";

    var deletebtn = document.createElement("div");
    deletebtn.className = "cellbtn icon icon-cross";

    row.onmouseover = function() {
        var deletebtn = this.firstChild;
        var orderbtn = this.lastChild;
        deletebtn.style.display = "inline-block";
        orderbtn.style.display = "inline-block";

        if (this.id === _currentPin)
            return;
        var pinid = this.id.substring(3, this.id.length);

        $("#"+pinid).mouseover();
    };

    row.onmouseout = function() {
        var deletebtn = this.firstChild;
        var orderbtn = this.lastChild;
        deletebtn.style.display = "none";
        orderbtn.style.display = "none";

        if (this.id === _currentPin)
            return;
        var pinid = this.id.substring(3, this.id.length);
        $("#"+pinid).mouseout();
    };

    row.onclick = function() {
        var prevLabel = _currentPin;
        _currentPin = this.id;

        if (typeof(prevLabel) !== "undefined")
            $("#"+prevLabel).mouseout();
        var pinid = this.id.substring(3, this.id.length);
        $("#"+pinid).click();
    };

    deletebtn.onclick = function() {
        var parentRow = this.parentNode;
        var pinid = parentRow.id.substring(3, parentRow.id.length);
        var table = parentRow.parentNode;

        table.removeChild(parentRow);
        d3.select("#"+pinid).remove();
        hideHeadesUpDiv(false);

        _viewerPin.removePin(pinid);

    };

    orderbtn.onmousedown = function (evt) {
        _prev_x = evt.clientX;
        _prev_y = evt.clientY;
        _selected = this.parentNode;
        _selected.style.width = _selected.offsetWidth + "px";
        _selected.style.position = "absolute";
        _selected.style.zIndex = 999;

        var moverow = function (evt) {
            if (_selected === null)
                return;
            var next_left = _selected.offsetLeft + evt.clientX - _prev_x;
            var next_top = _selected.offsetTop + evt.clientY - _prev_y;
            _selected.style.left = next_left + "px";
            _selected.style.top = next_top + "px";
            _prev_x = evt.clientX;
            _prev_y = evt.clientY;
        };
        document.addEventListener("mousemove", moverow);

        var setrow = function (evt) {
            if (_selected === null)
                return false;
            var pinid = _selected.id.substring(3, _selected.id.length);
            var parent = _selected.parentNode;

            var index = Math.round(_selected.offsetTop / _selected.offsetHeight + 0.5);
            _selected.style.position = "static";
            _selected.style.zIndex = 0;
            parent.removeChild(_selected);
            parent.insertBefore(_selected, parent.children[index]);
            _selected.style.left = "auto";
            _selected.style.top = "auto";
            _selected.style.width = "inherit";
            _selected = null;

            document.removeEventListener("mousemove", moverow);
            document.removeEventListener("mouseup", setrow);

            _viewerPin.reorder(pinid, index);

            return false; 
        };
        document.addEventListener("mouseup", setrow);

        return false;
    };

    row.appendChild(deletebtn);
    row.appendChild(label);
    row.appendChild(orderbtn);

    table.appendChild(row);
}