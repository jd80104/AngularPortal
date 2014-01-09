var directives = angular.module('portal.directives', []);

directives.directives('focus', function () {
    return {
        link: function (scope, element, attrs) {
            element[0].focus();
        }
    };
});