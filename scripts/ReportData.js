//
//  Getting relevant data for Report_barChart.js and Scheming.js
//  The returned data format is only an object that uses label text(type/property value) as keys
//  and the dbIds as the associated values. Some data wrapping might be necessary before use.
//

var _modelLeafNodes;
var _root;

    // Preloading steps
    // called by LoadModel.js to preload all the leaf nodes whenever a new model is loaded,
    // get and keep all the leaf nodes of this model for future use.
function startReportDataLoader(callback) {
    _modelLeafNodes = [];
    getModelRoot(function (rootNode) {
        getModelLeafNodes(rootNode, _modelLeafNodes);

        if (callback)
            callback();
    });
}

function getModelRoot(callback) {
    _viewerMain.getObjectTree(function(objTree) {
        _root = objTree.root;

        if (callback)
            callback(_root);
    });
}

    // recursively add all the leaf nodes
function getModelLeafNodes(root, leafNodes) {
    if (!root.children) {
        leafNodes.push(root.dbId);
        return;
    } else {
        $.each(root.children, function(i, treeNode) {
            getModelLeafNodes(treeNode, leafNodes);
        });
    }
}


//****************************************************************************************
//
//      Group data according to node model types
//
//****************************************************************************************


    // group the children of a treeNode according to their types
function groupDataByType(treeNode) {
    var subTypes = {};

    if (treeNode === undefined || treeNode === null) {
        treeNode = _root;
    }

        // if the treeNode contains only one child, dig deeper to see if there're more branches
    while (treeNode.children && treeNode.children.length === 1) {
        treeNode = treeNode.children[0];
    }

    $.each(treeNode.children, function(i, childNode) {
        var leafNodes = [];
        getModelLeafNodes(childNode, leafNodes);
        subTypes[childNode.name] = leafNodes;
    });

    return subTypes;
}


//****************************************************************************************
//
//      Group data according to specific property value
//
//****************************************************************************************


    // group the data by a property string, two things are returned
    // a buckets object that uses the property value as the key and dbIds as the value
    // and a misCount array which contains all the nodes that doesn't have such property
function groupDataByProperty(propertyName, callback) {
    var buckets = {};
    var misCount = [];

        // iterate through the preloaded leafNodes to check their properties
    $.each(_modelLeafNodes, function(index, dbId) {
        _viewerMain.getProperties(dbId, function(propObj) {
            for (var i = 0; i < propObj.properties.length; i++) {
                if (propObj.properties[i].displayName === propertyName && (!propObj.properties[i].hidden)) {
                    var formatVal = Autodesk.Viewing.Private.formatValueWithUnits(propObj.properties[i].displayValue, propObj.properties[i].units, propObj.properties[i].type);
                    if (!(formatVal in buckets)) {
                        buckets[formatVal] = [];
                    }
                    buckets[formatVal].push(dbId);
                    break;
                } else if (i == propObj.properties.length - 1) {
                    misCount.push(dbId);
                }
            };

            if (index === _modelLeafNodes.length - 1) {
                if (callback) {
                    callback(buckets, misCount);
                }
            }
        });
    });
}


//****************************************************************************************
//
//      Group quantity data according to a certain range
//
//****************************************************************************************


    // first get all the quantity data and their dbIds by propertyName, and put them in an array
    // in the meantime, find the min and max value to prepare for range grouping in next step
function getQtyDataByProperty(propertyName, callback) {
    var qtyArr = [];
    var bound = {"min":-0.1, "max":-0.1};
    var misCount = [];

    // console.time("getQtyByProperty");
    $.each(_modelLeafNodes, function(index, dbId) {
        _viewerMain.getProperties(dbId, function(propObj) {

            for(var i = 0; i < propObj.properties.length; i++) {
                if (propObj.properties[i].displayName === propertyName) {
                    var propValue = parseFloat(propObj.properties[i].displayValue);
                    if (propValue < bound.min || bound.min < 0)
                        bound.min = propValue;
                    if (propValue > bound.max || bound.max < 0)
                        bound.max = propValue;
                    var formatVal = Autodesk.Viewing.Private.formatValueWithUnits(propObj.properties[i].displayValue, propObj.properties[i].units, propObj.properties[i].type);
                    qtyArr.push({"dbId":dbId, "val":propValue, "label":formatVal, "units":propObj.properties[i].units});
                    break;
                } else if (i == propObj.properties.length - 1) {
                    misCount.push(dbId);
                }
            }

            if ( index === _modelLeafNodes.length - 1) {
                // console.timeEnd("getQtyByProperty");
                if (callback) {
                    callback(qtyArr, misCount, bound);
                }
            }
        });
    });
}


    // group the quantity array by range, returned is a buckets object that uses the range label 
    // as key and the dbIds as value, range is  calculated based on the min value and the range value,
    // the array does not has to be sorted
function groupQtyDataByRange(qtyArr, bound, range, callback) {
    var buckets = {};
    var min = bound.min;
    range = parseFloat(range);

    for (var i = qtyArr.length - 1; i >= 0; i--) {
        var key;
        if (range === 0) {
            key = qtyArr[i].label;
        } else {
                // calculate the range label according to min and range
            var floor = min + range * Math.floor((qtyArr[i].val-min)/range);
            var ceil = floor + range;
            key = Math.round(floor*1000)/1000 + " - " + Math.round(ceil*1000)/1000 + " " + qtyArr[i].units;
        }
            // check if this range label is already in the buckets
        if (!buckets.hasOwnProperty(key))
            buckets[key] = [];

        buckets[key].push(qtyArr[i].dbId);
    };

    if (callback)
        callback(buckets);
}



