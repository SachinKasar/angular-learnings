vehiclesModule.controller("VehiclesController", function ($scope, FourWheeledService, TwoWheeledService) {
    this.vehicleSpecs = "";

    $scope.getVehiclesSpecs = function (type) {
        if ('Two' === type) {
            this.vehicleSpecs = TwoWheeledService.getSpecifications();
        } else if ('Four' === type) {
            this.vehicleSpecs = FourWheeledService.getSpecifications();
        }

    };
});






/*vehiclesModule.service('VehicleService', function (TwoWheeledService) {
    var specs = {
        name: "vehiclesModule",
        wheels: "vehiclesModule"
    };

    this.getSpecifications = function () {
        return specs;

    };
});*/