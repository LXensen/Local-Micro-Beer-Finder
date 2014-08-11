'use strict';

angular.module('angularFullStackDemoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/beers', {
        templateUrl: 'app/beers/beers.html',
        controller: 'BeersCtrl'
      });
  });
