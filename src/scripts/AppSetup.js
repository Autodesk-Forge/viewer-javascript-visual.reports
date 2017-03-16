const themes = require('./Themes.js');
const cameraPin = require('./CameraPin.js');

var _lastPanel;

// resize panel vars
var isResizing = false,
    lastDownX = 0;

$(function() {

  $('.tab-buttons a').on('click', function(){
    $(this).closest('li').addClass('active').siblings().removeClass('active');
    $('.tab-panel').removeClass('active').filter(this.hash).addClass('active');

    if (_lastPanel === "tab_button_5")
    	cameraPin.uninitializePinPanel();

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
