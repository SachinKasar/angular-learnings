filtersModule.controller("FiltersController", FiltersController);


function FiltersController(filtersService) {
    // this = $scope;  // Angular do this by default for Controller As syntax 
    var self = this
    self.updateFlag = false;
    self.addFlag = false;
    self.employees = {};
    self.today = new Date();


    filtersService.getEmployees().then(function (data) { // READ
            self.employees = data;
            self.successFetchNotificationMessage = "Fetched Employee Details Successfully !!!"
        },
        function () {
           self.errorFetchNotificationMessage = "Unable to fetch eployees details. Please verify json-server !!!"
        }
    );


    this.showSelectedEmployee = function (employee) {
        this.successFetchNotificationMessage = undefined;
        this.errorFetchNotificationMessage = undefined;
        this.selectedEmployee = employee;
     }

    this.toggleUpdateFlag = function () {
        this.updateFlag = !this.updateFlag;
    }

    this.updateEmployee = function () {
        this.toggleUpdateFlag();
        if(self.addFlag) { // CREATE
            filtersService.addEmployee(this.selectedEmployee);
            self.addFlag = false;
        } else { // UPDATE
            filtersService.updateEmployee(this.selectedEmployee);
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
       filtersService.deleteEmployee(this.selectedEmployee);
   }
    


}