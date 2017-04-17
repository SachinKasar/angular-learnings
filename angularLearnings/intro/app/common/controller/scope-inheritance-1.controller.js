var scopeModule1 = angular.module("scopeModule1", []);
scopeModule1.controller("ScopeController1", function ($scope) {
    $scope.totalCount = 2500;
    $scope.teams = [
        {
            name: 'Account',
            size: 8
        },
        {
            name: 'Payment',
            size: 15
        }
        ];

    $scope.getPercentage = function (teamSize) {
        return (teamSize / $scope.totalCount) * 100;
    }

});