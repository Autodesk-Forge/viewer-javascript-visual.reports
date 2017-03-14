const themes = require('./Themes.js');
const cameraPin = require('./CameraPin.js');

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
