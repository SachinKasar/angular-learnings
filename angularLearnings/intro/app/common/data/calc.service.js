 var thirdPartyModule = angular.module("thirdPartyModule", [])


 thirdPartyModule.service("CalCService", function () {

     this.add = function (n1, n2) {
         return 10 + 20 + ' Third Party Service';
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