angular.module('LuCabular')
.controller('mainController',function($scope,$http) {
	$http.get('lesson.json').then(function(res) {
		$scope.words = res.data;
	});
});