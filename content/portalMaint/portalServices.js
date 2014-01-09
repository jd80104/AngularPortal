var services = angular.module('portal.services', ['ngResource']);

services.factory('Portlet', ['$resource', function ($resource) {
    return $resource('/portlet/:id', { id: '@id' });
}]);

services.factory('PortletList', ['Portlet', '$q', function (Portlet, $q) {
    return function () {
        var delay = $q.defer();
        Portlet.query(function (portlets) {
            delay.resolve(portlets)
        }, function () {
            delay.reject('Unable to fetch Portlets');
        });
        return delay.promise;
    };
}]);

services.factory('PortletLoader', ['Portlet', '$route', '$q', function (Portlet, $route, $q) {
    return function () {
        var delay = $q.defer();
        Portlet.get({ id: $route.current.params.PortletId }, function (Portlet) {
            delay.resolve(portlet);
        }, function () {
            delay.reject('Unable to fetch portlet ' + $route.current.params.portletId);
        });
        return delay.promise;
    };
}]);