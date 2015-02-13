

/*  NOTE: still working on the correct way to get all the properties asynchronously.  It currently blows
    past the loop before all the asyncs have finished and we don't get the right data for the pieChart '*/

function getPropsAsync(dbId, propNameStr, pieData) {
    _viewerMain.getProperties(dbId, function(data) {
        //console.log("working on dbID: " + dbId);
        if ((data.properties === null) || (data.properties.length === 0)) {
            console.log("There are no properties for this node.");
            return;
        }
        for (var j=0; j<data.properties.length; j++) {
            var obj = data.properties[j];
            if (obj.displayName === propNameStr) {
                //console.log("found property");
                var index = getPropBucket(pieData.content, obj.displayValue);
                var tmpObj = pieData.content[index];
                tmpObj.value++;  // bump the count
                tmpObj.lmvIds.push(data.dbId);   // add the LMV dbID
            }
        }
    });
}

    // iterate through all the leaf node objects of the ModelStructure tree and sort into "buckets"
    // based on some Property Name (eg "Material")
function getReportDataByPropName(propNameStr, pieOpts, callbackFunc) {
    
    var leafNodes = getLeafNodeObjs();
    //console.log("\nLEAF NODES: " + leafNodes.length);   // NOTE: Leaf nodes always is correct

        // for each leaf node, find out what Material bucket this object goes in
    var promises = [];
    function createPromise() {
        var p = $.Deferred();
        promises.push(p);
        return p.resolve; // Doesn't create an anonymous function
    };
    $.each(leafNodes, function(num, dbId) {
        getPropsAsync(dbId, propNameStr, pieOpts.data);
    });
        // set a timer so the array gets loaded correctly
    //window.setTimeout(function(){$.when.apply($, promises).then(allDone(pieData));},100);
    window.setTimeout(function() {
        $.when.apply($, promises).then(function () {
            if (callbackFunc)
                callbackFunc(pieOpts);
        });
    }, 1000);
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


/////  Functions to get by Object Type (mostly useful with Revit files)

function getReportDataByObjType(pieOpts, callbackFunc) {
    
    _viewerMain.getObjectTree(function(objTree) {
        
        $.each(objTree.children, function(num, treeNode) {
                // create a new object to attach to the tree node
            var myObj = {};
            myObj.label = treeNode.name;
            
            myObj.value = 0;    // count of how many there are
            myObj.lmvIds = [];  // empty array of Ids that match this type
            recursiveCountLeafNodes(treeNode, myObj);
            
            pieOpts.data.content.push(myObj);
            
        }); 
     });
    
    if (callbackFunc)
        callbackFunc(pieOpts);
}

    // recursively add all the nodes in the Model Structure of LMV to the jsTree
function recursiveCountLeafNodes(treeNode, myObj) {
    if (!treeNode.children) {
        myObj.value++;
        myObj.lmvIds.push(treeNode.dbId);
        return;
    }
    else {
        $.each(treeNode.children, function(num, treeNode2) {
            recursiveCountLeafNodes(treeNode2, myObj);
        });
    }
}

