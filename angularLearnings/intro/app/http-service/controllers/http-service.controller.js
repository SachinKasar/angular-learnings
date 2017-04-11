httpServiceModule.controller("HttpServiceController",HttpServiceController);


function HttpServiceController(httpService) {
    // this = $scope;  // Angular do this by default for Controller As syntax 
    var self = this
    
    httpService.getEmployees().then(function (data) {
        self.employees = data;
    });
}



