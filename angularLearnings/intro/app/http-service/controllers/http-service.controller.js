httpServiceModule.controller("HttpServiceController", HttpServiceController);


function HttpServiceController(httpService) {
    // this = $scope;  // Angular do this by default for Controller As syntax 
    var self = this
    self.updateFlag = false;
    self.addFlag = false;
    self.employees = {};


    httpService.getEmployees().then(function (data) { // READ
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
        if(self.addFlag) { // CREATE
            httpService.addEmployee(this.selectedEmployee);
            self.addFlag = false;
        } else { // UPDATE
            httpService.updateEmployee(this.selectedEmployee);
        }
          
    }
    
    
    this.addEmployee = function () {
        this.updateFlag = true;
        this.addFlag = true;
        this.selectedEmployee = {
            "id": new Date().toTimeString()
        };
   }
    
   this.deleteEmployee = function () { // DELETE
       httpService.deleteEmployee(this.selectedEmployee);
   }
    


}