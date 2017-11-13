(function () {
  'use strict';

  var module = angular.module('assignmentApp',[]);
  //console.log(module);
  module.controller('As1Controller', as1Controller);

  as1Controller.$inject = ['$scope'];

  function as1Controller($scope){
    $scope.HealthyStatus = "";
    console.log("starting");

    $scope.btnCheckClicked = function(){
      $scope.HealthyStatus = '';
      var count = countTokens($scope.lunchMenu);
      if(count > 3){
        $scope.HealthyStatus = 'Too much!';
      } else {
        $scope.HealthyStatus = 'Enjoy!';
      }
    }
  }


  function countTokens(input){
    if(input){
      var values = input.split(",");
      var count = 0;
      values.forEach(function(value){
        if(/\S/.test(value)){
          count++;
        }
      });
      console.log(count);
    }
    return count;
  }

})();
