
var _pieChartX = null;
var _sortOrderX = "value-desc";

$(document).ready(function() {
    
    $("#bn_qtyByType").click(function(evt) {  
        evt.preventDefault();

        var pieOpts = initPieOpts("Object Type");
        getLmvObjDataByType(pieOpts, loadPieDataX);
    });
    
    $("#bn_qtyByMaterial").click(function(evt) {  
        evt.preventDefault();
        
        var fieldName = "Material";
        var pieOpts = initPieOpts(fieldName);
        
        getLmvObjDataX(fieldName, pieOpts, loadPieDataX);
    });

    $("#pu_sortOrder").change(function(evt) {  
        evt.preventDefault();

        _sortOrderX = $("#pu_sortOrder option:selected").val();
        loadPieDataX();
    });
    
    $("#bn_qtyByAppearance").click(function(evt) {  
        evt.preventDefault();

        var fieldName = "Appearance";
        var pieOpts = initPieOpts(fieldName);
        
        getLmvObjDataX(fieldName, pieOpts, loadPieDataX);
    });

});

    // callback function that fills the pieChart up with the data retrieved from LMV Object Properties
function loadPieDataX(pieOpts) {
    if (_pieChartX)
        _pieChartX.destroy();
    _pieChartX = new d3pie("pieChart", pieOpts);
}

    // initialize
function initPieOpts(fieldName) {
    var pieOpts = initPieDefaults(fieldName);

    pieOpts.data = {
        "sortOrder": _sortOrderX,
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
            onClickSegment: clickPieWedgeX
        }
    };

    return pieDefaults;
}



