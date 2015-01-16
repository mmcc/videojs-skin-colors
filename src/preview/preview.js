var $ = require('jquery');
var videojs = require('video.js');
var hljs = require('highlight.js');

hljs.initHighlightingOnLoad();

var currentScheme = 'vjs-skin-colors-blue';
var player = videojs('preview-player');

var schemes = $('.schemes button');
schemes.click(function(e) {
  player.removeClass(currentScheme);
  var newScheme = 'vjs-skin-colors-'+ $(this).attr('id');
  player.addClass(newScheme);
  currentScheme = newScheme;
});
