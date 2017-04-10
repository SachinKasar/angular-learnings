 
calcDependencyModule.service("CalCService", function () {

    this.add = function (n1, n2) {
        return n1 + n2;
    }


    this.substract = function (n1, n2) {
        return n1 - n2;
    }


    this.divide = function (n1, n2) {
        return n1 / n2;
    }


    this.multiply = function (n1, n2) {
        alert('multiply');
        return n1 * n2;
    }
});
