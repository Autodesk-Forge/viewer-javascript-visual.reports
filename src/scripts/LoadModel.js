
// LoadModel.js
//
// This file handles changing Models and Views (3D/2D).  All the models come from my bucket and are authorized by
// a AuthToken Service running in the cloud.  If you want to extend this, you'll have to clone the AuthTokenServer
// project and setup your own version with the appropriate ConsumerKey and SecretKey from your app.
//
// Jim Awe
// Autodesk, Inc.


    // some global vars  (TBD: consider consolidating into an object)
window._viewerMain = null;             // the viewer
window._viewerSecondary = null;        // the viewer
window._loadedDocument = null;

let _views2D = null;
let _views3D = null;

window._blockEventMain = false;
var _blockEventSecondary = false;

// dependencies
const pieChartReport = require('./Report_PieChart.js');
const reportData = require('./ReportData.js');
const authToken = require('./MyAuthToken.js');
const themes = require('./Themes.js');
const cameraPin = require('./CameraPin.js');

let models = require('./models.js').models;

// setup for PRODUCTION
var _viewerEnv = "AutodeskProduction";
var _myAuthToken = new authToken.MyAuthToken("PROD");



function blankOutReportPane() {
    $("#pieChart").empty();
    $("#barChart").empty();
    $("#bar-chart").empty();
    $("#sheetThumbs").empty();
}

    // populate the popup menu with the avaialable models to load (from the array above)
function loadModelMenuOptions() {
        // add the new options for models
    var sel = $("#pu_modelToLoad");
    $.each(models, function(i, item) {
        sel.append($("<option>", {
            value: i,
            text : item.label
        }));
    });
}

    // user selected a new model to load
 $("#pu_modelToLoad").change(function(evt) {
     evt.preventDefault();

     var index = parseInt($("#pu_modelToLoad option:selected").val(), 10);
     console.log("Changing model to: " + models[index].label);
     loadDocument(models[index].urn);

     cameraPin.uninitializePinPanel();
     themes.unitializeThemePanel();
     blankOutReportPane();
});

    // populate the popup menu with the avaialable views to load (from the array above)
function loadViewMenuOptions() {
    var sel = $("#pu_viewToLoad");

    sel.find("option").remove().end();  // remove all existing options

            // add the 3D options
    $.each(_views3D, function(i, item) {
        sel.append($("<option>", {
            value: i,
            text : item.name
        }));
    });

    sel.append($("<option disabled>─────────────────</option>"));    // add a separator

        // add the 2D options
    $.each(_views2D, function(i, item) {
        sel.append($("<option>", {
            value: i + 1000,    // make 2D views have a value greater than 1000 so we can tell from 3D
            text : item.name
        }));
    });
}

    // user selected a new view to load
 $("#pu_viewToLoad").change(function(evt) {
    evt.preventDefault();

    var index = parseInt($("#pu_viewToLoad option:selected").val(), 10);

    if (index >= 1000) {    // 2D views we gave a higher index to in the Popup menu
        index -= 1000;
        console.log("Changing to 2D view: " + _views2D[index].name);
        switchSheet();
        loadView(window._viewerSecondary, _views2D[index]);
    }
    else {
        console.log("Changing to 3D view: " + _views3D[index].name);
        switchSheet();
        loadView(window._viewerSecondary, _views3D[index]);
    }
});

function switchSheet() {

    if (window._viewerSecondary !== null) {
        window._viewerSecondary.tearDown();     // delete everything associated with the current loaded asset
    }

    window._viewerSecondary.setUp();    // set it up again for a new asset to be loaded
}

// STEPS:
//  0)  Initialize the Viewing Runtime
//  1)  Load a Document
//  2)  Get the available views (both 2D and 3D)
//  3)  Load a specific view
//      a)  initialize viewer for 2D or 3D
//      b)  load a "viewable" into the appropriate version of the viewer
//  4)  Attach a "listener" so we can keep track of events like Selection


    // initialize the viewer into the HTML placeholder
function initializeViewerMain() {

        // if we already have something loaded, uninitialize and re-init (can't just load a new file!:  ?? is that a bug?)
    if (window._viewerMain !== null) {
        window._viewerMain.uninitialize();
        window._viewerMain = null;
    }

    var viewerElement = document.getElementById("viewerMain");  // placeholder in HTML to stick the viewer
    window._viewerMain = new Autodesk.Viewing.Private.GuiViewer3D(viewerElement, {});

    var retCode = window._viewerMain.initialize();
    if (retCode !== 0) {
        alert("ERROR: Couldn't initialize main viewer!");
        console.log("ERROR Code: " + retCode);      // TBD: do real error handling here
    }

        // when the geometry is loaded, automatically run the first report

   pieChartReport.disableReportMenu();
    window._viewerMain.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, function (event) {

        pieChartReport.enableReportMenu();
        //runReport(-1);   // run the currently selected report (the first one if this is the first model loaded, current one if loading a subsequent model)

        $("#tab_button_1").click();
        reportData.startReportDataLoader(pieChartReport.runReport);
    });

        // when selecting in the Primary viewer, select the matching items in the Secondary viewer
    window._viewerMain.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, function (event) {
        if (_blockEventSecondary)
            return;

            // if a single item selected in 3D, select that same item in 2D.
        var curSelSetMain = window._viewerMain.getSelection();
        //if (curSelSetMain.length === 1) {
            window._blockEventMain = true;
            window._viewerSecondary.select(curSelSetMain)//select objects in secondary view
            window._blockEventMain = false;
        //}
    });
}

function initializeViewerSecondary() {

        // if we already have something loaded, uninitialize and re-init (can't just load a new file!:  ?? is that a bug?)
    if (window._viewerSecondary !== null) {
        window._viewerSecondary.uninitialize();
        window._viewerSecondary = null;
    }

    var viewerElement = document.getElementById("viewerSecondary");  // placeholder in HTML to stick the viewer
    window._viewerSecondary = new Autodesk.Viewing.Private.GuiViewer3D(viewerElement, {});

    var retCode = window._viewerSecondary.initialize();
    if (retCode !== 0) {
        alert("ERROR: Couldn't initialize secondary viewer!");
        console.log("ERROR Code: " + retCode);      // TBD: do real error handling here
    }

        // when selecting objects in the Secondary viewer, also select the matching itmes in the Primary viewer
    window._viewerSecondary.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, function (event) {
        if (window._blockEventMain)
            return;

            // if a single item, select and isolate same thing in 3D.
        var curSelSetSecondary = window._viewerSecondary.getSelection();
        if (curSelSetSecondary.length === 1) {
            _blockEventSecondary = true;

            //window._viewerMain.clearSelection();   // reset to nothing selected (otherwise we end up in cases where it just adds to the existing selection)

                // normal behavior is to isolate and zoom into the selected object, but we can only do that in 3D.
            if (window._viewerMain.model.is2d() == false) {
                window._viewerMain.select(curSelSetSecondary);
                window._viewerMain.isolate(curSelSetSecondary);
                window._viewerMain.fitToView(curSelSetSecondary);
            }
            else {
                window._viewerMain.select(curSelSetSecondary);   // Call work-around to select objects in secondary view (see file TestFuncs.js)
                window._viewerMain.fitToView(curSelSetSecondary);
            }

            _blockEventSecondary = false;
        }
    });

        // when we change sheets, we want to re-select things after this sheet is loaded
    window._viewerSecondary.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, function (event) {
        window._blockEventMain = true; // prevent normal event of select/isolate/fit in main viewer
        if (window._viewerMain.model)
            window._viewerSecondary.select(window._viewerMain.getSelection());
        window._blockEventMain = false;
    });
}


    // load a specific document into the intialized viewer
function loadDocument(urnStr) {

    window._loadedDocument = null; // reset to null if reloading

    if (!urnStr || (0 === urnStr.length)) {
        alert("You must specify a URN!");
        return;
    }
    var fullUrnStr = "urn:" + urnStr;

    Autodesk.Viewing.Document.load(fullUrnStr, function(document) {
        window._loadedDocument = document; // keep this in a global var so we can reference it in other spots

            // get all the 3D and 2D views (but keep in separate arrays so we can differentiate in the UX)
        _views3D = Autodesk.Viewing.Document.getSubItemsWithProperties(document.getRootItem(), {'type':'geometry', 'role':'3d'}, true);
        _views2D = Autodesk.Viewing.Document.getSubItemsWithProperties(document.getRootItem(), {'type':'geometry', 'role':'2d'}, true);

        loadViewMenuOptions();                   // populate UX with views we just retrieved
        initializeViewerMain();
        initializeViewerSecondary();

            // load up first 3D view by default into the primary viewer
        if (_views3D.length > 0) {
            loadView(window._viewerMain, _views3D[0]);
        }
        else {      // there weren't any 3D views!
            if (_views2D.length > 0) {
                loadView(window._viewerMain, _views2D[0]);
                $('#pu_viewToLoad').val('1000'); // selects first option in 2D list
            }
            else {
                alert("ERROR: No 3D or 2D views found in this drawing!");
            }
        }
            // now load the Secondary viewer with the first 2D view by default
        if (_views2D.length > 0) {
            loadView(window._viewerSecondary, _views2D[0]);
            $('#pu_viewToLoad').val('1000'); // selects first option in 2D list
        }
        else {
            console.log("WARNING: No 2D views found for secondary view, using additional 3D view");
            if (_views3D.length > 0)
                loadView(window._viewerSecondary, _views3D[0]);
        }


    }, function(errorCode, errorMsg) {
        alert('Load Error: ' + errorCode + " " + errorMsg);
    });
}

    // for now, just simple diagnostic functions to make sure we know what is happing
function loadViewSuccessFunc()
{
    console.log("Loaded viewer successfully with given asset...");
}

function loadViewErrorFunc()
{
    console.log("ERROR: could not load asset into viewer...");
}

    // load a particular viewable into the viewer (either Primary or Secondary depending on what's passed in)
function loadView(viewer, viewObj) {
    var path = window._loadedDocument.getViewablePath(viewObj);
    console.log("Loading view URN: " + path);

    viewer.load(path, window._loadedDocument.getPropertyDbPath(), loadViewSuccessFunc, loadViewErrorFunc);
}

    // wrap this in a simple function so we can pass it into the Initializer options object
function getAccessToken() {
    return _myAuthToken.value();
}

function dbgPrintLmvVersion()
{
        // builds greater than 0.1.98 will have a variable listing the version number
    if (typeof LMV_VIEWER_VERSION !== "undefined") {
        console.log("LMV_VIEWER_VERSION: " + LMV_VIEWER_VERSION);
    }
    else {
        console.log("LMV_VIEWER_VERSION: 0.1.98 or earlier");
    }
}

    // called when HTML page is finished loading, trigger loading of default model into viewer
function loadInitialModel() {

    console.log("onload: loadInitialModel in LoadModel.js");

    dbgPrintLmvVersion();

    loadModelMenuOptions();                  // populate the list of available models for the user

    var options = {
      env: _viewerEnv, // AutodeskProduction, AutodeskStaging, or AutodeskDevelopment (set in global var in this project)
      getAccessToken: getAccessToken,
      refreshToken: getAccessToken
    };
    Autodesk.Viewing.Initializer(options, function() {
        loadDocument(models[0].urn);   // load first entry by default
    });
}

window.loadInitialModel = loadInitialModel;
