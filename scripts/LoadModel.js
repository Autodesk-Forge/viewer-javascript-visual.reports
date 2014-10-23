
// LoadModel.js
//
// This file handles changing Models and Views (3D/2D).  All the models come from my bucket and are authorized by 
// a AuthToken Service running in the cloud.  If you want to extend this, you'll have to clone the AuthTokenServer 
// project and setup your own version with the appropriate ConsumerKey and SecretKey from your app.
//
// Jim Awe
// Autodesk, Inc.

    // some global vars  (TBD: consider consolidating into an object)
var _viewerMain = null;             // the viewer
var _viewerSecondary = null;        // the viewer
var _curSelSetMain = [];            // init to empty array
var _curSelSetSecondary = [];       // init to empty array
var _loadedDocument = null;
var _views2D = null;
var _views3D = null;

    // setup for STAGING
var _viewerEnv = "AutodeskStaging";
var _myAuthToken = new MyAuthToken("STG");

var _lmvModelOptions = [
    { label : "Urban House - NEW DB (Revit)",        urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9VcmJhbiUyMEhvdXNlJTIwLSUyMDIwMTUucnZ0"},
    { label : "Urban House (Revit)",        urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0My9VcmJhbiUyMEhvdXNlJTIwLSUyMDIwMTUucnZ0"},
    { label : "rme-basic-sample (Revit)",   urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0My9ybWVfYmFzaWNfc2FtcGxlX3Byb2plY3QucnZ0"},
    { label : "ViewTest1 (Revit)",          urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0My9WaWV3VGVzdDEucnZ0"},
    { label : "Factory (Navisworks)",       urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0My9Db21wbGV0ZWQlMjBQbGFudCUyMExheW91dCUyMGNvbnN0cnVjdGlvbi5ud2Q="},
    { label : "Lego Guy (Fusion)",          urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0My9sZWdvX2d1eTIwMTQwMTMxMDkxOTU4LmYzZA=="},
    { label : "Utility Knife (Fusion)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0My9VdGlsaXR5X0tuaWZlMjAxNDAxMjkxNDAwNDEuZjNk"}
];

    // setup for PRODUCTION
/*var _viewerEnv = "AutodeskProduction";
var _myAuthToken = new MyAuthToken("PROD");

var _lmvModelOptions = [
    { label : "Urban House (Revit)",        urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9VcmJhbiUyMEhvdXNlJTIwLSUyMDIwMTUucnZ0"},
    { label : "rme-basic-sample (Revit)",   urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9ybWVfYmFzaWNfc2FtcGxlX3Byb2plY3QucnZ0"},
    { label : "Audobon Structure (Revit)",  urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9BdWRvYm9uJTIwLSUyMFN0cnVjdHVyZS5ydnQ="},
    { label : "ViewTest1 (Revit)",          urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9WaWV3VGVzdDEucnZ0"},
    { label : "Factory (Navisworks)",       urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9Db21wbGV0ZWQlMjBQbGFudCUyMExheW91dCUyMGNvbnN0cnVjdGlvbi5ud2Q="},
    { label : "Gatehouse (Navisworks)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9nYXRlaG91c2UyLm53ZA=="},
    { label : "Lego Man (Fusion)",          urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9sZWdvX2d1eTIwMTQwMTMxMDkxOTU4LmYzZA=="},
    { label : "Utility Knife (Fusion)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9VdGlsaXR5X0tuaWZlMjAxNDAxMjkxNDAwNDEuZjNk"}
];*/


    // populate the popup menu with the avaialable models to load (from the array above)
function loadModelMenuOptions() {
        // add the new options for models
    var sel = $("#pu_modelToLoad");
    $.each(_lmvModelOptions, function(i, item) {
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
    console.log("Changing model to: " + _lmvModelOptions[index].label);
    loadDocument(_lmvModelOptions[index].urn);
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
        initializeViewerSecondary();
        loadView(_viewerSecondary, _views2D[index]);
    }
    else {
        console.log("Changing to 3D view: " + _views3D[index].name);
        initializeViewerSecondary();
        loadView(_viewerSecondary, _views3D[index]);
    }
});

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
    if (_viewerMain !== null) {
        _vieweMain.uninitialize();
        _viewerMain = null;
        _curSelSetMain = [];
    }

    var viewerElement = document.getElementById("viewerMain");  // placeholder in HTML to stick the viewer
    _viewerMain = new Autodesk.Viewing.Private.GuiViewer3D(viewerElement, {});
   
    var retCode = _viewerMain.initialize();
    if (retCode !== 0) {
        alert("ERROR: Couldn't initialize main viewer!");
        console.log("ERROR Code: " + retCode);      // TBD: do real error handling here
    }
    _viewerMain.addEventListener("selection", function (event) {
        _curSelSetMain = event.dbIdArray;
        console.log("LmvQty: [Selection Set Main]: ", _curSelSetMain);
        
            // if a single item, help debug by dumping it to the console window.
        if (_curSelSetMain.length == 1) {
            var tmpObj = _viewerMain.model.getNodeById(_curSelSetMain[0]);
            console.debug(tmpObj);
            //_viewerSecondary.select(_curSelSetMain);
            workaround_2D_select(_curSelSetMain);
        }
    });
}

function initializeViewerSecondary() {
    
        // if we already have something loaded, uninitialize and re-init (can't just load a new file!:  ?? is that a bug?)
    if (_viewerSecondary !== null) {
        _viewerSecondary.uninitialize();
        _viewerSecondary = null;
        _curSelSetSecondary = [];
    }

    var viewerElement = document.getElementById("viewerSecondary");  // placeholder in HTML to stick the viewer
    _viewerSecondary = new Autodesk.Viewing.Private.GuiViewer3D(viewerElement, {});
   
    var retCode = _viewerSecondary.initialize();
    if (retCode !== 0) {
        alert("ERROR: Couldn't initialize secondary viewer!");
        console.log("ERROR Code: " + retCode);      // TBD: do real error handling here
    }
    _viewerSecondary.addEventListener("selection", function (event) {
        _curSelSetSecondary = event.dbIdArray;
        console.log("LmvQty: [Selection Set Secondary]: ", _curSelSetSecondary);
        
            // if a single item, help debug by dumping it to the console window.
        if (_curSelSetSecondary.length == 1) {
            //var tmpObj = _viewerSecondary.model.getNodeById(_curSelSetSecondary[0]);
            //console.debug(tmpObj);
            _viewerMain.isolateById(_curSelSetSecondary);
            _viewerMain.select(_curSelSetSecondary);
            _viewerMain.fitToView(_curSelSetSecondary);
        }
    });
}
    

    // load a specific document into the intialized viewer
function loadDocument(urnStr) {
    
    _loadedDocument = null; // reset to null if reloading

    if (!urnStr || (0 === urnStr.length)) {
        alert("You must specify a URN!");
        return;
    }
    var fullUrnStr = "urn:" + urnStr;
    
    Autodesk.Viewing.Document.load(fullUrnStr, function(document) {
        _loadedDocument = document; // keep this in a global var so we can reference it in other spots

            // get all the 3D and 2D views (but keep in separate arrays so we can differentiate in the UX)
        _views3D = Autodesk.Viewing.Document.getSubItemsWithProperties(document.getRootItem(), {'type':'geometry', 'role':'3d'}, true);
        _views2D = Autodesk.Viewing.Document.getSubItemsWithProperties(document.getRootItem(), {'type':'geometry', 'role':'2d'}, true);
        
        loadViewMenuOptions();                   // populate UX with views we just retrieved
        initializeViewerMain();
        initializeViewerSecondary();
        
            // load up first 3D view by default
        if (_views3D.length > 0) {
            loadView(_viewerMain, _views3D[0]);   
        }
        else {
            assert("ERROR: Can't find any Views in the current model!");    // this is NOT expected
        }
        if (_views2D.length > 0) {
            loadView(_viewerSecondary, _views2D[0]);
            $('#pu_viewToLoad').val('1000'); // selects first option in 2D list
        }
        else {
            console.log("WARNING: No 2D views found for secondary view, using additional 3D view");
            loadView(_viewerSecondary, _views3D[0]);
        }

        
    }, function(errorCode, errorMsg) {
        alert('Load Error: ' + errorMsg);
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

    // load a particular viewable into the viewer
function loadView(viewer, viewObj) {
    var path = _loadedDocument.getViewablePath(viewObj);
    console.log("Loading view URN: " + path);
    viewer.load(path, _loadedDocument.getPropertyDbPath(), loadViewSuccessFunc, loadViewErrorFunc);
    //viewer.load(path);
}

    // wrap this in a simple function so we can pass it into the Initializer options object
function getAccessToken() {
    return _myAuthToken.value();
}

    // called when HTML page is finished loading, trigger loading of default model into viewer
function loadInitialModel() {       
    loadModelMenuOptions();                  // populate the list of available models for the user
    
    var options = {};
    options.env = _viewerEnv;                // AutodeskProduction, AutodeskStaging, or AutodeskDevelopment (set in global var in this project)
    options.getAccessToken = getAccessToken;
    options.refreshToken   = getAccessToken;
    
    Autodesk.Viewing.Initializer(options, function() {
        loadDocument(_lmvModelOptions[0].urn);   // load first entry by default
    });
}
