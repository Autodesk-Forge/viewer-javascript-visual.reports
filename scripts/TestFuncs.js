    // user selected a new model to load
$("#bn_select2D").click(function(evt) {  
    evt.preventDefault();
     
     //dbNodeIdArray is the list of ids you would normally pass to the viewer.select() call. 
    var tmp = [];

    //for (var i=0; i<dbNodeIdArray.length; i++) {
        var dbId = 1958;
        tmp.push({ dbId : dbId, fragIds : _viewerSecondary.model.getData().fragments.dbId2fragId[dbId] });
    //}

    _viewerSecondary.impl.selector.setSelection(tmp);
     
    //_viewerSecondary.select(1958);
});

function workaround_2D_select(selSet) {
       //dbNodeIdArray is the list of ids you would normally pass to the viewer.select() call. 
    var tmp = [];

    for (var i=0; i<selSet.length; i++) {
        var dbId = selSet[i];
        tmp.push({ dbId : dbId, fragIds : _viewerSecondary.model.getData().fragments.dbId2fragId[dbId] });
    }

    _viewerSecondary.impl.selector.setSelection(tmp);
}