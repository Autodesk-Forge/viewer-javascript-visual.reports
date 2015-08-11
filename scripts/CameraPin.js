//
//  Camera Pin
//  Location bookmarks for presentaion mode. Data for the pins are wrapped in a class 
//  contained in PinData.js, functions for creating the UI on the page are in PinUI.js
//  This script handles init/uninit and click behavior, as well as the view transition.
//

var _viewerPin;
var _currentPin;
var _shouldAddNewPin = false;

var _checkTransition = null;
var _checkCount = 0;

    // timer for on tour mode
function startTour(index) {
    if (index < _viewerPin.pinobjs.length && index >= 0) {
        $("#"+_viewerPin.pinobjs[index].pinid).click();
        setTimeout(startTour, 1500, index+1);
    } else {
        _viewerMain.escapeScreenMode();
    }
}

    // initialize the data and view panel for presentation
function initializePinPanel() {

        // initialize the pin data
    _viewerPin = new ViewerPin($("#pu_modelToLoad :selected").text());

        // need to update local storage of pins before tab close
    window.addEventListener("beforeunload", function() {
        if (_viewerPin)
            _viewerPin.updateLocalStorage();
    });

        // add event listeners on the viewer
    _viewerMain.container.addEventListener("click", handleViewerClick);
    _viewerMain.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, updatePinsOnView);
    _viewerMain.addEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, updatePinsOnView);
    
        // initialize the pin ui
    initPinOverlay();
    initPinTablelist();
}

    // uninitialize the data and view panel for presentation
function uninitializePinPanel() {

        // update local storage before swtiching to another tab
    if (_viewerPin) {
        _viewerPin.updateLocalStorage();
        $("#pintablelist").empty();
        _viewerMain.container.removeChild($("#pushpinOverlay")[0]);
    }

        // remove event listeners on the viewer
    _viewerMain.container.removeEventListener("click", handleViewerClick);
    _viewerMain.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, updatePinsOnView);
    _viewerMain.removeEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, updatePinsOnView);
    
    _viewerPin = null;
    _shouldAddNewPin = false;
}

    // called before creating a new pin, mark the overlay on the viewer canvas
    // responsive to get the location of the new pin when user clicks
function prepareForAddNewPin() {

        // change the pointer events of the overlay from none to visible
    d3.select("#pushpinOverlay")
    .style("pointer-events", "visible")
    .style("cursor", "pointer");

        // mark ready to receive click event on the viewer to create new pin
    _shouldAddNewPin = true;
}

    // creating a new pin, including the data and its relative visual components
function createNewPin(client, world, label) {

    var divid = "pin" + getUUID();

        // NOTE: we can pass in a filter to getState() if we only want certain values like Camera
    /*var optionsFilter = {
        guid: true,
        seedURN: true,
        overrides: true,
        objectSet: {
            id: true,
            isolated: true,
            hidden: true,
            explodeScale: true
        },
        viewport: true,
        renderOptions: true
    };*/
    
        // update the pin data
    var curViewerState = _viewerMain.getState(/*optionsFilter*/);  
    console.log("ViewerState", curViewerState);

    _viewerPin.addPin(divid, world, label, curViewerState); 

        // update the pin ui
    pushPinToOverlay(divid, client);
    pushPinToTableList(divid, label, document.getElementById("pintable"));

        // focus on the new pin's label for editing
    $("#row"+divid).find(".celllabel").dblclick();

}

    // transform array to THREE.Vector3
function positionToVector3(position) {
    return new THREE.Vector3(parseFloat(position[0]), parseFloat(position[1]), parseFloat(position[2]));
}

    // handle pin click, transit to its specific viewport and setup the headsup display
function viewPinClicked(evt) {

    var viewport = _viewerPin.getViewState(this.id);
    _viewerMain.restoreState(viewport);     // NOTE: we can pass in a filter if we only want certain values like Camera position
    
        //  NOTE:  In the above call, we are just relying on the ViewerState function to capture everything in a JSON object and
        // the restore it when asked.  We could do a more controlled way and only worry about the Camera and try to do some effects
        // on our own, but that usually isn't necessary.
    /*var nav = _viewerMain.navigation;

    var eye = positionToVector3(viewport.eye);
    var up = positionToVector3(viewport.up);
    var target = positionToVector3(viewport.target);
    var fov = ("fieldOfView" in viewport) ? parseFloat(viewport.fieldOfView) : nav.getVerticalFov();
    var pivot = positionToVector3(viewport.pivotPoint);

    nav.setCameraUpVector(up);

        // if destination's camera mode is different, switch first
    if ("isOrthographic" in viewport) {
        if (viewport.isOrthographic) {
            nav.toOrthographic();
        } else {
            nav.toPerspective();
        }
    }

        // request transition on the viewer
    nav.setRequestTransition(true, eye, target, fov, false);
    nav.setPivotPoint(pivot);
    nav.setPivotSetFlag(true);

        // stop transition check of other click events
    if (_checkTransition !== null)
        clearInterval(_checkTransition);

        // check the viewer transition, display the headsup when done
    _checkTransition = setInterval(function() {
        var result = _viewerMain.navigation.getTransitionActive();
        if (!(result) || _checkCount > 20) {
            clearInterval(_checkTransition);
            _checkTransition = null;
            _checkCount = 0;
            var clientPos = worldToClient(vec, _viewerMain.getCamera());
            setHeadsUpDisplay(pinObj.label, clientPos.x, clientPos.y, true);
        } else {
            _checkCount += 1;
        }
    }, 100);*/



        // Uncomment for headsup display, this will set the 
        // text/position/visibility of the headsup div
    /*

    var pinObj = _viewerPin.getPinObj(this.id);
    var vec = positionToVector3([pinObj.x, pinObj.y, pinObj.z]);
    var clientPos = worldToClient(vec, _viewerMain.getCamera());
    hideHeadesUpDiv(false);
    setHeadsUpDisplay(pinObj.label, clientPos.x, clientPos.y, true);

    */
}


    // update the pin coordinates on the 2D canvas when camera moves
function updatePinsOnView() {
    var camera = _viewerMain.getCamera();

    _viewerPin.each(function(pinid, label, position) {
        var vec = positionToVector3(position);
        var newPos2D = worldToClient(vec, _viewerMain.getCamera());
        d3.select("#"+pinid)
        .attr("cx", newPos2D.x)
        .attr("cy", newPos2D.y);
    });
}

    // transform position in 3d world to client coordinate
function worldToClient(position, camera) {
    var p = new THREE.Vector4();

    p.x = position.x;
    p.y = position.y;
    p.z = position.z;
    p.w = 1;

    p.applyMatrix4(camera.matrixWorldInverse);
    p.applyMatrix4(camera.projectionMatrix);

    if (p.w > 0)
    {
        p.x /= p.w;
        p.y /= p.w;
        p.z /= p.w;
    }

    var point = _viewerMain.impl.viewportToClient(p.x, p.y);
    point.x = Math.floor(point.x) + 0.5;
    point.y = Math.floor(point.y) + 0.5;

    return point;
}

    // calculate the 2D position for the new pin to be added
    // should only work under editing mode, i.e. after prepareForAddNewPin is called
function handleViewerClick(evt) {

    if (_shouldAddNewPin) {

        var viewport = _viewerMain.navigation.getScreenViewport();
            
            // calculate  relative positon on the canvas, not in window
        var clientPos =  {
            x: evt.clientX - viewport.left,
            y: evt.clientY - viewport.top
        };
            // get normalized positon on canvas
        var normedpos = {
            x: (evt.clientX - viewport.left) / viewport.width,
            y: (evt.clientY - viewport.top) / viewport.height
        };

            // first to see if the clicked positon is hit on an object of viewer
        var hitPoint = _viewerMain.utilities.getHitPoint(normedpos.x, normedpos.y);
        if (hitPoint === null)
            hitPoint = _viewerMain.navigation.getWorldPoint(normedpos.x, normedpos.y);
        createNewPin(clientPos, hitPoint, "undefined");        
    }

}

    // random id generator for new pins
function getUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};


$(document).ready(function() {
    $("#tourbtn").click(function () {
        _viewerMain.setScreenMode(2);
        setTimeout(function() {
            startTour(0);
        }, 150);
    });
    $("#viewportbtn").click(prepareForAddNewPin);
    $("#pincheckbox").click(function() {
        $("#pushpinOverlay").toggle();
    });
});
