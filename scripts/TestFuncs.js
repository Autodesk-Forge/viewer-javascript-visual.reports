

function workaround_2D_select(selSet) {
       //dbNodeIdArray is the list of ids you would normally pass to the viewer.select() call. 
    var tmp = [];

    for (var i=0; i<selSet.length; i++) {
        var dbId = selSet[i];
        tmp.push({ dbId : dbId, fragIds : _viewerSecondary.model.getData().fragments.dbId2fragId[dbId] });
    }

    _viewerSecondary.impl.selector.setSelection(tmp);
}
    