
(function ($) {
    "use strict";

    $(window).on('load', function () {

        function preLoader() {
            setTimeout(function () {
                $('#preloader .scroll-static').addClass('loaded');
                setTimeout(function () {
                    $('#preloader').addClass('loaded');
                    setTimeout(function () {
                        $('#preloader').remove();
                    }, 400);

                    // wow
                    var wow = new WOW().init();

                }, 600);
            }, 1000);
        };
        preLoader();

        /* projectFilter
        ============================ */
        function projectFilter() {
            var $gridt = $('.list-project');

            $gridt.imagesLoaded().progress(function () {
                $gridt.isotope();
            });
            $('.filter-buttons').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $gridt.isotope({
                    filter: filterValue
                });
                $(this).addClass('active').siblings().removeClass('active');
            });
        };
        projectFilter();

    });

    $(window).on('scroll', function () {

        var scrollTop = $(window).scrollTop();

        /* shapeRotate
        ============================ */
        function shapeRotate() {
            var rotate = 0 + scrollTop / 3 + 'deg';
            $('.shape').css({
                '-webkit-transform': 'rotateZ(' + rotate + ')',
                '-moz-transform': 'rotateZ(' + rotate + ')',
                '-ms-transform': 'rotateZ(' + rotate + ')',
                '-o-transform': 'rotateZ(' + rotate + ')',
                'transform': 'rotateZ(' + rotate + ')'
            });
        };
        shapeRotate();

        /* navFixed
        ============================ */
        function navFixed() {
            if (scrollTop >= 100) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        };
        navFixed();

        /* scrollToTop-ShowHide
        ============================ */
        function scrollToTop() {
            if (scrollTop >= 400) {
                $('.scroll-to-top').addClass('show');
            } else {
                $('.scroll-to-top').removeClass('show');
            }
        };
        scrollToTop();

        /* scroll-indicator
        ============================ */
        (function () {
            window.onscroll = function () { ProgressBar() };
            function ProgressBar() {
                var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var scrolled = (winScroll / height) * 100;
                document.querySelector(".scroll-indicator").style.height = scrolled + "%";
            }
        }());

    });


    $(document).ready(function () {

        /* menu
        ============================ */
        function menu() {
            $('.menu-btn').on('click', function () {
                $(this).toggleClass('close-menu');
                $('.nav-bar').toggleClass('show');
                $('.nav-bar-overlay').toggleClass('show');
            });
            $('.nav-item .nav-link, .scroll-to-top').on('click', function () {
                $('.menu-btn').removeClass('close-menu');
                $('.nav-bar').removeClass('show');
                $('.nav-bar-overlay').removeClass('show');
            });
        };
        menu();

        /* NavActiveClass
        ============================ */
        function navActiveClass() {
            $('body').scrollspy({
                target: '#menu-list'
            });
            // Smooth-Scroll
            $('a.nav-link, a.scroll-to-top').on("click", function () {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                    if (target.length) {
                        $("html, body").animate({
                            scrollTop: target.offset().top
                        }, 1000, "easeInOutExpo");
                        return false;
                    }
                }
                return false;
            });
        };
        navActiveClass();

        /* tiltJS
        ============================ */
        function tiltInit() {
            $('.tilt-wrap').tilt();
        };
        tiltInit();

    });


})(jQuery);