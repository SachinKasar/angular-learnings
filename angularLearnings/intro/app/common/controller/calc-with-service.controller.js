calcDependencyModule.controller("CalcDependencyController", function ($scope, CalCService) {
    $scope.number1 = 1;
    $scope.number2 = 1;
    $scope.number3 = 0;

    $scope.add = function (number1, number2) {
        this.number3 = CalCService.add(number1, number2);
    };

    $scope.substract = function (number1, number2) {
        this.number3 = CalCService.substract(number1, number2);
    };

    $scope.divide = function (number1, number2) {
        this.number3 = CalCService.divide(number1, number2);
    };

    $scope.multiply = function (number1, number2) {
        this.number3 = CalCService.multiply(number1, number2);
    };

});