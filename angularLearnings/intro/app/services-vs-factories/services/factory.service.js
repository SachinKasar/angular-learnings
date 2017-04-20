// Factories are simple JS function rather than constructor function


serviceAndFactoryModule.factory('EmployeeDetailsFactory', function () {
    return {
        getEmployeeDetails: function () {
            return {
                "name": "Mike",
                "Age": "35"
            };
        }
    }
});