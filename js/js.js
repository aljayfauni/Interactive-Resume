jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();
                positionX =  $(this).scrollLeft(position);
           
               // console.log(position);
            ;
               var me_ofset =  document.getElementById('box');

               if(position >3499){
                window.scrollTo( 0,1000);        
                    //  $('html,body').animate({
                    //         scrollTop: $("#me").offset().top},
                    //         'slow');

               }
              if(position<3499 && position <=0){

                $('html,body').animate({
          scrollTop: 0},
          'slow');
         }
         //     $('html,body').animate({
        //         scrollTop: $("#me").offset().top},
        //         'slow');
         
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
         
        //     if(me_ofset.scrollLeft >=3300){
             
        //    $('#me').css({top: '900px',left:'500px', position:'relative'})
           
        //     $('html,body').animate({
        //         scrollTop: $("#me").offset().top},
        //         'slow');
            
        //         $('#me').css({top: '300px', position:'fixed'});
                
        //     }
            if (position > 3499) {
                $('#me').addClass('me');
                $('#me').slideDown(1000);
                
               
                
                 $('#me2d').css({top: '0px', position:'relative'});



           
            } else {
        
                //$('#me2d').slideUp(300);
                $('#me').removeClass('me');
                $('#me2d').css({top: '0px', position:'relative'});
              
            }


            if (position < 3499){
                
                $('#me').css({top: '305px', position:'fixed'})
                //    $('html,body').animate({
                //     scrollTop: $("#me").offset().top},
                //     'slow');
                window.scrollTo( 0,0);   
            }
          

            if (position > 5200){

                $('#me2d').css({top: '0px', position:'relative'});
                
                window.scrollTo( 0,0);   
                $('#me').removeClass('me');

            }
        else if(position <= 5200 && position>=3499){
        
            //$('#me2d').slideUp(300);
            $('#me2d').css({top: '0px', position:'relative'});
            $('#me').addClass('me');
        }
             
            // if (position >=0 && position < 3799){
            //     $('#me').css({top: '305px', position:'fixed'})
            //    $('html,body').animate({
            //     scrollTop: $(".scene2").offset().top},
            //     'slow');
           
            //     }
                //$('#me').css({top: '305px', position:'fixed'});
                if (position > 900) {
                     $('.greet').slideDown(300);
                   // alert('hello');
                 } else {
                      $('.greet').slideUp(300);
                 }


                 if (position >3490) {
                    $('.submarine').fadeIn(200);
                    $('.submarine').css({zIndex:'99'});
                  $('.submarine').animate({left:'120px'},950);
                  // alert('hello');

                } 
           if(position >= 3600) {
              
                $('.submarine').animate({left:'950px'},950);
                $('.submarine').fadeOut(300);
                 }

       
          
        
        })
       
       
    };
});

$(document).ready(function() {
    $('#box').hScroll(30); // You can pass (optionally) scrolling amount
});


   

$(document).scroll(function () {
    var y = $(this).scrollLeft();
    if (y > 900) {
       // $('.greet').slideDown(300);
       alert('hello');
    } else {
        // $('.bottomMenu').slideUp(300);
    }

});
     