var Refulx = require('reflux');

var Actions = require('../actions.js');

var pictureStore = Refulx.createStore({

	pictures : [],

	init: function() {
		this.listenTo(Actions.newPicturesAvailable, this.handleNewPictures);
		//this.listenTo(Actions.scrolledToLastPicture, this.checkForMorePictures);
	},

	getDefaultData: function() {
		return [];
	},

	handleNewPictures: function(newPictures) {
		this.pictures = this.pictures.concat(newPictures);

		this.trigger(this.pictures);
	},

	checkForMorePictures: function(payload) {
		console.log("checking for more pictures on the server...");
		this.trigger(this.pictures);
	}


})

module.exports = pictureStore;