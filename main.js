$(document).ready(function () {
    // OWL CAROUSEL GENERAL JS
    if ($('.owl-carousel').length) {
        $('.owl-carousel').each(function () {
            $(this).owlCarousel({
                items: $(this).data('items') ? $(this).data('items') : 3, 
                autoPlay: $(this).data('autoplay') ? $(this).data('autoplay') : 2500,
                pagination: $(this).data('pagination') ? $(this).data('pagination') : false,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]
            });
        });
    }

}); // document ready end 


"use strict";
$(window).load(function () {


}); // window load end 










