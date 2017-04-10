var scopeModule1 = angular.module("scopeModule1",[]);
scopeModule1.controller("ScopeController1", function ($scope) {
	$scope.totalCount = 2500;
    $scope.teams = [
            {name: 'WM', size: 8},
            {name: 'Cash Payments', size: 15}
        ];
    
    $scope.getPercentage = function (teamSize) {
        return (teamSize / $scope.totalCount) * 100;
    }
    
});