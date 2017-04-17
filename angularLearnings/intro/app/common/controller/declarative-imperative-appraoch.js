var declarativeImperativeModule = angular.module("declarativeImperativeModule", []);


declarativeImperativeModule.controller("DeclarativeImperativeController", function ($scope) {
    $scope.message = "Welcome";
    $scope.maxLength = 50;

    $scope.enteredCharsLength = function () {
        var textLength = $scope.message.length ? $scope.message.length : 0;
        return textLength;
    };

    $scope.clear = function () {
        $scope.message = "";
    };

    $scope.hasValidLength = function () {
        return $scope.message.length > 0;
    };


});