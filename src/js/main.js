
// create global API object
var plugPro = window.plugPro = {};

// Load html templates
var JST = require("./templates");

var Room = require('./Room');
var room = new Room();

room.on("load", function(){

	var Menu = require('./views/MenuView');

	var Toggle = require('./settings/Toggle');
	var AutoWootToggle = require('./settings/AutoWootToggle');

	// Add Autowoot
	var toggle = new Toggle( true );
	var userId = API.getUser().id;
	var autowootToggle = new AutoWootToggle( toggle, userId );

	// Add PlugPro menu
	var menu = new Menu( {
		toggleSettings: {
			"AutoWoot": autowootToggle
		}
	});
	$('#app-menu').append( menu.$el );
	menu.render();

	plugPro.settings = {
		autowoot: autowootToggle
	}

	var videoView = require('./views/views/VideoViewView');
	videoView.render();

});
room.init();
