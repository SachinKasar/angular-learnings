directiveModule.directive('sharedScope', function () {
    return {

        restrict: "EA",
        scope: false,
        template: "<div><label>Learn</label> : {{name}}</div>" +
            "<label>Whats New ??? </label>:   <input type='text' class='form-control' ng-model='name' />"

    };
});