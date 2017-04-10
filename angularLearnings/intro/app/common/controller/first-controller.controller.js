var firstCntrl = angular.module("firstCntrl",[]);
firstCntrl.controller("FirstCtrl", function ($scope) {
	$scope.name = 'First Controller';
    
    $scope.getName = function() {
        return $scope.name;
    };
});