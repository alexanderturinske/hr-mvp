angular.module('faunadexApp.ctrl1', [])

.controller('AnimalController', function($scope, Click) {
  $scope.animals = [];

  $scope.addAnimal = function() {
    Click.sendData($scope.newAnimal);
    $scope.newAnimal = null;
  };

  $scope.retrieveAnimal = function() {
    Click.retrieveData().then(function(result) {
      $scope.animals = result;
    });
  };

});