(function () {
  'use strict';

  angular.module('assignment1',[]).
  //controller("as1Controller", ['$scope', as1Controller]);
  controller("as1Controller", as1Controller);

  as1Controller.$inject = ['$scope'];

  function as1Controller($scope){
    $scope.HealthyStatus = "test";
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
