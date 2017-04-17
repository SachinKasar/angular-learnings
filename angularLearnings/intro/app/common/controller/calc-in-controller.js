var calcModule = angular.module("calcModule", []);


calcModule.controller("CalcController", function ($scope) { // Dependency Injection for Collaborator objects
    $scope.number1 = 1;
    $scope.number2 = 1;
    $scope.number3 = 0;

    $scope.add = function (number1, number2) {
        this.number3 = number1 + number2;
    };

    $scope.substract = function (number1, number2) {
        this.number3 = number1 - number2;
    };

    $scope.divide = function (number1, number2) {
        this.number3 = number1 / number2;
    };

    $scope.multiply = function (number1, number2) {
        this.number3 = number1 * number2;
    };

});