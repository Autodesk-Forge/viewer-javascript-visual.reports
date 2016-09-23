const reportData = require('./ReportData.js');
const barChartReport = require('./Report_BarChart.js');

let _pieChart = null;
window._sortOrder = "value-desc";

let _reportOptions = [
    { label : "Qty - Type",             fieldName: "",                  fieldType : "ModelType"},
    { label : "Qty - Level",            fieldName: "Level",             fieldType : "Properties"},
    { label : "Qty - Base Constraint",  fieldName: "Base Constraint",   fieldType : "Properties"},
    { label : "Qty - System Type",      fieldName: "System Type",       fieldType : "Properties"},
    { label : "Qty - Assembly Code",    fieldName: "Assembly Code",     fieldType : "Properties"},
    { label : "Qty - Material",         fieldName: "Material",          fieldType : "Properties"},
    { label : "Qty - Appearance",       fieldName: "Appearance",        fieldType : "Properties"},
    { label : "Qty - Name",             fieldName: "Name",              fieldType : "Properties"},
    { label : "Qty - Mass",             fieldName: "Mass",              fieldType : "Quantity"},
    { label : "Qty - Volume",           fieldName: "Volume",            fieldType : "Quantity"},
    { label : "Qty - Area",             fieldName: "Area",              fieldType : "Quantity"},
    { label : "Qty - Density",          fieldName: "Density",           fieldType : "Quantity"}
];

    // populate the popup menu with the avaialable models to load (from the array above)
function loadReportMenuOptions() {
        // add the new options for models
    var sel = $("#pu_reportToRun");
    $.each(_reportOptions, function(i, item) {
        sel.append($("<option>", {
            value: i,
            text : item.label
        }));
    });
}

function enableReportMenu() {
    $('#pu_reportToRun').attr("disabled", false);
    $('#pu_sortOrder').attr("disabled", false);
}

function disableReportMenu() {
    $('#pu_reportToRun').attr("disabled", true);
    $('#pu_sortOrder').attr("disabled", true);
}

function runReport(index) {

        // if they pass in a negative index, look up the current one
    if (typeof (index) === "undefined" || index === -1)
        index = parseInt($("#pu_reportToRun option:selected").val(), 10);

    var reportObj = _reportOptions[index];
    console.log("Running report: " + reportObj.label);

    $("#reportinput").empty();
    _currentQty = null;
    _currentBound = null;

    if (reportObj.fieldName === "") {
        var modelTypes = reportData.groupDataByType();
        wrapDataForPieChart(modelTypes);
    }
    else if (reportObj.fieldType === "Quantity") {

        reportData.getQtyDataByProperty(reportObj.fieldName, function(Qty, misCount, bound){
            var initrange = 100;

            createReportUserInput(bound, initrange);
            _currentQty = Qty;
            _currentBound = bound;

            reportData.groupQtyDataByRange(Qty, bound, initrange, wrapDataForPieChart);
        });
    }
    else {
        reportData.groupDataByProperty(reportObj.fieldName, wrapDataForPieChart);
     }
}

let _currentQty = null;
let _currentBound = null;

    // Create user input div for quantity type
function createReportUserInput(bound, initVal) {

    var slider = document.createElement("input");
    slider.id = "qtyslider";
    slider.type = "range";
    slider.style.height = "12px";
    slider.min = 0;
    slider.max = Math.round(bound.max - bound.min);
    slider.value = initVal;
    slider.onchange = function() {
        $("#qtyfield").val(slider.value);
        reportData.groupQtyDataByRange(_currentQty, _currentBound, slider.value, wrapDataForPieChart);
    };

    var preLabel = document.createElement("label");
    preLabel.htmlFor = slider.id;
    preLabel.innerHTML = slider.min;
    preLabel.style.marginRight = "10px";
    var postLabel = document.createElement("label");
    postLabel.htmlFor = slider.id;
    postLabel.innerHTML = slider.max;
    postLabel.style.marginLeft = "10px";

    var textField = document.createElement("input");
    textField.id = "qtyfield";
    textField.type = "text";
    textField.style.width = "40px";
    textField.placeholder = slider.value;
    textField.onkeydown = function(e) {
        if (e.keyCode == 13) {
            var inputVal = parseFloat(this.value);
            if (inputVal <= parseFloat(slider.max) && inputVal >= 0) {
                $("#qtyslider").val(this.value);
                reportData.groupQtyDataByRange(_currentQty, _currentBound, this.value, wrapDataForPieChart);
            }
        }
    };

    var fieldLabel = document.createElement("label");
    fieldLabel.htmlFor = textField.id;
    fieldLabel.innerHTML = "Range: "
    fieldLabel.style.marginLeft = "25px";

    var inputDiv = document.getElementById("reportinput");
    inputDiv.style.margin = "20px";
    inputDiv.appendChild(preLabel);
    inputDiv.appendChild(slider);
    inputDiv.appendChild(postLabel);
    inputDiv.appendChild(fieldLabel);
    inputDiv.appendChild(textField);
}

function wrapDataForPieChart(buckets, misCount) {
    var reportIdx = parseInt($("#pu_reportToRun").val());
    var fieldName = (_reportOptions[reportIdx].fieldName === "") ? "Object Type" : _reportOptions[reportIdx].fieldName;
    var pieOpts = initPieOpts(fieldName, reportIdx);

    for (var valueKey in buckets) {
        var pieObject = {};
        pieObject.label = valueKey;
        pieObject.value = buckets[valueKey].length;
        pieObject.lmvIds = buckets[valueKey];
        pieOpts.data.content.push(pieObject);
    }

    loadReportDataPieChart(pieOpts);
}

$(document).ready(function() {

    console.log("Document Ready: excuting func in pieChart.js");

    loadReportMenuOptions();

        // user selected a new model to load
    $("#pu_reportToRun").change(function(evt) {

        // Only calls when user selection changes

        evt.preventDefault(); // The event.preventDefault() method stops the default action of an element from happening

        var index = parseInt($("#pu_reportToRun option:selected").val(), 10);

        runReport(index);
    });

    $("#pu_sortOrder").change(function(evt) {
        evt.preventDefault();

        _sortOrder = $("#pu_sortOrder option:selected").val();
            // rebuild the report with the new sort order
        if (_pieChart)
            runReport(_pieChart.options.reportIndex);   // re-run same report
    });

});

    // callback function that fills the pieChart up with the data retrieved from LMV Object Properties
function loadReportDataPieChart(pieOpts) {
        // free up anything that is already there
    if (_pieChart)
        _pieChart.destroy();

    $("#barChart").empty();

    if (pieOpts.data.content.length === 0) {
        $("#pieChart").append("<p><em>No data could be retrieved for charts.  This report is probably not applicable for the given model.  As an example, Revit models can be sorted by Type or Level, but Fusion models cannot.  Fusion models are more appropriate for reports sorted by Mass, Volume, or Material.  Try switching to a different report or a different model.</em></p>");
    }
    else {
        // if we have a lot of buckets, don't let the pie chart get out of control, condense anything with 2 or less
        // into an "Other" wedge.

        //pieOpts.data.sortOrder = "value-desc";
        pieOpts.data.content.sort(function (a, b) {
            if (a.value < b.value) return 1;
            else if (a.value > b.value) return -1;
            return 0;
        });

        if (pieOpts.data.content.length < 10) {
            pieOpts.data.smallSegmentGrouping.enabled = false;
        } else if (pieOpts.data.content.length > 20) {
            pieOpts.labels.truncation.enabled = true;
            var thresholdObj = pieOpts.data.content[19];
            pieOpts.data.smallSegmentGrouping.value = thresholdObj.value;
        }

        _pieChart = new d3pie("pieChart", pieOpts);
        barChartReport.loadBarChart(pieOpts.data);
    }
}

    // initialize
function initPieOpts(fieldName, reportIndex) {
    var pieOpts = initPieDefaults(fieldName);
    pieOpts.reportIndex = reportIndex;

    pieOpts.data = {
        "sortOrder": _sortOrder,
        "content": [],
        "smallSegmentGrouping": {
            "enabled": true,
            "value": 1,
            "valueType": "value"   // percentage or value
        },
    };

    return pieOpts;
}

function initPieDefaults(fieldName) {
    var strSubTitle = "Quantities in model (" + fieldName + ")";
    var pieDefaults = {
        "header": {
            "title": false,
            "subtitle": false,
            "titleSubtitlePadding": 9
        },
        "footer": {
            "color": "#999999",
            "fontSize": 10,
            "font": "open sans",
            "location": "bottom-left"
        },
        "size": {
            "canvasWidth": 590,
            "pieInnerRadius": "39%",
            "pieOuterRadius": "67%"
        },
        "labels": {
            "outer": {
                "pieDistance": 25
            },
            "inner": {
                "hideWhenLessThanPercentage": 3,
                "format": "value"
            },
            "mainLabel": {
                "fontSize": 11
            },
            "percentage": {
                "color": "#ffffff",
                "decimalPlaces": 0
            },
            "value": {
                "color": "#adadad",
                "fontSize": 11
            },
            "lines": {
                "enabled": true
            },
            "truncation": {
                "enabled": false,
                "truncateLength": 30
            }
        },
        "tooltips": {
            "enabled": true,
            "type": "placeholder",
            "string": "{label}: {value}, {percentage}%"
        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "linear",
                "speed": 400,
                "size": 8
            }
        },
        "misc": {
            "gradient": {
                "enabled": true,
                "percentage": 100
            }
        },
        "callbacks": {
            onClickSegment: clickPieWedge
        }
    };

    return pieDefaults;
}

let _selectedWedge;

function clickPieWedge(evt) {

    if (_selectedWedge !== evt.data.label) {
        ids = [];
        if (evt.data.isGrouped === true) {  // "Other" bucket will group things together
            for (i=0; i<evt.data.groupedData.length; i++)
                ids = ids.concat(evt.data.groupedData[i].lmvIds);
        }
        else {
            ids = evt.data.lmvIds;
        }

        _viewerMain.isolate(ids);
        _viewerSecondary.select(ids);
        _selectedWedge = evt.data.label;
    } else {
        _selectedWedge = null;

        _viewerMain.showAll();
        _viewerSecondary.clearSelection();
    }

}

module.exports = {
  disableReportMenu,
  enableReportMenu,
  runReport
}
