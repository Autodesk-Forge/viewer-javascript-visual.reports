
$(document).ready(function() {
    
    $("#bn_showRelationships").click(function(evt) {  
        evt.preventDefault();

        var curSelSet = _viewerMain.getSelection();
        console.log(curSelSet);

        //_viewerSecondary.select(manSelSet);
        
        var selSet = [0];
        //_viewerSecondary.select(selSet);
        workaround_2D_select(selSet);   // code Traian gave me to highlight on a 2D sheet
    });

});


