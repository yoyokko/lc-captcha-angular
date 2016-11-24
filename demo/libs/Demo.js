var demo = angular.module('demo', ['lccaptcha']);

demo.controller('demoCtrl', ['$scope', '$timeout',
    function($scope, $timeout) {
        $scope.reset = function () {
            if (!angular.isUndefined($scope.LUOCAPTCHA)) {
                $scope.LUOCAPTCHA.reset();
            }
        };

        $scope.verified = function(resp, LUOCAPTCHA) {
            alert("Captcha token: " + resp);
            $scope.LUOCAPTCHA =  LUOCAPTCHA;
        };
    }
]);
