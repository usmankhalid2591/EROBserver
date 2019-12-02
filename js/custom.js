
$('#owl-demo2').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav:true,
    autoplayTimeout:5000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,


        },
        600: {
            items: 1,

        },
        1000: {
            items: 1

        }
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    center:true,
    autoplay:false,
    smartSpeed: 1000,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.owl-next').html('<i class="fas fa-chevron-right"></i>');
$('.owl-prev').html('<i class="fas fa-chevron-left"></i>');




