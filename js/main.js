$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 910) {
            $('.navbar').addClass('fixed-top');
        }
        if ($(window).scrollTop() < 910) {
            $('.navbar').removeClass('fixed-top');
        }
    });
});

$(".anim ul li a[href^='#']").on('click', function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function () {
        window.location.hash = hash;
    });
});

$("#section-parallax .col-sm-6 a[href^='#']").on('click', function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function () {
        window.location.hash = hash;
    });
});

$(".footer .scroll-top-btn a[href^='#']").on('click', function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function () {
        window.location.hash = hash;
    });
});

