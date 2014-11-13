
// create global API object
var plugPro = window.plugPro = {};
plugPro.updates = require("./updates");

// Load html templates
var JST = require("./templates");

var Room = require('./Room');
var room = new Room();

room.on("load", function(){

	plugPro.version = $('#plug_pro_chrome_extension_version').val();
	plugPro.id = $('#plug_pro_chrome_extension_id').val();

	var Menu = require('./views/MenuView');
	var ViewButtonsView = require('./views/ViewButtonsView');

	var Toggle = require('./settings/Toggle');
	var AutoWootToggle = require('./settings/AutoWootToggle');

	var storage = require('./storage/storage');
	storage.init();

	// Add Autowoot
	var toggle = new Toggle( true, "autowoot" );
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

	var buttonView = new ViewButtonsView();
	$('#room').append( buttonView.el );
	buttonView.render();


	var lastVersionUsed = storage.getVersion();
	if( window.plugPro.updates[ plugPro.version ] && lastVersionUsed !== plugPro.version ){
		var UpdatesModalView = require('./views/UpdatesModalView');
		var updatesModalView = new UpdatesModalView();
		$('body').append( updatesModalView.el );
		updatesModalView.render();
	}

});
room.init();
