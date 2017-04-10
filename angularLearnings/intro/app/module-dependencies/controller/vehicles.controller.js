vehiclesModule.controller("VehiclesController",function($scope,TwoWheeledService,FourWheeledService) {
    this.vehicleSpecs = "";
   
    $scope.getVehiclesSpecs = function(type) {
       if('Two' === type ) {
            this.vehicleSpecs = TwoWheeledService.getSpecifications();
        } else if('Four' === type ) {
            this.vehicleSpecs = FourWheeledService.getSpecifications();
        }
            
    };
});



