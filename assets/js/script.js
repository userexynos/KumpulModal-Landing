$(document).ready(function () {
    $('#toKatalog').click(function() {
        $(window).scrollTop($('#katalog').offset().top-40);
    });
    $('#toHow').click(function() {
        $(window).scrollTop($('#how').offset().top-50);
    });
    $('#toWhy').click(function() {
        $(window).scrollTop($('#why').offset().top-50);
    });
    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();
        scrollTop > 0 ?
            $('nav').addClass('fixed-top') : $('nav').removeClass('fixed-top');
        if(scrollTop > $('#header').offset().top && scrollTop < $('#katalog').offset().top-100) {
            $('#home').addClass('active');
            $('#invest').removeClass('active');
            $('#work').removeClass('active');
            $('#we').removeClass('active');
        } else if(scrollTop > $('#katalog').offset().top-100 && scrollTop < $('#how').offset().top-100) {
            $('#home').removeClass('active');
            $('#invest').addClass('active');
            $('#work').removeClass('active');
            $('#we').removeClass('active');
        } else if(scrollTop > $('#how').offset().top-100 && scrollTop < $('#why').offset().top-100) {
            $('#home').removeClass('active');
            $('#invest').removeClass('active');
            $('#work').addClass('active');
            $('#we').removeClass('active');
        } else if(scrollTop > $('#why').offset().top-100) {
            $('#home').removeClass('active');
            $('#invest').removeClass('active');
            $('#work').removeClass('active');
            $('#we').addClass('active');
        }
    });
    $('.owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
                dots: true,
                margin: 20,
                loop: true,
                autoPlay: true
            },
            720: {
                items: 2,
                dots: true,
                margin: 30
            },
            1100: {
                items: 3,
                dots: false,
                margin: 40
            }
        }
    });
    AOS.init();
});