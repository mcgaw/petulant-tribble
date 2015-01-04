var Reflux = require('reflux');

var Actions = Reflux.createActions([
	"newPicturesAvailable",
	"scrolledToLastPicture"
  ]);
	
module.exports = Actions;