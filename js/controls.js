// Banner
    $(function () {

      // Slideshow 1
      $("#slider1").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 1000,
		pause: 10000,
        namespace: "centered-btns"
      });

    });


///////////////////// Back To Top 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.backtotop').fadeIn('slow');
        } else {
            $('.backtotop').fadeOut('slow');
        }
    });
    $('.backtotop').click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
        return false;
    });




$(window).load(function() {
    $("#flexiselDemo2").flexisel({
        visibleItems: 5,
        itemsToScroll: 3,
        animationSpeed: 200,
        infinite: false,
        navigationTargetSelector: null,
        autoPlay: {
            enable: false,
            interval: 5000,
            pauseOnHover: true
        }
    });
    
    $("#flexiselDemo3").flexisel({
        visibleItems: 3,
        itemsToScroll: 1, 
		infinite: false,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        }        
    });
    
});
