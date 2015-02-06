

function testAsync() {
    
    var leafNodes = getLeafNodeObjs();
    console.log("\nLEAF NODES: " + leafNodes.length);   // NOTE: Leaf nodes always is correct

        // for each leaf node, find out what Material bucket this object goes in
    var promises = [];
    $.each(leafNodes, function(num, dbId) {
        promises.push(function() {
            console.log("promise: " + num);
        });
    });
    $.when(promises).done(function() {
        console.log("All done");
    }, function() {
        console.log("Error happened!");
    });
}

    // iterate through all the leaf node objects of the ModelStructure tree and sort into "buckets"
    // based on some Property Name (eg "Material")
function getLmvObjDataMat(propNameStr, callbackFunc) {
    var pieData = {
        "sortOrder": _sortOrder,
        "content": []
    };
    
    var leafNodes = getLeafNodeObjs();
    console.log("\nLEAF NODES: " + leafNodes.length);   // NOTE: Leaf nodes always is correct

        // for each leaf node, find out what Material bucket this object goes in
    var promises = [];
    $.each(leafNodes, function(num, dbId) {
        promises.push(_viewerMain.getProperties(dbId, function(data) {
            if ((data.properties === null) || (data.properties.length === 0)) {
                console.log("There are no properties for this node.");
                return;
            }
            for (var j=0; j<data.properties.length; j++) {
                var obj = data.properties[j];
                if (obj.displayName === propNameStr) {
                    var index = getPropBucket(pieData.content, obj.displayValue);
                    var tmpObj = pieData.content[index];
                    tmpObj.value++;  // bump the count
                    tmpObj.lmvIds.push(data.dbId);   // add the LMV dbID
                }
            }
            //console.log("prop num: " + j);
        }));
        //console.log("LeafNodeNum: " + i);
    });
    $.when.apply($, promises).then(function() {
        console.log("Buckets: %O", pieData.content);
        if (callbackFunc)
            callbackFunc(pieData);
    }, function() {
        console.log("Error happened!");
    });
}

    // get the bucket object that already exists, or create a new one and return the index
function getPropBucket(buckets, valueStr) {
    for (var i=0; i<buckets.length; i++) {
        if (buckets[i].label === valueStr)
            return i;
    }
        // doesn't exist, so add it
    var bucketObj = {};
    bucketObj.label = valueStr;
    bucketObj.value = 0;
    bucketObj.lmvIds = [];
    
    buckets.push(bucketObj);
    return buckets.length - 1;
}



function clickPieWedgeMaterial(evt) {
    _viewerMain.isolateById(evt.data.lmvIds);
    //_viewerSecondary.select(evt.data.lmvIds);
    workaround_2D_select(evt.data.lmvIds);
}


function getLeafNodeObjs() {
    var leafNodes = [];
    
    _viewerMain.getObjectTree(function(objTree) {
        $.each(objTree.children, function(num, treeNode) {
            recursiveGetLeafNodes(treeNode, leafNodes);
        }); 
     });
    
    return leafNodes;
}

    // recursively add all the leaf nodes
function recursiveGetLeafNodes(treeNode, leafNodes) {
    if (!treeNode.children) {
        leafNodes.push(treeNode.dbId);
        return;
    }
    else {
        $.each(treeNode.children, function(num, treeNode2) {
            recursiveGetLeafNodes(treeNode2, leafNodes);
        });
    }
}
