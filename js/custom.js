

$(document).ready(function(){
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
                items: 2,

            },
            1000: {
                items: 3

            }
        }
    })

    $('#owl-demo1').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav:true,
        autoplayTimeout:1000,
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
    $('.owl-next').html('<i class="fas fa-arrow-right"></i>');
    $('.owl-prev').html('<i class="fas fa-arrow-left"></i>');
});




