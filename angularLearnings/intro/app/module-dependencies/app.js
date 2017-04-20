var twoWheeledModule = angular.module('twoWheeled', []);
var fourWheeledModule = angular.module('fourWheeled', []);
var vehiclesModule = angular.module('vehiclesApp', ['twoWheeled', 'fourWheeled']);