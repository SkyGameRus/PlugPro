(function() {(window["plugPro"]["JST"] = window["plugPro"]["JST"] || {})["artwork.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img src="' +
((__t = ( url )) == null ? '' : __t) +
'" alt="Album Artwork">';

}
return __p
}})();
(function() {(window["plugPro"]["JST"] = window["plugPro"]["JST"] || {})["menu.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="inner-pro-menu">\n\t<img src="' +
((__t = ( chromeDir )) == null ? '' : __t) +
'/images/logo_large.png" alt="PlugPro" class="pro-logo">\n\t<ul id="pro-toggle-settings" class="inner-pro-menu">\n\t\t\n\t</lu>\n</div>\n';

}
return __p
}})();
(function() {(window["plugPro"]["JST"] = window["plugPro"]["JST"] || {})["play_history.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row playlist-media-item">\n\t<img src="' +
((__t = ( media.image )) == null ? '' : __t) +
'">\n\t<div class="meta">\n\t\t<span class="author">' +
((__t = ( media.author )) == null ? '' : __t) +
' - ' +
((__t = ( media.title )) == null ? '' : __t) +
'</span>\n\t\t<span class="name">' +
((__t = ( user.username )) == null ? '' : __t) +
'</span>\n\t</div>\n\t<div class="score">\n\t\t<div class="item positive">\n\t\t\t<i class="icon icon-history-positive"></i><span>' +
((__t = ( score.positive )) == null ? '' : __t) +
'</span>\n\t\t</div>\n\t\t<div class="item grabs">\n\t\t\t<i class="icon icon-history-grabs"></i><span>' +
((__t = ( score.grabs )) == null ? '' : __t) +
'</span>\n\t\t</div>\n\t\t<div class="item negative">\n\t\t\t<i class="icon icon-history-negative"></i><span>' +
((__t = ( score.negative )) == null ? '' : __t) +
'</span>\n\t\t</div>\n\t\t<div class="item listeners">\n\t\t\t<i class="icon icon-history-listeners"></i><span>' +
((__t = ( score.listeners )) == null ? '' : __t) +
'</span>\n\t\t</div>\n\t</div>\n</div>';

}
return __p
}})();
(function() {(window["plugPro"]["JST"] = window["plugPro"]["JST"] || {})["toggle_setting.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="setting-title">' +
((__t = ( title )) == null ? '' : __t) +
'</div>\n<div class="toggle-button">\n\t<input type="checkbox">\n</div>\n';

}
return __p
}})();
(function() {(window["plugPro"]["JST"] = window["plugPro"]["JST"] || {})["user.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if( iconClass ){ ;
__p += '\n<i class="icon ' +
((__t = ( iconClass )) == null ? '' : __t) +
'"></i>\n';
 } ;
__p += '\n<span class="name">' +
((__t = ( username )) == null ? '' : __t) +
'</span>';

}
return __p
}})();
(function() {(window["plugPro"]["JST"] = window["plugPro"]["JST"] || {})["userlist.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="plugpro-userlist-list"></div>\n';

}
return __p
}})();
(function() {(window["plugPro"]["JST"] = window["plugPro"]["JST"] || {})["video_chat.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="plugpro-expand-chat-button">Expand Chat</div>\n<div class=\'plugpro-messages\'>\n</div>\n<div>\n\t<form id="plugpro-chat-input-form" action="?">\n\t\t<input type="text" value="" placeholder="Click here to join the conversation" maxlength="256">\n\t</form>\n</div>';

}
return __p
}})();
(function() {(window["plugPro"]["JST"] = window["plugPro"]["JST"] || {})["view_buttons.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-view-name="pro" class="plugpro-view-button">Pro</div>\n<div data-view-name="video" class="plugpro-view-button">Video</div>\n<div data-view-name="avatars" class="plugpro-view-button">Avatars</div>';

}
return __p
}})();
(function() {(window["plugPro"]["JST"] = window["plugPro"]["JST"] || {})["waitlist.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="plugpro-waitlist-list"></div>\n';

}
return __p
}})();