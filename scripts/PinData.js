//
//	Class for pin data
//	Each pin contains an id, a label and a position in world dimensions,
//	and is associated with a viewport object by its id.
//

function ViewerPin(model) {
	this.pinobjs = [];
	this.viewStates = {};
	this.dbkey = model + ' ViewerPin';

		// load previous data from local storage if there were any
	if (localStorage.hasOwnProperty(this.dbkey)) {
		var dataStr = localStorage.getItem(this.dbkey);
		var parsedObj = JSON.parse(dataStr);
		this.pinobjs = parsedObj.pinobjs;
		this.viewStates = parsedObj.viewStates;
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
ViewerPin.prototype.getViewState = function(pinid) {

	if (pinid in this.viewStates)
		return this.viewStates[pinid];
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
        delete this.viewStates[pinid];
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


    this.pinobjs.push(pinObj);
    this.viewStates[pinid] = viewstate;
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
		viewStates: this.viewStates
	};

	var dataStr = JSON.stringify(parsedObj);
	localStorage.setItem(this.dbkey, dataStr);	
};

