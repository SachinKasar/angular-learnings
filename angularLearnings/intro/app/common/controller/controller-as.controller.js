var controllerAsModule = angular.module("controllerAsModule",[]);

controllerAsModule.controller("FirstController", function () {
    // this = $scope;
	this.name = 'From First Controllers Scope';
});

controllerAsModule.controller("SecondController", function () {
    // this = $scope;
	this.name = 'From Second Controller Scope';
});