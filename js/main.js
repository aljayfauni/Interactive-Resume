var lastScrollTop = 0,isFirstTimeSea
in_the_sea = (isFirstTimeSand = isFirstTimeFinal = isFirstTimeResume = isFirstTimeSocial = !0),
isFirstTimebackSea = (isFirstTimebackSand = !1);
 window.addEventListener("load", function (e) {
    setTimeout(function () {
        $(loader).animate({ opacity: 0 }, 1e3, "linear");
      
    }, 1e3),
        setTimeout(function () {
            $('#loader').css({ display: "none" });
        
        }, 2e3),
        setTimeout(function () {
            $(body).css({ "overflow-y": "scroll" });
        }, 2e3);
}),
    0
var loader = document.querySelector("#loader"),
    container = document.querySelector("#container"),
    part1 = document.querySelector("#part1"),
    part2 = document.querySelector("#part2"),
    part3 = document.querySelector("#part3"),
    me = document.querySelector(".me");
    cloud1 = document.querySelector("#cloud1"),
    cloud2 = document.querySelector("#cloud2"),
    cloud3 = document.querySelector("#cloud3"),
    cloud4 = document.querySelector("#cloud4"),
    ground = document.querySelector("#ground"),
    ground2 = document.querySelector("#ground2"),
    house = document.querySelector("#house"),
    start = document.querySelector('#start'),
    about = document.querySelector('.about-wrapper'),
    about = document.querySelector('.about-wrapper'),
    school = document.querySelector("#school"),
    education = document.querySelector("#education"),
    skill_post = document.querySelector("#skills"),
    bubble = document.querySelector('#bubble'),
    groundSea = document.querySelector("#ground-sea"),
    grass1 = document.querySelector("#grass1"),
    ground3 = document.querySelector("#ground3"),
    positionEndGround1 = ground.clientWidth - $(window).width() / 2 + me.clientWidth / 4,
    positionEndGround2 = blue.clientWidth - $(window).width() / 2 - me.clientWidth / 4,
    negativepositionEndGround1 = -Math.abs(positionEndGround1),
    negativepositionEndGround2 = -Math.abs(positionEndGround2),

    
   
    // --- start ---set position of elements and images
    $(start).css({bottom:370  }),
    $(loader).css({left: 0}),
    $(start).css({left: 300}),
        $(house).css({ left: $(start).width() / 1 - start.clientWidth / 1 +700}),
   // $(about).css({ left: $(house).width() / 1 - house.clientWidth / 1}),
 
   $(school).css({ left: 1600}),
    $(education).css({ bottom:200,left: 1900}),
    $(skill_post).css({ left: 2800}),
   // $(start).css({ left: $(window).height() / 1 - house.clientHeight / 1}),
  //  $(about).css({ left: $(window).width() /1 - about.clientWidth *2}),
    $(loader).css({ left: $(window).height() / 1 - loader.clientHeight / 1}),
  
 
   
    $(cloud1).css({ top: 25 }),
    $(cloud1).css({ left: 100 }),
    $(cloud2).css({ top: 70 }),
    $(cloud2).css({ left: 800 }),
    $(cloud3).css({ top: 120 }),
    $(cloud3).css({ left: 1700 }),

    $(cloud4).css({ top: 70 }),
    $(cloud4).css({ left: 2780 }),

    $(cloud5).css({ top: 120 }),
    $(cloud5).css({ left: 3480 }),
 

    $(me).css({ "z-index": 9998 });
    $(me).css({ "bottom": '103px' });
   

    body = document.getElementsByTagName("body")[0];
    document_height = $(document).height() - $(window).height(),
    height_device = $(window).height(),
    $(ground).css({ height: height_device - 50 }),
 //   $(about).css({ bottom: 103 - $(house).clientHeight }),
        $(ground).css({ bottom: 103 - ground.clientHeight }),
        $(grass1).css({ bottom: 103 - $(grass1).clientHeight }),
        $(me).css({ left: -me.clientWidth / 2 + $(window).width() / 2 }),
        $(ground2).css({ bottom: 40 }),
        $(blue).css({ height:700 -50 }),
        $(blue).css({ bottom: -600}),
        $(ground3).css({ height: ground.clientHeight }),
        $(ground3).css({ left: ground.clientWidth + blue.clientWidth }),
        $(groundSea).css({ bottom: -blue.clientHeight }),
        window_width = $(window).width() - (part1.clientHeight + part2.clientHeight + part3.clientHeight ),
        window_width_sea = $(window).width() - part1.clientHeight;
        $(me).css({ border:'0',borderRadius:0,backgroundColor:'rgba(0,0,0,0,0)'});

    function dive_in_the_sea() {
        $(ground).animate({ bottom: -25 }, 600, "linear"),
        $(ground).css({ height: 750 - 50 }),
        $(ground3).animate({ bottom: -25 }, 600, "linear"),
        $(ground3).css({ height: 750 - 50 }),

        $(blue).animate({ bottom: -25 }, 600, "linear"),
        $(blue).css({ height: 700 - 50 }),
        $(ground2).animate({ bottom: ground.clientHeight - 76 }, 600, "linear"),
        $(me).animate({ bottom: 0 }, 600, "linear"),
        $(me).css({ border:'3px solid white',borderRadius:50,backgroundColor:'rgba(0,0,0,0.5)'});
        $(bubble).css({display:'block'});
        //programming level animate here!
        $('.html_level').animate({left:'490px'},2800);
        $('.css_level').animate({left:'500px'},3500);
        $('.js_level').animate({left:'500px'},4200);
        $('.php_level').animate({left:'490px'},4200);
        $('.java_level').animate({left:'490px'},4200);
        $('.csharp_level').animate({left:'490px'},4200);
        $('.python_level').animate({left:'490px'},4200);
        
        $('.laravel_level').animate({left:'2050px'},2800);
        $('.node_level').animate({left:'2180px'},3500);
        $('.ejs_level').animate({left:'2310px'},4200);
        $('.react_level').animate({left:'2450px'},4200);
        $('.vue_level').animate({left:'2580px'},4200);
            $(blue).animate({ bottom: -25 }, 600, "linear"),
            $(blue).css({ height: 700 - 50 }),
            $(ground2).animate({ bottom: ground.clientHeight - 76 }, 600, "linear"),
            $(me).animate({ bottom: 0 }, 600, "linear"),
            $(me).css({ border:'3px solid white',borderRadius:50,backgroundColor:'rgba(0,0,0,0.5)'});
            $(bubble).css({display:'block'});
            //programming level animate here!
            $('.html_level').animate({left:'490px'},2800);
            $('.css_level').animate({left:'500px'},3500);
            $('.js_level').animate({left:'500px'},4200);
            $('.php_level').animate({left:'490px'},4200);
            $('.java_level').animate({left:'490px'},4200);
            $('.csharp_level').animate({left:'490px'},4200);
            $('.python_level').animate({left:'490px'},4200);
           
            $('.laravel_level').animate({left:'2050px'},2800);
            $('.node_level').animate({left:'2180px'},3500);
            $('.ejs_level').animate({left:'2310px'},4200);
            $('.react_level').animate({left:'2450px'},4200);
            $('.vue_level').animate({left:'2580px'},4200);


            $('.mysql_level').animate({left:'3230px'},2800);
            $('.mssql_level').animate({left:'3360px'},3500);
            $('.postgre_level').animate({left:'3520px'},4200);
            $('.firebase_level').animate({left:'3720px'},4200);
            $('.mongo_level').animate({left:'3880px'},4200);
           
    }
    function go_in_part3() {//part3 ground 3
    //    function go_in_part3() {//part3 ground 3
        $(me).css({ border:'0',borderRadius:0,backgroundColor:''});
        $(bubble).css({display:'none'});
        $(blue).css({ height: ground.clientHeight - 50 }),
        $(ground).animate({ bottom: 103 }, 600, "linear"),
        $(ground).css({ height: height_device - 50 }),
        //   $(about).css({ bottom: 103 - $(house).clientHeight }),
       // $(ground2).css({ bottom: 53 }),
        $(ground3).animate({ bottom: 103 - ground.clientHeight }, 100, "linear"),
        $(ground3).css({ height: height_device - 50 }),


        $(me).animate({ bottom: 103 }, 100, "linear")
        $('.html_level').animate({left:'4100px'},2800);
        $('.css_level').animate({left:'4300px'},3500);
        $('.js_level').animate({left:'4500px'},4200);
        $('.php_level').animate({left:'4690px'},4200);
        $('.java_level').animate({left:'4890px'},4200);
        $('.csharp_level').animate({left:'4990px'},4200);
        $('.python_level').animate({left:'4990px'},4200);

        $('.laravel_level').animate({left:'4050px'},2800);
        $('.node_level').animate({left:'4180px'},3500);
        $('.ejs_level').animate({left:'4310px'},4200);
        $('.react_level').animate({left:'4450px'},4200);
        $('.vue_level').animate({left:'4580px'},4200);
   

        $('.mysql_level').animate({left:'3230px'},2800);
        $('.mssql_level').animate({left:'3360px'},3500);
        $('.postgre_level').animate({left:'3520px'},4200);
        $('.firebase_level').animate({left:'3720px'},4200);
        $('.mongo_level').animate({left:'3880px'},4200);
   ;
    }
    function in_part1() { //part 1 back to part 1 or ground 1
      //  function in_part1() { //part 1 back to part 1 or ground 1
       // $(ground2).css({ bottom: 103 }),
    $(bubble).css({display:'none'});
    $(me).css({ border:'0',borderRadius:0,backgroundColor:''});
    $(blue).css({ height: ground.clientHeight - 50 }),
    $(ground).animate({ bottom: 103 - ground.clientHeight }, 100, "linear"),
    $(blue).animate({ bottom: 103 - ground.clientHeight }, 100, "linear"),
    $(ground2).animate({ bottom: 53 }, 100, "linear"),
    $(me).animate({ bottom: 103 }, 100, "linear");
    $('.html_level').animate({left:'4100px'},2800);
    $('.css_level').animate({left:'4300px'},3500);
    $('.js_level').animate({left:'4500px'},4200);
    $('.php_level').animate({left:'4690px'},4200);
    $('.java_level').animate({left:'4890px'},4200);
    $('.csharp_level').animate({left:'4990px'},4200);
    $('.python_level').animate({left:'4990px'},4200);
    $('.laravel_level').animate({left:'4050px'},2800);
    $('.node_level').animate({left:'4180px'},3500);
    $('.ejs_level').animate({left:'4310px'},4200);
    $('.react_level').animate({left:'4450px'},4200);
    $('.vue_level').animate({left:'4580px'},4200);
       $(bubble).css({display:'none'});
       $(me).css({ border:'0',borderRadius:0,backgroundColor:''});
        $(blue).css({ height: ground.clientHeight - 50 }),
        $(ground).animate({ bottom: 103 - ground.clientHeight }, 100, "linear"),
            $(blue).animate({ bottom: 103 - ground.clientHeight }, 100, "linear"),
            $(ground2).animate({ bottom: 53 }, 100, "linear"),
            $(me).animate({ bottom: 103 }, 100, "linear");
            $('.html_level').animate({left:'4100px'},2800);
            $('.css_level').animate({left:'4300px'},3500);
            $('.js_level').animate({left:'4500px'},4200);
            $('.php_level').animate({left:'4690px'},4200);
            $('.java_level').animate({left:'4890px'},4200);
            $('.csharp_level').animate({left:'4990px'},4200);
            $('.python_level').animate({left:'4990px'},4200);
          
            $('.laravel_level').animate({left:'4050px'},2800);
            $('.node_level').animate({left:'4180px'},3500);
            $('.ejs_level').animate({left:'4310px'},4200);
            $('.react_level').animate({left:'4450px'},4200);
            $('.vue_level').animate({left:'4580px'},4200);
           
     
    }
//when scroll
        window.addEventListener(
            "scroll",
            function (e) {
                var t = window.pageYOffset || document.documentElement.scrollTop,
                    i = $(window).scrollTop(),
                    o = window_width * (i / document_height),
                    l = window_width * (i / document_height) * 0.4,
                    n = window_width * (i / document_height) * 0.5,
                    s = window_width * (i / document_height) * 0.2;
                    
                   // $(ground2).css({ left: scene1.clientHeight + o }),
                    // $(house).css({ left: $(window).width() / 2 - house.clientWidth / 2 + o }),

                    $(start).css({ left: 300 + o }),
                    $(house).css({ left: $(start).position().left + start.clientWidth + 400 }),
                   // $(about).css({ left: $(window).width() / 1 - about.clientWidth / 1 + o }),
                    $(about).css({ left: $(house).position().left + house.clientWidth + 300 }),
                    $(school).css({ left: $(about).position().left + about.clientWidth + 600 }),
                    $(education).css({ left: $(school).position().left + school.clientWidth + 100 }),
                    $(skill_post).css({ left: $(education).position().left + education.clientWidth + 1700 }),
                    //$(about).css({ left: 1800  }),
                    $(cloud1).css({ left: 100 + s }),
                    $(cloud2).css({ left: 800 + s }),
                    $(cloud3).css({ left: 1700 + s }),
                    $(cloud4).css({ left: 2750 + s }),
                    $(cloud5).css({ left: 3450 + s }),
                    console.log(i);

                    if(i > 1000){
                        
                   
                        // $('.greet-about').css({display:'block'});
                    $('.greet-about').slideDown(800);
                       
                    }
                    if(i < 1000){
                        
                   
                        // $('.greet-about').css({display:'block'});
                        $('.greet-about').slideUp(800);
                       
                    }
                    if(i > 3300){
                        
                   
                        // $('.greet-about').css({display:'block'});
                        $('.educ-greet').slideDown(800);
                       
                    }
                    if(i < 3300){
                        
                   
                        // $('.greet-about').css({display:'block'});
                        $('.educ-greet').slideUp(800);
                       
                    }

                    if(i >= 7000){
                        $(cloud3).hide();
                        $(cloud4).hide();
                       
                    }
                    if(i >= 7300){
                      
                        $('body').css({background:'#59b5f3'})
                    }
                    if(i <= 7220){
                        $(cloud3).show();
                        $(cloud4).show();
                        $('body').css({background:'#59b5f3'})
                    }
                    if(i >= 12300){
                        $(cloud3).show();
                        $(cloud4).show();
                       


                       
                    }
                    if(i >= 11800){
                        $('.exp1').slideDown(600);
                       


                       
                    }
                    if(i >= 13100){
                        $('.exp2').slideDown(600);
                       


                       
                    }
                    if(i >= 15280){
                        $('.exp3').slideDown(600);
                        $('.walk-right').css('background-image', 'url("images/almoto.png")');
                        $('.me').css('background-size','cover');
                        $('.walk-right').css('background-size','cover');
                        $('.right').css('width', '290px');
                        $('.walk-right')[0].style.setProperty('width', '200px', 'important');

                       
                    }
                 if(i <= 15280){
                        $('.exp3').slideDown(600);
                        $('.walk-right').css('background-image', 'url("images/me.png")','important');
                        $('.right').css('width', '100px');
                        $('.walk-right').css('width', '100px');
                       
                    

                       
                    }
                   
               
                    if(i < 11800){
                        $('.exp1').slideUp(600);
                        $('.exp2').slideUp(600);
                        $('.exp3').slideUp(600);
                       


                       
                    }
                   

                $(ground).css({ left: o }),
                $(ground2).css({ left: part1.clientHeight + o }),
                $(ground3).css({ left: ground.clientWidth + blue.clientWidth + o }),
                $(ground).position().left < negativepositionEndGround1 &&
                    (this.in_the_sea && (this.dive_in_the_sea(), (this.in_the_sea = !1), (this.isFirstTimebackSea = !0))),
                    $(blue).position().left < negativepositionEndGround2 && this.isFirstTimeSand && (this.in_part1(), this.go_in_part3(), (this.isFirstTimeSand = !1), (this.isFirstTimebackSand = !0)),
                    $(ground).position().left > negativepositionEndGround1 && this.isFirstTimebackSea && (this.in_part1(), (this.isFirstTimebackSea = !1), (this.in_the_sea = !0)),
                   $(blue).position().left > negativepositionEndGround2 && this.isFirstTimebackSand && (this.dive_in_the_sea(), (this.isFirstTimebackSand = !1), (this.isFirstTimeSand = !0)),
                    t > lastScrollTop
                        ? (function (e) {
                              e(function () {
                                  e(window).scroll(function () {
                                      me.classList.remove("walk-left"),
                                          me.classList.add("walk-right"),
                                          clearTimeout(e.data(this, "scrollCheck")),
                                          e.data(
                                              this,
                                              "scrollCheck",
                                              setTimeout(function () {
                                                  me.classList.remove("walk-right"), me.classList.add("right");
                                              }, 100)
                                          );
                                  });
                              });
                          })
                          
                          (jQuery)
                        : (function (e) {
                              e(function () {
                                  e(window).scroll(function () {
                                      me.classList.remove("walk-right"),
                                          me.classList.add("walk-left"),
                                          clearTimeout(e.data(this, "scrollCheck")),
                                          e.data(
                                              this,
                                              "scrollCheck",
                                              setTimeout(function () {
                                                  me.classList.remove("walk-left"), me.classList.add("left");
                                              }, 100)
                                          );
                                  });
                              });
                          })(jQuery),
                    (lastScrollTop = t <= 0 ? 0 : t);
            },
            !1
        );
