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

        // Call the backend and set isValid
        isValid = true;

        if (isValid) {
            window.location.replace('index.html')
        }
        else {
            $('#loginForm').removeClass();
            $('#loginForm').addClass('animated shake');
        }
    });
});