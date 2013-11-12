$(document).ready(function () {
    $('.cancel').click(function () {

        $('#loginForm').removeClass();
        $('#loginForm').addClass('animated shake');
    });

    $('.submit').click(function () {

        $('#loginForm').removeClass();
        $('#loginForm').addClass('animated flipOutY');
        window.location.replace('index.html')
    });
});