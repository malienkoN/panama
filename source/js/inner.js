$(document).ready(function() {

// 991 992
    if (window.matchMedia('(max-width: 991px)').matches) {
        // do functionality on screens smaller than 768px
        $('#productSlider').lightSlider({
            gallery: true,
            item: 1,
            vertical: false,
            // adaptiveHeight: true,
            // verticalHeight: 196,
            slideMargin: 5
        });
    }
    if (window.matchMedia('(min-width: 992px)').matches) {
        $('#productSlider').lightSlider({
            gallery: true,
            item: 1,
            vertical: true,
            adaptiveHeight: true,
            loop: true,
            verticalHeight: 500,
            vThumbWidth: 60,
            thumbItem: 5,
            thumbMargin: 4,
            slideMargin: 0
        });
    }
});
