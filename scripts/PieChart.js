
$(document).ready(function() {
    
    $("#bn_loadData").click(function(evt) {  
        evt.preventDefault();

        loadPieData();
    });

    $("#pu_sortOrder").change(function(evt) {  
        evt.preventDefault();

        _sortOrder = $("#pu_sortOrder option:selected").val();
        loadPieData();
    });
});
        

//var pieOpts = setupPieDefaults();
//pieOpts.data = setupDefaultPieData();

//var pie = new d3pie("pieChart", pieOpts);
var _pie = null;
var _sortOrder = "value-desc";

function loadPieData() {
    var pieOpts = setupPieDefaults();
    pieOpts.data = getLmvObjData();

    if (_pie)
        _pie.destroy();
    _pie = new d3pie("pieChart", pieOpts);
}

function setupPieDefaults() {
    var pieDefaults = {
        "header": {
            "title": {
                "text": "Object Type",
                "fontSize": 24,
                "font": "open sans"
            },
            "subtitle": {
                "text": "Quantities of items in the model.",
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



