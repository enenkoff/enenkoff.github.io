$(document).ready(function () {

/* ------------------ functions ------------------ */

    /* footer bottom */

    function footer_at_bottom() {

        var winWidth = $(window).width();
        var $footer = $('#footer');
        var $wrapper = $('#wrapper');
        var $footer_height = $footer.height();

        winWidth >= 960 ? $wrapper.css('paddingBottom',$footer_height) : $wrapper.css('paddingBottom',0)


    }

    /* active search field */

    var $searchBox = $('.header__search');
    $searchBox.find('label').click(function(){
        $searchBox.find('.search-field').addClass('active');
    });

    $(window).click(function(e){
        if(!$(e.target).hasClass('.search-field')){
            if($(e.target).parents('.header__search').length == 0){
                $searchBox.find('.search-field').removeClass('active');
            }
        }
    });

    /* inverting submenu */

    function invert_submenu() {

        var WinWidth = $(window).width();
        var $header_top = $('.header__top');
        var $header_nav = $('.header__nav');

        $header_top.find('nav > ul > li').each(function () {

            var $this = $(this);
            var $this_offset = $this.offset().left;
            var $this_sub01 = $(this).find('.has-subdrop[data-sublevel="1"]');
            var $this_sub01_off = $this_offset + 360;
            var $this_sub02 = $(this).find('.has-subdrop[data-sublevel="2"]');
            var $this_sub02_off = $this_offset + 540;

            $this_sub01_off >= WinWidth ? $this_sub01.addClass('invert') : $this_sub01.removeClass('invert');
            $this_sub02_off >= WinWidth ? $this_sub02.addClass('invert') : $this_sub02.removeClass('invert');

        })

        $header_nav.find('nav > ul > li').each(function () {

            var $this = $(this);
            var $this_offset = $this.offset().left;
            var $this_sub01 = $(this).find('.has-subdrop[data-sublevel="1"]');
            var $this_sub01_off = $this_offset + 480;
            var $this_sub02 = $(this).find('.has-subdrop[data-sublevel="2"]');
            var $this_sub02_off = $this_offset + 720;

            $this_sub01_off >= WinWidth ? $this_sub01.addClass('invert') : $this_sub01.removeClass('invert');
            $this_sub02_off >= WinWidth ? $this_sub02.addClass('invert') : $this_sub02.removeClass('invert');

        })

    }

    /* banners carousel */

    function banners_carousel() {
        $('.banners__slider').find('.owl-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            mouseDrag: false,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:3
                }
            }
        })
    }



/* ------------------ document load ------------------ */

    footer_at_bottom();
    invert_submenu();
    if($('.owl-carousel').length > 0) {
        banners_carousel();
    }

/* ------------------ document resize ------------------ */

    $(window).resize(function () {
        footer_at_bottom();
        invert_submenu();
    });

/* ------------------ document scroll ------------------ */

});