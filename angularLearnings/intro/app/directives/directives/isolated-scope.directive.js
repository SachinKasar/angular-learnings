directiveModule.directive('isolatedScope', function () {
    return {
        restrict: "EA",
        scope: {
            name: "@",
            color: "=",
            reverse: "&"
        },
        template: [
            "</br><div>",
            "<label>Name (iso scope):</label> <strong>{{name}}</strong>;  <input type='text' class='form-control' ng-model='name' /><br/>",
            "</div><div>",
            "<label>Color (iso scope) :</label> <strong style='color:{{color}}'>{{color|uppercase}}</strong>;  <input type='text' class='form-control' ng-model='color' /><br/></div>",
            "<br/><button type='submit' class='btn btn-primary btn-xs' ng-click='reverse()' value='Reverse Name'>Reverse Name</<button>"
        ].join("")
    };
});