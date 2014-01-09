var loginModule = angular.module('LoginModule', []);

loginModule.controller('loginController', ['$scope', function ($scope) {
    var loginFormSubmit = function () {
        var isValid = false;
        $('#loginForm').removeClass();
        $('#loginForm').addClass('animated flipOutY');

        // Call the backend and set isValid and return all that you need.  You can plug any security provider you want.
        isValid = true;

        if (isValid) {
            window.location.replace('index.html')
        }
        else {
            $('#loginForm').removeClass();
            $('#loginForm').addClass('animated shake');
        }
    };
}]);