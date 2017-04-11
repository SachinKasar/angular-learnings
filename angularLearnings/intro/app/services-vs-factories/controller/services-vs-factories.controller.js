serviceAndFactoryModule.controller("ServiceAndFactoryController",function(EmployeeDetailsService,EmployeeDetailsFactory) {
    // this = $scope;  // Angular do this by default for Controller As syntax 
	this.EmployeeDetailsService = EmployeeDetailsService;
    this.EmployeeDetailsFactory = EmployeeDetailsFactory;
    
    this.getDetailsFromService = function () {
        return this.EmployeeDetailsService.getEmployeeDetails();
        
    }
    
    this.getDetailsFromFactory = function () {
       return this.EmployeeDetailsFactory.getEmployeeDetails();
   }
    
});



