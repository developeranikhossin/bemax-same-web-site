$(document) .ready(function(){

/*  slider area */

    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })




/* project area */

    $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })
    


/*  vider area */
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });









})

