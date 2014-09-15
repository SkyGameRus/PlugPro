
// HTML templates
var JST = require("./ui/templates").JST;
var Menu = require('./ui/Menu');

var Room = require('./Room');
var room = new Room();

var Toggle = require('./settings/Toggle');
var AutoWootToggle = require('./settings/AutoWootToggle');
room.on("load", function(){

	// create global API object
	var plugPro = window.plugPro = {};

	// Add Autowoot
	var userId = API.getUser().id;
	var toggler = new Toggle( true );
	var autowootToggle = new AutoWootToggle( toggler, userId );

	// Add PlugPro menu
	new Menu( JST, {
		"AutoWoot": autowootToggle
	});

	plugPro.settings = {
		autowoot: autowootToggle
	}

});
room.init();
