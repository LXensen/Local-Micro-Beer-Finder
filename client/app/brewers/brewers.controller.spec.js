'use strict';

describe('Controller: BrewersCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFullStackDemoApp'));

  var BrewersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrewersCtrl = $controller('BrewersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
