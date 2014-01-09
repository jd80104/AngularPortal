$(document).ready(function () {
    $('.cancel').click(function () {
        $('#loginForm').removeClass();
        $('#loginForm').addClass('animated shake');
        window.close();
    });

    $('.submit').click(function () {
        var isValid = false;
        $('#loginForm').removeClass();
        $('#loginForm').addClass('animated flipOutY');

        // Call the backend and set isValid and return all that you need.  You can plug any security provider you want.
        isValid = true;

        if (isValid) {
            window.location.replace('index.html')
        }
        else {
            $('#loginForm').removeClass().addClass('animated shake');
        }
    });
});