directiveModule.controller("DirectiveController", DirectiveController);


function DirectiveController(directiveService) {
    // this = $scope;  // Angular do this by default for Controller As syntax 
    var self = this
    self.mainControllerScopeProperty = "Value From Main Controller !!!";
}