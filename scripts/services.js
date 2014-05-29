'use strict';

//use to communicate between controllers
videoServices.factory('VideoDetails',  function($rootScope){
	var sharedVideo = {};
	
	sharedVideo.setSharedVideo = function(currentVideo){
		this.sharedVideo = currentVideo;
	};
	
	return sharedVideo;
});