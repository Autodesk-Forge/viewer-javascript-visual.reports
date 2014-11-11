$(function() {
  $('.tab-buttons a').on('click', function(){
    $(this).closest('li').addClass('active').siblings().removeClass('active');
    $('.tab-panel').removeClass('active').filter(this.hash).addClass('active');
    return false
  });
});

// seems to be needed by Autodesk's viewer3D.js
function isTouchDevice() { return false; }