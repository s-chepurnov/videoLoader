'use strict';

var videoApp = angular.module('videoApp',['ngRoute', 'videoControllers', 'videoServices']);

var videoControllers = angular.module('videoControllers',[]);
var videoServices = angular.module('videoServices', []);

videoApp.config(function($routeProvider){
		$routeProvider
			.when('/video/:youtubeId', {
				templateUrl : 'views/video-desc.html',
				controller : 'VideoDescController'
			})
			.when('/videos', {
				templateUrl : 'views/video-list.html',
				controller : 'VideoListController'
			})
			.otherwise({
				redirectTo: '/videos'
			});
			
});