directiveModule.controller("DirectiveController", DirectiveController);


function DirectiveController($scope,directiveService) {
    $scope.name = "Angular";
    $scope.color = "#333333";
    $scope.reverseName = function(){
     $scope.name = $scope.name.split("").reverse().join("");
    };
    $scope.randomColor = function(){
        $scope.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    };
}