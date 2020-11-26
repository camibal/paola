// Sub page case studies
if ($('header.header.case-studies').length > 0) {
    $(window).on("resize load", function () {
        $(document).ready(function () {
            $(".stories .row").lightGallery();
        });
        $('.post-container').css({
            "max-height": $(".post-side-baner").height()
        });
    })
    $(window).on('scroll load', function () {
        var valueTrans = window.scrollY - $("header.header.case-studies").position().top + 10;
        if (valueTrans > 1) {
            $(".header.case-studies h5").css({

                transform: "translateY(" + valueTrans + "px)",
                opacity: 1 - valueTrans / 100


            });
            $(".header.case-studies h1").css({

                transform: "translateY(" + (-valueTrans) + "px)",
                opacity: 1 - valueTrans / 100


            });
        }
        else {
            $(".header.case-studies h5").css({

                transform: 'none',
                opacity: 1

            });
            $(".header.case-studies h1").css({

                transform: "none",
                opacity: 1


            });
        }
    });
}
// homepage ---------

if ($(".header__slider").length > 0) {
    $(".header__slider")
        .not("slick-initialized")
        .slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            adaptiveHeight: true,
            arrows: false,
            dots: true,
        });
}

if ($('.sticky').length > 0) {

    var stickyElements = document.getElementsByClassName('sticky');
    for (var i = stickyElements.length - 1; i >= 0; i--) {
        Stickyfill.add(stickyElements[i]);
    }
}


$('.sticky-2').css({
    'top': (window.innerHeight - $(this).height() + $(".sticky").height()),
    "z-index": '-1'
});
$(".section-content-container").css({
    height: $('.sticky-2').height() - 20,
});
$(document).on('click', '.navicon', function (e) {
    navMobile();
});
$(window).on("resize load", function () {
    var innerWindowHight = window.innerHeight;


    $(".section-1 .big-img").css({
        height: "calc( 100vh - " + $(".section-1 .sticky-header-container").height() + "px)"
    });
    $(".section-2 .big-img").css({
        height: "calc( 100vh - " + $(".section-2 .sticky-header-container").height() + "px)"
    });
    $(".section-3 .big-img").css({
        height: "calc( 100vh - " + $(".section-3 .sticky-header-container").height() + "px)"
    });
    $('.section-1 .sticky-2').css({
        'top': (innerWindowHight - $(".section-1 .big-img").height() + $(".section-1 .sticky-header-container").height()) / 2,
        "z-index": '-1',
    });

    $('.section-2 .sticky-2').css({
        'top': (innerWindowHight - $(".section-2 .big-img").height() + $(".section-2 .sticky-header-container").height()) / 2,
        "z-index": '-1',
    });
    $('.section-3 .sticky-2').css({
        'top': (innerWindowHight - $(".section-3 .big-img").height() + $(".section-3 .sticky-header-container").height()) / 2,
        "z-index": '-1',
    });
    $(".section-content-container").css({
        height: $('.sticky-2').height(),
        "margin-left": "20px",
        "margin-right": "20px",
    });
    $(".section-2 .section-content-container").css({
        height: "auto",
        "margin-left": "20px",
        "margin-right": "20px",
        "padding-bottom": "30px"
    });
    // var bottomStickElement = $('.stick-bottom').height();
    // if ($(window).width() > 575) {
    //   bottomStickElement /= 2;
    // }
    if ($(window).width() <= 575) {
        $('.companies-logo li').addClass("col-6");
        $('.companies-logo').addClass("row");
    }

    else {
        $('.companies-logo li').removeClass("col-6");
        $('.companies-logo').removeClass("row");
    }
    $('.stick-bottom').css({
        height: "auto"
    })

});
