$(function() {


    /* PARALLAX (движении мыши)*/
    $('.main').on('mousemove', (e) => {
        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();

        $('.circle__one').css(
            'transform',
            'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
           ); 

        $('.circle__two').css(
            'transform',
            'translate(' + x * 50 + 'px, ' + y * 50 + 'px)'
           ); 

        $('.circle__three').css(
            'transform',
            'translate(-' + x * 20 + 'px, ' + y * 80 + 'px)'
           ); 

        $('.circle__four').css(
            'transform',
            'translate(' + x * 100 + 'px, -' + y * 30 + 'px)'
           ); 
    });


     /* PARALLAX SCROLL (скролл страницы) */
     $(function() {
        $(window).on('scroll', function () {
            let top = $(this).scrollTop();
            parallax(top);
        })
    });

    function parallax(top) {
        $('.side__left').css(
            'transform',
            'translateY(' + (top / 5) + 'px)'
           ); 

        $('.side__right').css(
            'transform',
            'translateY(' + (top / 4) + 'px)'
           ); 
    };


    /* ABOUT TUB (разворачивание блока по клике на кнопку)*/
    let tubAbout = $("#tab");
    let btnAbout = $("#about-btn");
    let more = $("#more");
    let turn = $("#turn");
    let icon = $("#icon");

    tubAbout.addClass("has");

    let heightTUB = $(tubAbout).height();

        window.addEventListener("orientationchange", function() {
            setTimeout(function() { 
                tubAbout.addClass("has");
                $(tubAbout).height('auto'); 
                heightTUB = $(tubAbout).height();
            }, 100);

            setTimeout(function() { 
                tubAbout.removeClass("has");
                $(tubAbout).height(0); 
            }, 200);
        });

        tubAbout.removeClass("has");
        
        $(btnAbout).on("click", function(event) {
            event.preventDefault();

            $(tubAbout).height(0); 

            if ($(tubAbout).hasClass("has")) {
                tubAbout.removeClass("has");
                 $(tubAbout).height(0); 
                more.removeClass("show");  
                turn.removeClass("show");  
                icon.removeClass("show"); 
            } else {
                tubAbout.addClass("has");
                $(tubAbout).height(heightTUB); 
                more.addClass("show");  
                turn.addClass("show");  
                icon.addClass("show"); 
            };
        });


     /* SLIDER https://kenwheeler.github.io/slick/  
     (слайдер с отзывами на главной странице*/
     $('#reviews').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 500,
        adaptiveHeight: true,
       
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1
              }
            },
          ]

      });

  
    var mh = 0;
    $(".reviews__item").each(function () {
        var h_block = parseInt($(this).height());
        if(h_block > mh) {
           mh = h_block;
        };
    });
    $(".reviews__item").height(mh);

});