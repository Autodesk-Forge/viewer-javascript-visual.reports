
var _pieChart = null;
var _sortOrder = "value-desc";

var _reportOptions = [
    { label : "Qty - Type",             fieldName: ""           },
    { label : "Qty - Level",            fieldName: "Level"      },
    { label : "Qty - Base Constraint",  fieldName: "Base Constraint"      },
    { label : "Qty - System Type",      fieldName: "System Type"      },
    { label : "Qty - Material",         fieldName: "Material"   },
    { label : "Qty - Appearance",       fieldName: "Appearance" },
    { label : "Qty - Name",             fieldName: "Name"       },
    { label : "Qty - Mass",             fieldName: "Mass"       },
    { label : "Qty - Volume",           fieldName: "Volume"     },
    { label : "Qty - Area",             fieldName: "Area"       }
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
    if (index === -1)
        index = parseInt($("#pu_reportToRun option:selected").val(), 10);

    var reportObj = _reportOptions[index];
         
    console.log("Running report: " + reportObj.label);

    if (reportObj.fieldName === "") {
        var pieOpts = initPieOpts("Object Type", index);
        getReportDataByObjType(pieOpts, loadReportDataPieChart);
    }
    else {
        var pieOpts = initPieOpts(reportObj.fieldName, index);
        getReportDataByPropName(reportObj.fieldName, pieOpts, loadReportDataPieChart);
     }
}

$(document).ready(function() {
    
    loadReportMenuOptions();
    
        // user selected a new model to load
    $("#pu_reportToRun").change(function(evt) {  
        evt.preventDefault();

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
        if (pieOpts.data.content.length > 20)
            pieOpts.data.smallSegmentGrouping.value = 2;
        else if (pieOpts.data.content.length < 10)  // if its less than 10, don't condense
            pieOpts.data.smallSegmentGrouping.enabled = false;
        
        _pieChart = new d3pie("pieChart", pieOpts);
        loadBarChart(pieOpts.data);
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
            "title": {
                "text": fieldName,
                "fontSize": 24,
                "font": "open sans"
            },
            "subtitle": {
                "text": strSubTitle,
                "color": "#999999",
                "fontSize": 12,
                "font": "open sans"
            },
            "titleSubtitlePadding": 9
        },
        "footer": {
            "color": "#999999",
            "fontSize": 10,
            "font": "open sans",
            "location": "bottom-left"
        },
        "size": {
            //"canvasWidth": 590,
            "pieInnerRadius": "39%",
            "pieOuterRadius": "67%"
        },
        "labels": {
            "outer": {
                "pieDistance": 32
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

function clickPieWedge(evt) {
    ids = [];
    if (evt.data.isGrouped === true) {  // "Other" bucket will group things together
        for (i=0; i<evt.data.groupedData.length; i++)
            ids = ids.concat(evt.data.groupedData[i].lmvIds);
    }
    else {
        ids = evt.data.lmvIds;
    }
        
    _viewerMain.isolateById(ids);
    //_viewerSecondary.select(ids);
    workaround_2D_select(ids);
}

