'use strict';

angular.module('angularFullStackDemoApp')
  .controller('BeersCtrl', function ($scope, $http) {
  	//$scope.beers = [];

  	$http.get('/api/beers').success(function(beers){
  		$scope.beers = beers;	
  	});
    
  });
