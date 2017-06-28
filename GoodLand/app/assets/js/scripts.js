// device
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);

// main scripts
$(document).ready(function(){


    // preloader

    function preloader() {
        $('html').addClass('ovh')
        $('body').imagesLoaded({ background: true }, function () {
            $('#preloader').fadeOut(600,function(){
                if($('#fix-section').length > 0){
                    $('#fix-section .img-block').addClass('active')
                }
            });
            $('html').removeClass('ovh')
        })
    }

    // focus in search
    
    function focusSearch() {
        $('#search').focus(function () {
            $('#searching').addClass('active')
        })

    }
    function documentClick() {
        $(document).click(function(e){
            var targ = $(e.target)
            if(targ.parents('.searching-form').length==0){
                $('#searching').removeClass('active')
            }
        })
    }


    // minimal sidebar

    function scrollInSidebar() {
        var nav = $('#nav');
        nav.mCustomScrollbar({theme: 'minimal-dark'});
    }


    // open modal

    $('.request').click(function (e) {
        e.preventDefault;
        $('#modal').find('.modal-thanks').removeClass('active');
        var data_form = $(this).attr('data-form');
        $('#modal').find('section[data-form="'+data_form+'"]').addClass('current');
        $('#modal').fadeIn(300);
        $('html').addClass('ovh');
    });

    // drops

    function drops() {
        $('.show_drop').click(function () {
            var $dropBlock = $(this).parents('li');
            $dropBlock.classToggle('active');
            $dropBlock.find('.drops-content').slideToggle(300)
        })
    }

    // window-height margin

    function fullMargin() {

        if($('.video').length == 0){
            $('.full_margin').addClass('simple')
        }
        else {
            var WinHeight = $(window).height();
            $('.full_margin').css('margin-top',WinHeight);
            $('.adverse_margin').css('margin-top',-0.5*WinHeight);
        }


    }



    // validate forms

    function validator() {
        $('.custom-form').each(function () {
            var thisForm = $(this);
            thisForm.validate({
                onfocusout: false,
                ignore: ".ignore",
                rules: {
                    name: {required: true},
                    tel: {required: true},
                    mail: {required: true},
                    type: {required: true},
                    age: {required: true},
                    address: {required: true},
                    tech_type: {required: true},
                    brand: {required: true},
                    year: {required: true},
                    load_file: {required: true},
                    condition: {required: true},
                    whatWeTransport: {required: true},
                    question: {required: true}
                },
                messages: {
                    name: {required: ""},
                    tel: {required: ""},
                    mail: {required: ""},
                    type: {required: ""},
                    age: {required: ""},
                    address: {required: ""},
                    tech_type: {required: ""},
                    brand: {required: ""},
                    year: {required: ""},
                    load_file: {required: ""},
                    condition: {required: ""},
                    whatWeTransport: {required: ""},
                    question: {required: ""}
                },
                errorClass: 'invalid',
                errorPlacement: $.noop,
                submitHandler:function (form) {
                    $('#modal').find('.modal-thanks').addClass('active');
//                            if (form.valid()){
//                                form.submit();
//                            }
                    return false;
                }
            })
        })
    }

    // delivery check


    function deliveryChange(){
        if($('#delivery').prop('checked')){
            $('.delivery-depend').removeClass('hidden')
        }
        else {
            $('.delivery-depend').addClass('hidden')
        }
    }


    // close modal

    $('#modal').find('.close').click(function(e){
        e.preventDefault();
        $('#modal').fadeOut(300,function () {
            $('#modal').find('section').removeClass('current');
            $('#modal').find('.modal-thanks').removeClass('active');
        });

        $('html').removeClass('ovh');
    });


    // views

    $('.view i').click(function () {

        $('.view i').removeClass('active');
        var data_view = $(this).attr('class');
        $(this).addClass('active');
        $('.catalog-list').attr('data-view',data_view);

    });

    // drops

    $('.drop-section .arrow').click(function () {
        var thisDrop = $(this).parents('.drop-section');
        thisDrop.toggleClass('active');
        thisDrop.find('.drop-box').slideToggle(300);
    })


    // burger

    $('.burger').click(function(){
        var $this = $(this);
        if($this.hasClass('close')){
            $this.removeClass('close')
            $('#mobile-nav').removeClass('active')
            $('html').removeClass('ovh')
            $('#header').removeClass('always_show')
        }
        else {
            $this.addClass('close')
            $('#mobile-nav').addClass('active')
            $('html').addClass('ovh')
            $('#header').addClass('always_show')
        }
    });

    $('#mobile-nav .close').click(function(){
        $('.burger').removeClass('close')
        $('#mobile-nav').removeClass('active')
        $('html').removeClass('ovh')
        $('#header').removeClass('always_show')
    });


    // start functions

    if($('#fullpage').length == 0){
        preloader();
        scrollInSidebar();
        focusSearch();
        documentClick();
        validator();
        drops();
        deliveryChange();
        $('#delivery').change(function(){
            deliveryChange();
        })
    }

    if($('.full_margin').length > 0){
        fullMargin()
    }

    // resize functions

    $(window).resize(function(){

        if($('.full_margin').length > 0){
            fullMargin()
        }

    })

});