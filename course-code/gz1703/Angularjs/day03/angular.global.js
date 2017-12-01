var globalApp = angular.module('globalApp', []);

globalApp.value('localSever', 'http://localhost/course/api/api/');
globalApp.value('utSever', 'http://localhost/course/api/api/');
globalApp.value('testSever', 'http://localhost/course/api/api/');
globalApp.value('uatSever', 'http://localhost/course/api/api/');
globalApp.value('productionSever', 'http://localhost/course/api/api/');

globalApp.factory('serverFactory', ['localSever', 'utSever', 'testSever', 'uatSever', 'productionSever', function(localSever, utSever, testSever, uatSever, productionSever){
    return {
        url: utSever
    }
}])

globalApp.service('serverService', ['localSever', 'utSever', 'testSever', 'uatSever', 'productionSever', function(localSever, utSever, testSever, uatSever, productionSever){
    this.url = localSever
}])

globalApp.directive('datagrid', ['$http', 'serverFactory', function($http, serverFactory){
    return {
        restrict: 'AEC',
        templateUrl: 'datagrid.html',
        link: function(_scope, _element, _attr){
            $http.get(serverFactory.url + 'student/FetchAllStudent').success(function(response){
                $scope.dataset = response.data;
            })    
        }
    }
}])

