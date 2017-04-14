var firstCntrl = angular.module("firstCntrl", []);
firstCntrl.controller("FirstCtrl", function ($scope) {
    $scope.name = 'First Controller';
    $scope.topic = 'Angular';
    $scope.data = { time: new Date() };
    $scope.random = Math.random;

    $scope.getName = function () {
        return $scope.name;
    };

    $scope.reverseName = function () {
        $scope.topic = $scope.topic.split("").reverse().join("");
    };

    $scope.getTopic = function () {
        console.log('dirty-checking');
        return $scope.topic;
    };
    
    $scope.updateTime = function () {
        $scope.data.time = new Date();
    }

    $scope.$watch(function (scope) {
            return scope.data.time
        },
        function (newValue, oldValue) {
            console.log("newValue -- " + newValue +" oldValue--- " + oldValue );
        }
    );

    document.getElementById("updateTimeButton")
        .addEventListener('click', function () {
            $scope.$apply(function () {
                console.log("Digest Cycle Started");
                $scope.data.time = new Date();
                //$scope.$digest();
            })
        });
});