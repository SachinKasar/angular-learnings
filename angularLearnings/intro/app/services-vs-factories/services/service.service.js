// Services are treated as JS constructor functions and always return this refernce.


serviceAndFactoryModule.service('EmployeeDetailsService', function () {
    // var this = {};     // Angular will add this by default.

    this.getEmployeeDetails = function () {
        return {
            "name": "John",
            "Age": "30"
        };
    };

    // return this        // Angular will add this by default.
});