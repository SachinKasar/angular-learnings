twoWheeledModule.service('TwoWheeledService', function() {
    var specs = {name:"Splendour", wheels:"2"};
    
    this.getSpecifications = function() {
        return specs;
    };
});