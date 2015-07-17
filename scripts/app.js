var _lastPanel;

$(function() {
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
});

// seems to be needed by Autodesk's viewer3D.js
function isTouchDevice() { return false; }