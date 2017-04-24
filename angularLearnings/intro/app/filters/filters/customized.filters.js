filtersModule.filter('formatContactNumber', function () {
    return function (contactNumber, countryCode) {
        console.log("formatContactNumber ---- ");
        if (countryCode) {
            var formattedNumber = contactNumber;
            if (countryCode === "IN") {
                formattedNumber = "(+" + "91) " + contactNumber.substring(0, 5) + " " + contactNumber.substring(5);
            } else {
                formattedNumber = "(+" + "45) " + contactNumber.substring(0, 4) + " " + contactNumber.substring(4);
            }
            return formattedNumber;
        }
    };
});

filtersModule.filter('highlightWord', function ($sce) {
    return function (text, selectedWord) {
        if (selectedWord) {
            var pattern = new RegExp(selectedWord, "g");
            var texted = text.replace(pattern, "<span style='color:red;'>" + selectedWord + "</span>");
            return $sce.trustAsHtml(texted);
        } else {
            return text;
        }
    };
});


filtersModule.filter('employeesByCountry', function () {
    return function (employees, countryCode) {

        if (countryCode) {
            var filteredByCountry = [];
            angular.forEach(employees, function (employee) {

                if (employee.countryCode === countryCode) {
                    filteredByCountry.push(employee);
                }
            }, filteredByCountry);

            return filteredByCountry;
        } else {
            return employees;
        }
    };
});