'use strict';

describe('Controller: BugboardCtrl', function () {

  // load the controller's module
  beforeEach(module('bugtrackerApp'));

  var BugboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BugboardCtrl = $controller('BugboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BugboardCtrl.awesomeThings.length).toBe(3);
  });
});
