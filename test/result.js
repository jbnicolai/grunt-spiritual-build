(function(window) {

"use strict";


var gui = {};
gui.Fisse = (function() {

	gui.Pik = gui.Fokker.extend();

	/*
	gui.Fok = gui.Fokker.extend({
		hans: 'jens'
	});
	*/
	
	return gui.Spasser.extend({

		spastiker: function() {
			gui.Spasser.prototype.spastiker.call(this, 23,5));
		},

		fisting: function() {
			var x = gui.Object.extend({ged:true}, {hest:false});
			return gui.Spasser.prototype.fisting.call(this, 23)).map(function(x) {
				return 'fisse' + x;
			});
		},

		_breakdown: function(arg) {
			return gui.Spasser.prototype._breakdown.call(this, arg)).map(function(type) {
				return type === 'transitionend' ? this._transitionend() : type;
			}, this);
		}

	});

});



}(self));