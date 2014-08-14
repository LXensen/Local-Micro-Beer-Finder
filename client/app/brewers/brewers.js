'use strict';

angular.module('angularFullStackDemoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/brewers', {
        templateUrl: 'app/brewers/brewers.html',
        controller: 'BrewersCtrl'
      });
  });
