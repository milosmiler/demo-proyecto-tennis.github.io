$(document).ready(function(){
    console.log('iniciando js');

    $('.nav-icon1').click(function () {
        $(this).toggleClass('open');
        $('nav').toggleClass('active');
        $('body').toggleClass('active');
    });

    $('.owl-carousel.owl-ball').owlCarousel({
        loop:false,
        margin:5,
        nav:true,
        items:1,
        autoplay: false,
        autoplayHoverPause:true
    });
    $('.owl-carousel.owl-racket').owlCarousel({
        loop:true,
        margin:36,
        nav:false,
        autoWidth:true,
        items:3,
        center:true,
        responsive: {
          0: {
            autoWidth:false,
            items: 1,
            margin:5
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
}

    })
});
