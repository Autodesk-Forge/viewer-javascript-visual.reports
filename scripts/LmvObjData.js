function getLmvObjData() {
    var pieData = {
            "sortOrder": _sortOrder,
            "content": []
            };
    
    _viewerMain.getObjectTree(function(objTree) {
        
        $.each(objTree.children, function(num, treeNode) {
                // create a new object to attach to the tree node
            var myObj = {};
            myObj.label = treeNode.name;
            
            myObj.value = 0;    // count of how many there are
            myObj.lmvIds = [];  // empty array of Ids that match this type
            recursiveCountLeafNodes(treeNode, myObj);
            
            pieData.content.push(myObj);
            
        }); 
     });
    
    return pieData;
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

function clickPieWedge(evt) {
    _viewerMain.isolateById(evt.data.lmvIds);
    _viewerSecondary.select(evt.data.lmvIds);
}
