directiveModule.directive('currentDate', function () { // 1. You can add service dependencies here e.g $http
    return { // This will return directive definition object.
        restrict: 'AECM', // A = As a Attribute, E=As a Elements, C=As a Class
        replace: 'true', // Will replace original HTML by 'template' value
        template: '<h3 style="color:red">' + new Date().toDateString() + '</h3>' // This will be rendered as effect of Directive usage

    };
});



directiveModule.directive('customizedButton', function () {
    return {
        restrict: 'E',
        replace: 'true',
        compile: function (element, attributes) {

            element.addClass('btn');
            function functionToBeCalled() {
                alert(attributes.clickValue);
            }
            element.bind('click', functionToBeCalled);

            if (attributes.type === 'submit') {
                element.addClass('btn-primary');
            } else if (attributes.type === 'warning') {
                element.addClass('btn-warning');
            } else if (attributes.type === 'info') {
                element.addClass('btn-info');
            }

            if (attributes.size) {
                var sizeString = "md";
                if (attributes.size === "small") {
                    sizeString = "sm";
                } else if (attributes.size === "large") {
                    sizeString = "lg";
                } else if (attributes.size === "xtrasmall") {
                    sizeString = "xs";
                }
                element.addClass('btn-' + sizeString);
            }
        },



    };
});