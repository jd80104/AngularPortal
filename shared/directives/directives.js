'use strict'

angular.module("Portal")
    .directive('navMenu', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'shared/templates/navMenu.html'
    }
});