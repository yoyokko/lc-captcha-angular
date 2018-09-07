import angular from 'angular';
import {validator} from './validator';
import {def} from './directiveDef';
import {loader} from './lccaptchaScriptLoader';

export const ngLuosimaoCaptcha = (function() {
    var name = 'lccaptcha';

    def(name, {
        restrict: 'E',
        scope: {
            dataSiteKey: '@lcKey',
            dataWidth: '@lcWidth',
            onVerified: '&lcVerified'
        },
        link: function($scope, element, attrs) {

            validator($scope.dataSiteKey, 'data-site-key must not be empty.');
            if (angular.isUndefined($scope.dataWidth)) {
                $scope.dataWidth = "100%";
            }

            loader(function() {
                angular.element(document).ready(function () {
                });
            });

            $scope.getResponse = function(resp) {
                if (!angular.isUndefined($scope.onVerified)) {
                    $scope.onVerified({resp, LUOCAPTCHA})
                }
            }
        },
        template: '<div class="l-captcha" data-site-key="{{dataSiteKey}}" data-width="{{dataWidth}}" data-callback="luosimaoCaptchaResponse"></div>'
    });

    return name;
}());
