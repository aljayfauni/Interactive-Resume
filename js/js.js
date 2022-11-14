
jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 60;
     
     
       $('#box').bind("DOMMouseScroll mousewheel", function (event) {
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
               position += direction > 0 ? -amount : amount;
               $(this).scrollLeft(position);
               event.preventDefault();
            
               if(position <= x ){
                $("#me2d").attr("src","images/go_left1.png");
            
                if(position >x ){
                    $("#me2d").attr("src","images/me_wal2.png");
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

               if(position >3475 && position< 8690){
                window.scrollTo( 0,1000);        
                    //  $('html,body').animate({
                    //         scrollTop: $("#me").offset().top},
                    //         'slow');

                    $('#me').css({border:'3px solid #eee',borderRadius:'300px',padding:'20px',backgroundColor: 'rgba(90,42,205,0.5)'});
                    $('.submarine').css({top: '-2250px', position:'relative'});
                    $('#bubbles').css({display:'block'});
                  
                    $('html_level').css({display: 'flex'});
                    $('.html_level').animate({left:'470px'},2800);
                    $('.css_level').animate({left:'475px'},3500);
                    $('.js_level').animate({left:'450px'},4200);
                    $('.php_level').animate({left:'450px'},4900);
               }
              if(position<3499 && position <=0){
                
        //         $('html,body').animate({
        //   scrollTop: 0},
        //   'slow');
         }
         //     $('html,body').animate({
        //         scrollTop: $("#me").offset().top},
        //         'slow');
         
          
            if (position > 3499) {
                $('#me').addClass('me');
                $('#me').slideDown(1000);

                 $('#me2d').css({top: '0px', position:'relative'});

           
            } else {
        
                //$('#me2d').slideUp(300);
                $('#me').removeClass('me');
                $('#me2d').css({top: '0px', position:'relative'});
                $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'0px',backgroundColor: 'rgba(0,0,0,0)'});
                $('#bubbles').css({display:'none'});
            }

            if (position < 3499){
                
                $('#me').css({top: '340px', position:'fixed'})
                //    $('html,body').animate({
                //     scrollTop: $("#me").offset().top},
                //     'slow');
                $('#cloud1').css({position:'fixed'});
                $('#cloud2').css({position:'fixed'});
                $('.submarine').css({top: '-3350px', position:'relative'});
                $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'0px',backgroundColor: 'rgba(0,0,0,0)'});
                window.scrollTo( 0,0);   

            }
          

            if (position > 8690){

                $('#me2d').css({top: '0px', position:'relative'});
                $('.submarine').css({top: '-3350px', position:'relative'});
              //  $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'0px',backgroundColor: 'rgba(0,0,0,0)'});
                window.scrollTo( 0,0);   
                $('#me').removeClass('me');
                $('#bubbles').css({display:'none'});
                
            }
            if (position > 8710){
                $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'20px',backgroundColor: 'rgba(0,0,0,0)'});   
            }
        else if(position <= 8690 && position>=3499){
            $('.submarine').css({top: '-2250px', position:'relative'});
            //$('#me2d').slideUp(300);
            $('#me2d').css({top: '0px', position:'relative'});
            $('#me').addClass('me');
            $('#bubbles').css({display:'block'});
        }
             
            // if (position >=0 && position < 3799){
            //     $('#me').css({top: '305px', position:'fixed'})
            //    $('html,body').animate({
            //     scrollTop: $(".scene2").offset().top},
            //     'slow');
           
            //     }
                //$('#me').css({top: '305px', position:'fixed'});
                if (position > 900) {
                   // $('.greet').css('');
                     $('.greet').slideDown(500);


                   // alert('hello');
                 } else {
                      $('.greet').fadeOut(300);
                 }
                 if (position > 2200) {
                    $('.educ').slideDown(500);
                  // alert('hello');
                } else {
                     $('.educ').slideUp(500);
                }

                if (position > 3490) {
                    $('#cloud1').css({position:'absolute'});
                  // alert('hello');
                } 
                if (position > 3490) {
                    $('#cloud2').css({position:'absolute'});
                  // alert('hello');
                } 

                if (position < 3440) {
                  
               
                } 
             

                 if (position >3490) {
                    $('.submarine').fadeIn(200);
                    $('.submarine').css({zIndex:'99'});
                  $('.submarine').animate({left:'20px'},2800);
                  // alert('hello');

                } 
           if(position >= 3600) {
              
                $('.submarine').animate({left:'4500px'},2800);
                // $('.submarine').fadeOut(300);
                 }

        
       })
       
       
    };
});

$(document).ready(function() {
    $('#box').hScroll(60); // You can pass (optionally) scrolling amount
});


// $(document).scroll(function () {
//     var y = $(this).scrollLeft();
//     if (y > 900) {
//        // $('.greet').slideDown(300);
//        alert('hello');
//     } else {
//         // $('.bottomMenu').slideUp(300);
//     }

// });




//----for mobile view







// var clicked = false, clickX;
// $(document).on({
//     'mousemove': function(e) {
//         clicked && updateScrollPos(e);
 
    
//     },
//     'mousedown': function(e) {
//         clicked = true;
//         clickX = e.pageX;
        
//     },
//     'mouseup': function() {
//         clicked = false;
//         $('html').css('cursor', 'auto');
//     }
// });

// var updateScrollPos = function(e) {
//     $('html').css('cursor', 'row-resize');
//     $('#box').scrollLeft($('#box').scrollLeft() + (clickX - e.pageX));
//     //$('#box').hscroll(60);
   
//      jQuery(function ($) {
//     $.fn.hscroll = function (amount) {
//         amount = amount || 30;

//    // $('#box').bind("DOMMouseScroll touchmove", function (event) {
//         var oEvent = e.originalEvent, 
//             direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
//             position = $('#box').scrollLeft();
//             positionX =  $('#box').scrollLeft();
       
//             console.log(position);
       
//    // })


//    const container = document.querySelector('#box')
//            var me_ofset =  document.getElementById('#box');
//            x = container.scrollLeft = '0' ;
//            console.log(x);
//           position += direction > 0 ? -amount : amount;
//            $(this).scrollLeft(position);
//            e.preventDefault();
        
//            if(position <= x ){
//             $("#me2d").attr("src","images/go_left1.png");
        
//             if(position >x ){
//                 $("#me2d").attr("src","images/me_wal2.png");
//             }
//            }
//            if(position >x ){
//             $("#me2d").attr("src","images/me_walk.png");
        
//            }

//            var _scrollTimeout = null;
//            clearTimeout(_scrollTimeout);
//            _scrollTimeout = setTimeout(function() {
//                console.log("Haven't scrolled in 1s");
//                $("#me2d").attr("src","images/me_walk2.png");

//            }, 200);
      
    
//            var _scrollTimeout = null;
//            clearTimeout(_scrollTimeout);
//            _scrollTimeout = setTimeout(function() {
//                console.log("Haven't scrolled in 1s");
//                $("#me2d").attr("src","images/me_walk3.png");

//            }, 250);

//            var _scrollTimeout = null;
//            clearTimeout(_scrollTimeout);
//            _scrollTimeout = setTimeout(function() {
//                console.log("Haven't scrolled in 1s");
//                $("#me2d").attr("src","images/me.png");

//            }, 350);

//            if(position >3475){
//             window.scrollTo( 0,1000);        
//                 //  $('html,body').animate({
//                 //         scrollTop: $("#me").offset().top},
//                 //         'slow');

//                 $('#me').css({border:'3px solid #eee',borderRadius:'300px',padding:'20px',backgroundColor: 'rgba(90,42,205,0.5)'});
//                 $('.submarine').css({top: '-2250px', position:'relative'});
//                 $('#bubbles').css({display:'block'});
              
//                 $('html_level').css({display: 'flex'});
//                 $('.html_level').animate({left:'470px'},2800);
//                 $('.css_level').animate({left:'475px'},3500);
//                 $('.js_level').animate({left:'450px'},4200);
//                 $('.php_level').animate({left:'450px'},4900);
//            }
//           if(position<3499 && position <=0){
            
//     //         $('html,body').animate({
//     //   scrollTop: 0},
//     //   'slow');

//      }
//         //  $('html,body').animate({
//         //     scrollTop: $("#me").offset().top},
//         //     'slow');
     
      
//         if (position > 3499) {
//             $('#me').addClass('me');
//             $('#me').slideDown(1000);

//              $('#me2d').css({top: '0px', position:'relative'});

       
//         } else {
    
//             //$('#me2d').slideUp(300);
//             $('#me').removeClass('me');
//             $('#me2d').css({top: '0px', position:'relative'});
//             $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'0px',backgroundColor: 'rgba(0,0,0,0)'});
//             $('#bubbles').css({display:'none'});
//         }

//         if (position < 3499){
            
//             $('#me').css({top: '340px', position:'fixed'})
//             //    $('html,body').animate({
//             //     scrollTop: $("#me").offset().top},
//             //     'slow');
//             $('.submarine').css({top: '-3350px', position:'relative'});
//             $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'0px',backgroundColor: 'rgba(0,0,0,0)'});
//             window.scrollTo( 0,0);   

//         }
      

//         if (position > 8690){

//             $('#me2d').css({top: '0px', position:'relative'});
//             $('.submarine').css({top: '-3350px', position:'relative'});
//           //  $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'0px',backgroundColor: 'rgba(0,0,0,0)'});
//             window.scrollTo( 0,0);   
//             $('#me').removeClass('me');
//             $('#bubbles').css({display:'none'});
            
//         }
//         if (position > 8710){
//             $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'20px',backgroundColor: 'rgba(0,0,0,0)'});   
//         }
//     else if(position <= 8690 && position>=3499){
//         $('.submarine').css({top: '-2250px', position:'relative'});
//         //$('#me2d').slideUp(300);
//         $('#me2d').css({top: '0px', position:'relative'});
//         $('#me').addClass('me');
//         $('#bubbles').css({display:'block'});
//     }
         
//         if (position >=0 && position < 3799){
//             $('#me').css({top: '340px', position:'fixed'})
//         //    $('html,body').animate({
//         //     scrollTop: $(".scene2").offset().top},
//         //     'slow');
       
//             }
//             //$('#me').css({top: '305px', position:'fixed'});
//             if (position > 900) {
//                  $('.greet').fadeIn(300);
//                // alert('hello');
//              } else {
//                   $('.greet').fadeOut(300);
//              }
//              if (position > 2200) {
//                 $('.educ').slideDown(500);
//               // alert('hello');
//             } else {
//                  $('.educ').slideUp(500);
//             }

//             if (position > 2200) {
//                 $('#cloud1').css({position:'absolute'});
//               // alert('hello');
//             } 
//             if (position > 2200) {
//                 $('#cloud2').css({position:'absolute'});
//               // alert('hello');
//             } 

//              if (position >3490) {
//                 $('.submarine').fadeIn(200);
//                 $('.submarine').css({zIndex:'99'});
//               $('.submarine').animate({left:'20px'},2800);
//               // alert('hello');

//             } 
//        if(position >= 3600) {
          
//             $('.submarine').animate({left:'4500px'},2800);
//             // $('.submarine').fadeOut(300);
//              }

    
//   //})
//             }

//         })

//    $('#box').hscroll(30);

// }


