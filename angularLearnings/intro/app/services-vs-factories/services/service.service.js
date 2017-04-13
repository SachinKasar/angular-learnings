// Services are treated as JS constructor functions and always return this refernce.
// i.e. you can NOT explicitly retrun primitives or any other object straightforward.

serviceAndFactoryModule.service('EmployeeDetailsService', function() {
     // var this = {};     // Angular will add this by default.
    
    this.getEmployeeDetails = function () {
        return {"name":"John","Age":"30"};
    };
    
    // return this        // Angular will add this by default.
}); 


 


  