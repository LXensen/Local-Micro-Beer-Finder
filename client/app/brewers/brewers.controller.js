'use strict';

angular.module('angularFullStackDemoApp')
  .controller('BrewersCtrl', function ($scope, $http) {
    $http.get('api/brewers').success(function(brewers){
    	$scope.brewers = brewers;
    });
  });
