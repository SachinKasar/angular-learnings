fourWheeledModule.service('FourWheeledService', function (TwoWheeledService) {
    var specs = {
        name: "i20",
        wheels: "4"
    };

    this.getSpecifications = function () {
        return TwoWheeledService.getSpecifications();

    };
});


// Uncomment below code to override TwoWheeledService
/*fourWheeledModule.service('TwoWheeledService', function () {
    var specs = {
        name: "NEW Splendour",
        wheels: "2"
    };

    this.getSpecifications = function () {
        return specs;
    };
});*/