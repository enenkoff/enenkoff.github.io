$(document).ready(function(){

    var $gallery = $('#gallery'),
        $mainImgBox = $gallery.find('.gallery-main'),
        $listImgBox = $gallery.find('.gallery-list'),
        $galleryItem = $listImgBox.find('figure'),
        $arrowImgs = $mainImgBox.find('button'),
        $items_count = $galleryItem.length;
    var i_can_click = true;


    // click function
    function itemClick(item){
        if(i_can_click == true){

            i_can_click = false;
            $galleryItem.removeClass('current');
            var cloneItem = item.clone().addClass('hidden');
            $mainImgBox.append(cloneItem);
            item.addClass('current');
            $mainImgBox.find('.hidden').fadeIn(300,function () {
                $mainImgBox.find('.current').remove();
                $mainImgBox.find('.hidden').attr('class','current');
                i_can_click = true;
            });

        }
    }


    // click on img
    $galleryItem.click(function () {
        itemClick($(this));
    });


    //click on main arrow
    $arrowImgs.click(function () {
        var dataCurrentItem = $mainImgBox.find('figure').attr('data-item');
        dataCurrentItem = parseInt(dataCurrentItem);
        if($(this).hasClass('next')){
            if(dataCurrentItem == $items_count){
                itemClick($listImgBox.find('figure[data-item="1"]'))
            }
            else {
                dataCurrentItem++;
                itemClick($listImgBox.find('figure[data-item="'+dataCurrentItem+'"]'))
            }
        }
        else if($(this).hasClass('prev')){
            if(dataCurrentItem == 1){
                itemClick($listImgBox.find('figure[data-item="'+$items_count+'"]'))
            }
            else {
                dataCurrentItem--;
                itemClick($listImgBox.find('figure[data-item="'+dataCurrentItem+'"]'))
            }
        }
    });

    //list navigation

    var $itemsBoxHeight,
        $itemsTop,
        $maxLevels,
        $itemsTopLevel = 0;

    function activeButtons(){

        if($itemsTopLevel == 0){
            $listImgBox.find('button.down').addClass('hid');
            $listImgBox.find('button.up').removeClass('hid')
        }
        else if ($itemsTopLevel == Math.ceil($maxLevels)){
            $listImgBox.find('button.down').removeClass('hid');
            $listImgBox.find('button.up').addClass('hid')
        }
        else {
            $listImgBox.find('button').removeClass('hid');
        }
    }


    function itemsBoxPosition() {

        $itemsBoxHeight = $listImgBox.find('li:first').find('div').height();
        $itemsTop = -$itemsTopLevel*($itemsBoxHeight + 2);

        $listImgBox.find('ul').animate({'top':$itemsTop},'200');
        activeButtons()
    }

    if($items_count > 8){
        $listImgBox.find('button').show();
        $maxLevels = ($items_count - 8)/2;
        activeButtons()
        // itemsBoxPosition();
    }

    $listImgBox.find('button').click(function () {

        if($(this).hasClass('up')){
            if($itemsTopLevel < $maxLevels){
                $itemsTopLevel++;
                itemsBoxPosition();
            }
        }
        else if($(this).hasClass('down')){
            if($itemsTopLevel > 0){
                $itemsTopLevel--;
                itemsBoxPosition();
            }
        }

    })

});