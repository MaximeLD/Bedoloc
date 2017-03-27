'use strict';

angular.module('myApp.view1', ['ngRoute'])

var LoL_API_KEY = '?api_key=RGAPI-DEB9D447-AA77-4FF5-858A-FB4DBD8B3D88'

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);