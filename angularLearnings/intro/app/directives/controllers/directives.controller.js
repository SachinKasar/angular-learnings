directiveModule.controller("DirectiveController", DirectiveController);


function DirectiveController($scope,directiveService) {
    // this = $scope;  // Angular do this by default for Controller As syntax 
     
    
    $scope.name = "Angular";
    $scope.reverseName = function(){
        $scope.name = $scope.name.split('').reverse().join('');
    };
}