httpServiceModule.controller("HttpServiceController", HttpServiceController);


function HttpServiceController(httpService) {
    // this = $scope;  // Angular do this by default for Controller As syntax 
    var self = this
    self.updateFlag = false;
    self.addFlag = false;
    self.employees = {};
    self.$onInit = onInitFetch;

    // READ
    function onInitFetch() {
        httpService.getEmployees() // 'httpService' has made promise with 'HttpServiceController' to get these employees
            .then(function (data) {
                    console.log("Promise fulfilled by httpService, so HttpServiceController will some action accordingly ---- ");
                    self.employees = data;
                    self.successFetchNotificationMessage = "Fetched Employee Details Successfully !!!"
                },
                function (error) {
                    console.log("Promise BROKEN by httpService, so HttpServiceController will take some action  accordingly ---- ");
                    self.errorFetchNotificationMessage = "Unable to fetch eployees details. Please verify json-server !!!"
                }
            );
    }


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
        if (this.addFlag) { // CREATE
            httpService.addEmployee(this.selectedEmployee);
            this.addFlag = false;
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
        httpService.deleteEmployee(this.selectedEmployee).then(function (data) {
                console.log("DELETE SUCCESS ---- ");
            },
            function (error) {
                console.log("DELETE FAILED DUE TO NODE.JS VERSION---- ");
                self.$onInit();
            });

    }



}