$(document).ready(function () {

/* ------------------ functions ------------------ */

    /* active search field*/

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



/* ------------------ document load ------------------ */


/* ------------------ document resize ------------------ */


/* ------------------ document scroll ------------------ */

});