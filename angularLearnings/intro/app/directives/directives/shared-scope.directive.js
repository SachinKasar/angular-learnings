directiveModule.directive('sharedScope', function () {
    return {

        restrict: "EA",
        scope: false, // sharedScope
        template: "</br><div><label>Learn</label> : {{name}}   {{($scope.$id)}}</div>" +
            "<label>Whats New ??? </label>:   <input type='text' class='form-control' ng-model='name' /> "

    };
});