directiveModule.directive('customizedButton', function () {
    return {
        restrict: 'E',
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