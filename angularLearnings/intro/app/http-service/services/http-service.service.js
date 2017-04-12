httpServiceModule.service('httpService', function($http) {  // dependency for $http service
    
    
    this.getEmployees = function() {
        var promise1 = $http.get("http://localhost:3000/employees");
        var promise2 = promise1.then(function(response) {
             return  response.data;
        });
        
        return promise2;
    }
    
    this.updateEmployee = function(employeeDetails) {
         return $http.put("http://localhost:3000/employees/"+employeeDetails.id,employeeDetails)
                .then(function(response) {
                    console.log("PUT Done --- " + response);
                });
    }
    
});
