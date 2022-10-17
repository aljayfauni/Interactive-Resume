jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();
                positionX =  $(this).scrollLeft(position);
           
               // console.log(position);
               var me_ofset =  document.getElementById('box');
       
         
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
         
            if(me_ofset.scrollLeft >=3600){
             
           $('#me').css({top: '900px',left:'300px', position:'relative'})
           
            $('html,body').animate({
                scrollTop: $("#me").offset().top},
                'slow');
            
                $('#me').css({top: '300px', position:'fixed'});
                
            }
            if (position >=0 && position < 3799){
                
                $('#me').css({top: '405px', position:'relative'})
                   $('html,body').animate({
                    scrollTop: $(".scene2").offset().top},
                    'slow');
            }

            if (position > 6000){

                $('#me').css({top: '305px', position:'relative'})
                   $('html,body').animate({
                    scrollTop: $(".scene2").offset().top},
                    'slow');
            }
             
            // if (position >=0 && position < 3799){
            //     $('#me').css({top: '305px', position:'fixed'})
            //    $('html,body').animate({
            //     scrollTop: $(".scene2").offset().top},
            //     'slow');
           
            //     }
                //$('#me').css({top: '305px', position:'fixed'});
      
        
        })
       
       
    };
});

$(document).ready(function() {
    $('#box').hScroll(30); // You can pass (optionally) scrolling amount
});


   
     