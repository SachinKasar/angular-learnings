directiveModule.directive('inheritedScope', function () {
    return {
        restrict: "EA",
        scope: true,  // inheritedScope
        template: "</br><div><label>Learn</label> : {{name}}</div>" +
            "<label>Whats New ??? </label>:   <input type='text' class='form-control' ng-model='name' />"

    }; 
});