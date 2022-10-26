jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();
                positionX =  $(this).scrollLeft();
           
                console.log(position);
            ;
            const container = document.querySelector('#box')
               var me_ofset =  document.getElementById('box');
               x = container.scrollLeft = '0' ;
               console.log(x);
               if(position <= x ){
                $("#me2d").attr("src","images/go_left1.png");
            
                if(position >x ){
                    $("#me2d").attr("src","images/me_walk2.png");
                }
               }
               if(position >x ){
                $("#me2d").attr("src","images/me_walk.png");
            
               }

               var _scrollTimeout = null;
               clearTimeout(_scrollTimeout);
               _scrollTimeout = setTimeout(function() {
                   console.log("Haven't scrolled in 1s");
                   $("#me2d").attr("src","images/me_walk2.png");

               }, 200);
          
        
               var _scrollTimeout = null;
               clearTimeout(_scrollTimeout);
               _scrollTimeout = setTimeout(function() {
                   console.log("Haven't scrolled in 1s");
                   $("#me2d").attr("src","images/me_walk3.png");

               }, 250);
           
          
               var _scrollTimeout = null;
               clearTimeout(_scrollTimeout);
               _scrollTimeout = setTimeout(function() {
                   console.log("Haven't scrolled in 1s");
                   $("#me2d").attr("src","images/me.png");

               }, 350);
           

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
                
                $('#me').css({top: '330px', position:'fixed'})
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
                 if (position > 2200) {
                    $('.educ').slideDown(500);
                  // alert('hello');
                } else {
                     $('.educ').slideUp(500);
                }

                if (position > 2200) {
                    $('#cloud1').css({position:'absolute'});
                  // alert('hello');
                } 
                if (position > 2200) {
                    $('#cloud2').css({position:'absolute'});
                  // alert('hello');
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
    $('#box').hScroll(75); // You can pass (optionally) scrolling amount
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

$(document).ready(function() {
    $(window).on("scroll", function() {
      console.log($(this).scrollLeft())
      if($(this).scrollLeft() >100){
        // set to new image
        $(".brand-logo img").attr("src","http://placekitten.com/300/300");
      } else {
        //back to default
        $(".brand-logo img").attr("src","http://placekitten.com/200/200");
      }
    })
  })
     