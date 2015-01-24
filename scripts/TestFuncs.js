

function workaround_2D_select(selSet) {
    if (_viewerSecondary.model.is2d()) {
            //dbNodeIdArray is the list of ids you would normally pass to the viewer.select() call. 
        var tmp = [];

        for (var i=0; i<selSet.length; i++) {
            var dbId = selSet[i];
            tmp.push({ dbId : dbId, fragIds : _viewerSecondary.model.getData().fragments.dbId2fragId[dbId] });
        }

        _viewerSecondary.impl.selector.setSelection(tmp);
    }
    else {
        _viewerSecondary.select(selSet);
    }
}

function workaround_2D_selectMainViewer(selSet) {
    if (_viewerMain.model.is2d()) {
            //dbNodeIdArray is the list of ids you would normally pass to the viewer.select() call. 
        var tmp = [];

        for (var i=0; i<selSet.length; i++) {
            var dbId = selSet[i];
            tmp.push({ dbId : dbId, fragIds : _viewerSecondary.model.getData().fragments.dbId2fragId[dbId] });
        }

        _viewerMain.impl.selector.setSelection(tmp);
    }
    else {
        _viewerMain.select(selSet);
    }
}
    