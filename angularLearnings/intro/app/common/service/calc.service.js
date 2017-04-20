 calcDependencyModule.service("CalCService", function () {

     this.add = function (n1, n2) {
         return 1 + 2 + ' Native Service.';
     }


     this.substract = function (n1, n2) {
         return n1 - n2;
     }


     this.divide = function (n1, n2) {
         return n1 / n2;
     }


     this.multiply = function (n1, n2) {
         return n1 * n2;
     }
 });