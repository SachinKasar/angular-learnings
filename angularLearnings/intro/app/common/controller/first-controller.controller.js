var firstCntrl = angular.module("firstCntrl",[]);
firstCntrl.controller("FirstCtrl", function ($scope) {
	$scope.name = 'First Controller';
    $scope.topic = 'Angular';
    
    $scope.getName = function() {
        return $scope.name;
    };
    
    $scope.reverseName = function(){
        $scope.topic = $scope.topic.split("").reverse().join("");
    };
});