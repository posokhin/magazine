window.onload = function(){
    
    
    
    

    var plus = document.querySelectorAll('.dishes__num-plus');
    
    var curr = document.querySelectorAll('.dishes__num-current');
    
    var minus =document.querySelectorAll('.dishes__num-minus');


    function show(){
        
        this.classList.toggle('show');
     
    }

    for(var k=0;k<minus.length;k++){
        minus[k] = show;
    }

    for(var i=0;i<plus.length;i++){
        
        plus[i].onclick = show;

        
        
    }

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

      
    
    
   
}