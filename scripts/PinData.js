//
//	Class for pin data
//	Each pin contains an id, a label and a position in world dimensions,
//	and is associated with a viewport object by its id.
//

function ViewerPin(model) {
	this.pinobjs = [];
	this.viewports = {};
	this.dbkey = model + ' ViewerPin';

		// load previous data from local storage if there were any
	if (localStorage.hasOwnProperty(this.dbkey)) {
		var dataStr = localStorage.getItem(this.dbkey);
		var parsedObj = JSON.parse(dataStr);
		this.pinobjs = parsedObj.pinobjs;
		this.viewports = parsedObj.viewports;
	}
};

	// iterate function
ViewerPin.prototype.each = function(callback) {
	for (var i = 0; i < this.pinobjs.length; i++) {
		var p = this.pinobjs[i];
		if (callback)
			callback(p.pinid, p.label, [p.x, p.y, p.z]);
	};
};

	// reorder the sequence of pins in array, to keep it consistent with
	// the pin order in the tablelist, it's also the order for startTour
ViewerPin.prototype.reorder = function(pinid, newIndex) {
	var index = -1;
    for (var i = this.pinobjs.length - 1; i >= 0; i--) {
        if (this.pinobjs[i].pinid === pinid) {
            index = i;
            break;
        }            
    };

    if (index !== -1) {
    	var pin = this.pinobjs.splice(index, 1)[0];
    	this.pinobjs.splice(newIndex, 0, pin);
    }
};

	// get the pin object by id
ViewerPin.prototype.getPinObj = function(pinid) {
	for (var i = 0; i < this.pinobjs.length; i++) {
		if (this.pinobjs[i].pinid === pinid)
			return this.pinobjs[i];
	};
	return null;
};

	// get the associated viewport object by id
ViewerPin.prototype.getViewport = function(pinid) {

	if (pinid in this.viewports)
		return this.viewports[pinid];
	return null;
};

	// delete a pin, the pin objec and its viewport are both removed
ViewerPin.prototype.removePin = function(pinid) {
    var index = -1;
    for (var i = this.pinobjs.length - 1; i >= 0; i--) {
        if (this.pinobjs[i].pinid === pinid) {
            index = i;
            break;
        }            
    };
    if (index !== -1) {
        var deletedPin = this.pinobjs.splice(index, 1);
        delete this.viewports[pinid];
        return deletedPin;
    }
    return null;
};

ViewerPin.prototype.addPin = function(pinid, pos, label, viewstate) {
	var pinObj = {
        pinid: pinid,
        label: label,
        x: pos.x,
        y: pos.y,
        z: pos.z
    };

    	// viewport here is obtained from a given viewState of our viewer
    	// extract the minimum properties that we need to construct a new viewport object
    var viewportObj = {
        "eye": viewstate.viewport.eye, 
        "isOrthographic": viewstate.viewport.isOrthographic, 
        "pivotPoint": viewstate.viewport.pivotPoint,
        "target": viewstate.viewport.target, 
        "up": viewstate.viewport.up
    };

    this.pinobjs.push(pinObj);
    this.viewports[pinid] = viewportObj;
};


ViewerPin.prototype.changePinLabel = function(pinid, newLabel) {
	var pinObj = this.getPinObj(pinid);
	if (pinObj)
		pinObj.label = newLabel;
}

	// update browser localStorage, for each model, the pin data is 
	// stored as a whole JSON stirng
ViewerPin.prototype.updateLocalStorage = function() {
	var parsedObj = {
		pinobjs: this.pinobjs,
		viewports: this.viewports
	};

	var dataStr = JSON.stringify(parsedObj);
	localStorage.setItem(this.dbkey, dataStr);	
};

