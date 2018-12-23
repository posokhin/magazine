window.onload = function(){
    
    
    var btn = $('.header__menu-burger');
    var menuTop = $('.header__list');

    btn.on('click',function(){
        menuTop.slideToggle();
    })

    var btnFilter = $('.btn__fix');
    var filter = $('.filter')
    

    btnFilter.on('click',function(){
        filter.slideToggle();
    })

    
    if($(window).width() >= 769) {
        $('.main').unbind('click');
    }
    else{
        $('.main').on('click', function(){
            filter.slideUp();
            
        })
    }


    if (window.innerWidth <= 768) {
        $('.your-slider').slick('unslick');
      }
      else {
        
            $('.filter__list').slick({
                infinite: false,
                slidesToShow: 9,
                slidesToScroll: 3,
                arrows: false,
                dots:true,
                fade: false,
                responsive: [
                    {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                      }
                    },
                    {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 4
                        }
                    },
                    {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 4
                        }
                    },
                    {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 8,
                        slidesToScroll: 4
                        }
                    }
                  ]
              });
        
    }

    $('.dishes__item-open').css('display','flex').hide();

    $('.dishes__item-link').on('click',function(e){
        e.preventDefault();
        $('.dishes__item-open').slideDown(600);

        $('.main').css('filter','blur(15px)');
        $('.main').css('transition','0.3s'); 

        var ccal = $('.dishes__item-open-right-item-name');
        function fadeInUp(el){
            el.addClass('animated fadeInUp');
        }
        function fadeInDown(el){
            el.addClass('animated fadeInDown');
        }

        
        setTimeout(function(){
            fadeInDown($('.dishes__item-open-right-title'));
        },500);
        setTimeout(function(){
            fadeInDown($('.dishes__item-open-right-desk-one'));
        },900);
        setTimeout(function(){
            fadeInDown($('.dishes__item-open-right-desk-two'));
        },900);
        setTimeout(function(){
            fadeInUp($('.dishes__item-open-right-item-value'));
        },1000);
        setTimeout(function(){
            fadeInUp(ccal);
        },1000);
        
    }) 
    $('.close').on('click', function(){
        $('.dishes__item-open').slideUp();
        $('.main').css('filter','blur(0px)');
    })

    
    
   
}