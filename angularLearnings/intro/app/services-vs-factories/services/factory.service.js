// Factories are simple JS function rather than constructor function
// i.e. through factories we can return any object straightforward.

serviceAndFactoryModule.factory('EmployeeDetailsFactory', function () {
    return {
        getEmployeeDetails: function () {
            return {"name":"Mike","Age":"35"};
        }
    }
});

