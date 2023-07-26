$('.carousel').owlCarousel({
    margin:0,
    loop:false,
    autoplayTimeOut:0,
    autoplayHoverPause:false,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        580:{
            items: 1,
            nav: false
        },
        0:{
            items: 1,
            nav: false
        }
    }
});

$('.next-btn').click(function(){
    $('.next-btn').toggleClass("next-btnActive");
    
});
