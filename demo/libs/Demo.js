var demo = angular.module('demo', ['lccaptcha']);

demo.controller('demoCtrl', ['$scope', '$timeout',
    function($scope, $timeout) {

        $scope.verified = function(resp, LUOCAPTCHA) {
            console.log(resp, LUOCAPTCHA);
        };
    }
]);
