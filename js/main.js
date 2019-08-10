(function($) {
    "use strict";

    /*[ Animation Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'html',
        transition: function(url) { window.location.href = url; }
    });


    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height() / 2;

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display', 'flex');
        } else {
            $("#myBtn").css('display', 'none');
        }
    });

    $('#myBtn').on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if ($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    } else {
        var posWrapHeader = 0;
    }

    if ($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top', 0);
    } else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
    }

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top', 0);
        } else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
        }
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function() {
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');
    for (var i = 0; i < arrowMainMenu.length; i++) {
        $(arrowMainMenu[i]).on('click', function() {
            console.log(arrowMainMenu[i]);
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }
    /*mobile menu sub categorias */
    var arrowSubMenu = $('.arrow-sub-menu-m');
    for (var i = 0; i < arrowSubMenu.length; i++) {
        $(arrowSubMenu[i]).on('click', function() {
            console.log(arrowSubMenu[i]);
            $(this).parent().find('.sub2-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-sub-menu-m');
        })
    }

    $(window).resize(function() {
        if ($(window).width() >= 992) {
            if ($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display', 'none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function() {
                if ($(this).css('display') == 'block') {
                    console.log('hello');
                    $(this).css('display', 'none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });

        }
    });


    /*==================================================================
    [ Show / hide modal search ]*/
    $('.js-show-modal-search').on('click', function() {
        $('.modal-search-header').addClass('show-modal-search');
        $(this).css('opacity', '0');
        $('#search').focus();
    });

    $('.js-hide-modal-search').on('click', function() {
        $('.modal-search-header').removeClass('show-modal-search');
        $('.js-show-modal-search').css('opacity', '1');
        $('#result').empty();
        $('#search').val('');
    });

    $('.container-search-header').on('click', function(e) {
        e.stopPropagation();
    });

    /*==================================================================
        [ Show / hide modal form ]*/
    $('.js-show-modal-form').on('click', function() {
        $('.modal-form-header').addClass('show-modal-form');
        $(this).css('opacity', '0');
        $("input[name=nombre]").focus();
    });

    $('.js-hide-modal-form').on('click', function() {
        $('.modal-form-header').removeClass('show-modal-form');
        $('.js-show-modal-form').css('opacity', '1');
        $("input[name=nombre]").val("");
        $("input[name=correo]").val("");
        $("input[name=telefono]").val("");
        $("input[name=usuario]").val("");
        $("textarea[name=mensaje]").val("");
    });

    $('.container-form-header').on('click', function(e) {
        e.stopPropagation();
    });






})(jQuery);