httpServiceModule.controller("HttpServiceController", HttpServiceController);


function HttpServiceController(httpService) {
    // this = $scope;  // Angular do this by default for Controller As syntax 
    var self = this
    self.updateFlag = false;


    httpService.getEmployees().then(function (data) {
            self.employees = data;
            self.successFetchNotificationMessage = "Fetched Employee Details Successfully !!!"
        },
        function () {
           self.errorFetchNotificationMessage = "Unable to fetch eployees details. Please verify json-server !!!"
        }
    );


    this.showSelectedEmployee = function (index) {
        this.successFetchNotificationMessage = undefined;
        this.errorFetchNotificationMessage = undefined;
        this.selectedEmployee = self.employees[index];

    }

    this.toggleUpdateFlag = function () {
        this.updateFlag = !this.updateFlag;
    }

    this.updateEmployee = function () {
        this.toggleUpdateFlag();
        httpService.updateEmployee(this.selectedEmployee);
    }


}