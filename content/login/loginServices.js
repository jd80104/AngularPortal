var services = angular.module('login.services', ['ngResource']);

services.factory('User', ['$resource', function ($resource) {
    return $resource('/users/:id', { id: '@id' });
}]);

services.factory('UserList', ['User', '$q', function (User, $q) {
    return function () {
        var delay = $q.defer();
        User.query(function (users) {
            delay.resolve(users)
        }, function () {
            delay.reject('Unable to fetch Users');
        });
        return delay.promise;
    };
}]);

services.factory('UserLoader', ['User', '$route', '$q', function (User, $route, $q) {
    return function () {
        var delay = $q.defer();
        User.get({ id: $route.current.params.userId }, function (user) {
            delay.resolve(user);
        }, function () {
            delay.reject('Unable to fetch user ' + $route.current.params.userId);
        });
        return delay.promise;
    };
}]);