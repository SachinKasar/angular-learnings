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

filtersModule.filter('formatContactNumber', function () {
    return function (contactNumber, countryCode) {
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