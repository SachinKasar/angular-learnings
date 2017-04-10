var declarativeImperativeModule = angular.module("declarativeImperativeModule",[]);
declarativeImperativeModule.constant("MAX_LENGTH","50"); // Constants for module.

declarativeImperativeModule.controller("DeclarativeImperativeController", function ($scope,MAX_LENGTH) { // Dependency Injection for Collaborator objects
	$scope.message = "Welcome";
    
    $scope.remaining = function () {
        var textLength = $scope.message.length ? $scope.message.length : 0;
        return MAX_LENGTH - textLength;
    };
    
    $scope.clear = function () {
       $scope.message = "";
    };
    
    $scope.hasValidLength = function () {
        return $scope.message.length > 0;
    };
    
    
});

