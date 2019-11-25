

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    $('.owl-next').html('<i class="fas fa-chevron-right"></i>');
    $('.owl-prev').html('<i class="fas fa-chevron-left"></i>');
});




