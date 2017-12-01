var myApp = angular.module('myApp', ['commonApp']);
myApp.controller('myController', ['$scope', '$http', function ($scope, $http) {
	$scope.submit = function(){
		var _data =	{
				username: $scope.username,
				password: $scope.password
		};
		$http({
			url: common.baseurl + 'login',
			method: 'post',
			data: _data
		}).success(function(response){
			console.log(response);
		})
	};
}])