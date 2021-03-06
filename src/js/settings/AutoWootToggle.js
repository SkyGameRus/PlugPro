/**
 * Stores the state of the Auto-Woot setting
 * @module settings/AutoWootToggle
 */

/**
 * AutoWoot setting constructor
 * @constructor
 * @param {object} toggler - The Toggle API used to keep track of state.
 */
function AutoWoot( toggler, userId ){
	this.toggler = toggler;
	this.userId = userId;
	this.localStorageName = "autowoot";

	this.songAdvanceCallback = this.startWooting.bind( this );

	toggler.onChange( this.setWootState.bind( this ) );

	if( toggler.isOn ){
		this.setWootState( true );
	}


}

/**
 * Sets auto-woot to ON/OFF
 * @param {boolean} isOn - true to turn auto-woot on, false to turn it off
 */
AutoWoot.prototype.setWootState = function( isOn ){
	if( isOn ){
		this.startWooting.apply(this);
		API.on( API.ADVANCE, this.songAdvanceCallback );
	}else{
		API.off( API.ADVANCE, this.songAdvanceCallback );
	}
};

/**
 * Determines when to start wooting for current song
 * @param {object} newSongInfo - Info about the newly started song. (Provided by Plug.dj API)
 */
AutoWoot.prototype.startWooting = function( newSongInfo ){
	var wootButton = $('#woot');

	// Immediately start wooting if the user just turned the feature on
	if( !newSongInfo ){
		setTimeout( this.clickWoot.bind(this), 5000 );
		return;
	}

	// No need to woot for yourself
	if( newSongInfo.dj.id === this.userId ){
		return;
	}

	// woot at a random time, 5-15 seconds afters start of each song
	var randTimeout = (Math.round( 10 * Math.random() ) + 5) * 1000;
	setTimeout( this.clickWoot.bind(this), randTimeout );

	return randTimeout;
};

/**
 * Clicks the woot button
 */
AutoWoot.prototype.clickWoot = function(){
	$('#woot').click();
};

module.exports = AutoWoot;