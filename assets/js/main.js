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

    

    


}
