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
                    // console.log("PUT Done --- " + response);
                });
    }
    
    this.addEmployee = function(employeeDetails) {
        return $http.post("http://localhost:3000/employees/",employeeDetails)
                .then(function(response) {
                    // console.log("Add Done --- " + response);
                });
    }
    
    this.deleteEmployee = function(employeeDetails) {
        return $http.delete("http://localhost:3000/employees/"+employeeDetails.id,employeeDetails)
                .then(function(response) {
                    // console.log("deleteEmployee Done --- " + response);
                });
    }
    
    
    
    
});
