const themes = require('./Themes.js');
const cameraPin = require('./CameraPin.js');
$(function() {

  $('.report-select-input').change(function(){
    var theText = $(this).find('option:selected').text();
    if (theText.indexOf('Qty - ') > -1){
        theText = theText.substring(6);
    }
    $(this).prev('.report-select-mask').text(theText);
  });

});
