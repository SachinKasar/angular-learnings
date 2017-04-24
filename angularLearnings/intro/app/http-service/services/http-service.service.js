httpServiceModule.service('httpService', function ($http, $q) { // dependency for $http service


    this.getEmployees = function () {
        var deferred = $q.defer();

        var config = {
            headers: {
                'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
            }
        };

        var promise1 = $http.get('http://localhost:3000/employees', config);

        //  var promise2 = promise1.then(function (response) {
        promise1.then(,
            function (response) {
                console.log(response);
                console.log("httpService is Able to fullfill the promise  ---- " + response.statusText);
                console.log("HEADRES = " + response.headers('Content-type') + "  STATUS = " + response.status);

                return deferred.resolve(response.data); // internal promise
            },
            function (response) {
                console.log(response);
                console.log("httpService CAN NOT fullfill the promise  ---- " + response.statusText);
                return deferred.reject(response.data);
            }

        );

        return deferred.promise;
    }

    this.updateEmployee = function (employeeDetails) {
        return $http.put("http://localhost:3000/employees/" + employeeDetails.id, employeeDetails);

    }

    this.addEmployee = function (employeeDetails) {
        return $http.post("http://localhost:3000/employees/", employeeDetails);

    }

    this.deleteEmployee = function (employeeDetails) {
        return $http.delete("http://localhost:3000/employees/" + employeeDetails.id, employeeDetails);


    };

});