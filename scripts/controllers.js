'use strict';

//List controller on the main page
videoControllers.controller('VideoListController', ['$scope', '$http', 'VideoDetails', function($scope, $http, VideoDetails) {
		$http.get('videos.json').success(function(data){
			$scope.videos = data;
		});
		$scope.setCurrentVideo = function(currentVideo){
			VideoDetails.setSharedVideo(currentVideo);
		};
}]);

//Controller on the detailed information page
videoControllers.controller('VideoDescController', ['$scope', '$routeParams', '$sce', 'VideoDetails',
	function($scope, $routeParams, $sce, VideoDetails) {
		$scope.youtubeURL = $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + $routeParams.youtubeId);
		$scope.currentVideo = VideoDetails.sharedVideo;
	}
]);