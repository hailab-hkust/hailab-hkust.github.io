function pub_showhide(id, button) {
    var mode = "block";
    var curr = button + "_" + id;

    if ($('#' + curr).css("display") === mode) {
        $('#' + curr).slideUp("fast");
    } else {
        $('#' + curr).slideDown("fast");
    }
}

$(function() {
    var stickyNavTop = $('#stickyheader').offset().top;

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('#stickyheader').addClass('sticky');
        } else {
            $('#stickyheader').removeClass('sticky');
        }
    };

    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});

$(function() {
    var back_to_top_button = ['<a href="#top" class="backToTop">back to top</a>'].join("");
    $("body").append(back_to_top_button)

    $(".backToTop").hide();

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.backToTop').fadeIn();
            } else {
                $('.backToTop').fadeOut();
            }
        });

        $('.backToTop').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});

$(function() {
    $(".owl-carousel").owlCarousel({
        nav: false,
        stagePadding: 5,
        items: 4,
        slideBy: 4,
    });
});

$(function() {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        var element = $($(this)[0].hash);
        $('html, body').animate({
            scrollTop: element.offset().top - 100
        }, 500);
        element.delay(800).effect("highlight", 2000);
    });
});

$(function() {
    if (location.hash) {
        var element = $(location.hash);
        $('html,body').animate({
            scrollTop: element.offset().top - 100
        }, 500);
        element.delay(800).effect("highlight", 2000);
    }
});