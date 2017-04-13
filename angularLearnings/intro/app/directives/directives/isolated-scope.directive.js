directiveModule.directive('isolatedScope', function () {
    return {

        restrict: "EA",
        scope: {},  // isolatedScope
        template: "</br><div><label>Learn</label> : {{name}}   {{($scope.$id)}}</div>" +
            "<label>Whats New ??? </label>:   <input type='text' class='form-control' ng-model='name' /> "

    };
});