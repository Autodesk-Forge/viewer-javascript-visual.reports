var _lastPanel;

// resize panel vars
var isResizing = false,
    lastDownX = 0;

$(function() {


    // resize panel
    var container = $('#viewer-group'),
        top = $('#viewerMain-panel'),
        bottom = $('#viewerSecondary-panel'),
        handle = $('#handle');

    handle.on('mousedown', function (e) {
        isResizing = true;
        lastDownX = e.clientX;
    });

    $(document).on('mousemove', function (e) {
        // we don't want to do anything if we aren't resizing.
        if (!isResizing) 
            return;
        
        var scrollTop = $(window).scrollTop();
        top.css('height', e.clientY - container.offset().top + scrollTop);
        bottom.css('height', container.height() - (e.clientY - container.offset().top) - scrollTop);

    }).on('mouseup', function (e) {
        // stop resizing
        isResizing = false;
    });



  $('.tab-buttons a').on('click', function(){
    $(this).closest('li').addClass('active').siblings().removeClass('active');
    $('.tab-panel').removeClass('active').filter(this.hash).addClass('active');

    if (_lastPanel === "tab_button_5")
    	uninitializePinPanel();
    // else if (_lastPanel ==="tab_button_4" && this.id !== "tab_button_4")
    // 	unitializeThemePanel();

    if (this.id === "tab_button_5")
    	initializePinPanel();

    _lastPanel = this.id;
    return false
  });

  $('.report-select-input').change(function(){
    var theText = $(this).find('option:selected').text();
    if (theText.indexOf('Qty - ') > -1){
        theText = theText.substring(6);
    }
    $(this).prev('.report-select-mask').text(theText);
  });

});

// seems to be needed by Autodesk's viewer3D.js
function isTouchDevice() { return false; }