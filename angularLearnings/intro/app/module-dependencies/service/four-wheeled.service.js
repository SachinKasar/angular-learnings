fourWheeledModule.service('FourWheeledService', function() {
    var specs = {name:"i20", wheels:"4"};
    
    this.getSpecifications = function() {
        return specs;
    };
});


// Uncomment below code to override TwoWheeledService
/*fourWheeledModule.service('TwoWheeledService', function() {
    var specs = {name:"NEW Splendour", wheels:"2"};
    
    this.getSpecifications = function() {
        return specs;
    };
});*/