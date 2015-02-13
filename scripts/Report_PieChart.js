
var _pieChart = null;
var _sortOrder = "value-desc";

$(document).ready(function() {
    
    $("#bn_qtyByType").click(function(evt) {  
        evt.preventDefault();

        var pieOpts = initPieOpts("Object Type");
        getReportDataByObjType(pieOpts, loadReportDataPieChart);
    });
    
    $("#bn_qtyByMaterial").click(function(evt) {  
        evt.preventDefault();
        
        var fieldName = "Material";
        var pieOpts = initPieOpts(fieldName);
        
        getReportDataByPropName(fieldName, pieOpts, loadReportDataPieChart);
    });
    
    $("#bn_qtyByAppearance").click(function(evt) {  
        evt.preventDefault();

        var fieldName = "Appearance";
        var pieOpts = initPieOpts(fieldName);
        
        getReportDataByPropName(fieldName, pieOpts, loadReportDataPieChart);
    });
    
    $("#bn_qtyByName").click(function(evt) {  
        evt.preventDefault();

        var fieldName = "Name";
        var pieOpts = initPieOpts(fieldName);
        
        getReportDataByPropName(fieldName, pieOpts, loadReportDataPieChart);
    });
    
    $("#pu_sortOrder").change(function(evt) {  
        evt.preventDefault();

        _sortOrder = $("#pu_sortOrder option:selected").val();
        if (_pieChart) {
                // we just need to redraw based on current sort order, but pieChart.redraw() doesn't seem to update correctly, 
                // so we will destroy the chart, but save the data since we don't need to regenerate it, only redraw it.
            var pieOpts = _pieChart.options;    // detach before destroying pieChart.
            pieOpts.sortOrder = _sortOrder;
            pieChart.options = null;
            
            loadReportDataPieChart(pieOpts);    // re-assign the data we already had, this time with new sort order
        }
    });

});

    // callback function that fills the pieChart up with the data retrieved from LMV Object Properties
function loadReportDataPieChart(pieOpts) {
    if (_pieChart)
        _pieChart.destroy();
    _pieChart = new d3pie("pieChart", pieOpts);
}

    // initialize
function initPieOpts(fieldName) {
    var pieOpts = initPieDefaults(fieldName);

    pieOpts.data = {
        "sortOrder": _sortOrder,
        "content": []
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
        "data": {
            // nothing initially
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
                //"hideWhenLessThanPercentage": 3,
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
    _viewerMain.isolateById(evt.data.lmvIds);
    //_viewerSecondary.select(evt.data.lmvIds);
    workaround_2D_select(evt.data.lmvIds);
}

