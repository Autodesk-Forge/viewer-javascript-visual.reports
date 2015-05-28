
$(document).ready(function() {
    
    $("#bn_showObjsonSheet").click(function(evt) {  
        evt.preventDefault();

        //var curSelSet = _viewerMain.getSelection();
        //console.log(curSelSet);
        
        //_viewerSecondary.clearSelection();
        
        var selSet = [0];
        
        _blockEventMain = true;
        _viewerSecondary.select(selSet);
        _blockEventMain = false;
    });
    
    $("#bn_showWhereViewable").click(function(evt) {  
        evt.preventDefault();

        var curSelSet = _viewerMain.getSelection();
        
        if (curSelSet.length === 0) {
            alert("No object is selected.");
        }
        else if (curSelSet.length > 1) {
            alert("Only one object can be selected.");
        }
        else {
            $('#sheetThumbs').empty();
            _viewerMain.getProperties(curSelSet[0], getViewableInProps, getViewableInErrorFunc);
        }
    });
    
        // just go through the properties for the given object and find the ones that
        // have a "viewable_in" property.  Then retrieve the thumbnail for those
    function getViewableInProps(data) {
        if ((data.properties == null) || (data.properties.length == 0)) {
            alert("There are no properties for this node.");
            return;
        }
            
        var i = 0;
        $.each(data.properties, function(num, obj) {
            if (obj.displayName === "viewable_in") {
                console.log("ViewableIN: %s", obj.displayValue);
                displayViewableInThumbs(obj.displayValue, i++);
            }
        });
    }

    function getViewableInErrorFunc(data) {
        alert("ERROR: Could not get properties for the selected object.");
        return null;
    }
    
    function loadSelectedSheet(sheetName) {
            // find the popup list option with this sheet name and trigger it as current
        $("#pu_viewToLoad option").each(function(i) {
            if (sheetName === $(this).text()) {
                $("#pu_viewToLoad").val($(this).val());
                $("#pu_viewToLoad").trigger("change");
                return false;   // break each loop early
            }
        });
    }
    
        // create an image and add to the HTML DOM
    function displayViewableInThumbs(viewableInId, index) {
                
        var itemObjs = Autodesk.Viewing.Document.getSubItemsWithProperties(_loadedDocument.getRootItem(), {'viewableID':viewableInId}, true);
        console.assert(itemObjs.length === 1);
        var itemObj = itemObjs[0];  // convert from array
        
        var img = _loadedDocument.getThumbnailPath(itemObj, 300, 300);
        
        $("<img />")
            .attr("src", "" + img + "")
            .attr("id", "sheetThumb_" + index)
            .attr("title", itemObj.name)
            .on('click', function() {
                loadSelectedSheet(itemObj.name);
            })
            .appendTo($("#sheetThumbs"));
 
    };

});


