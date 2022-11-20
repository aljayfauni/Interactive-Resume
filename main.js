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
    1
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
        $(ground2).css({ bottom: 53 }),
        $(blue).css({ height: ground.clientHeight - 50 }),
        $(blue).css({ bottom: 0 - ground.clientHeight }),
       $(ground3).css({ height: ground.clientHeight }),
       $(ground3).css({ left: ground.clientWidth + blue.clientWidth }),
        $(groundSea).css({ bottom: -blue.clientHeight }),
        window_width = $(window).width() - (part1.clientHeight + part2.clientHeight + part3.clientHeight ),
        window_width_sea = $(window).width() - part1.clientHeight;


        function dive_in_the_sea() {
  
           
            $(ground).animate({ bottom: 0 }, 600, "linear"),
           $(blue).animate({ bottom: 0 }, 600, "linear"),
            $(ground2).animate({ bottom: ground.clientHeight - 50 }, 600, "linear"),
            $(me).animate({ bottom: 50 }, 600, "linear");
         //
        //    $(bubble).css({ display: "block" });
           
    }

    function AlzaSabbia() {
        $(ground3).animate({ bottom: 0 }, 600, "linear");
    }
    function AbbassaSabbia() {
        $(ground3).animate({ bottom: 103 - ground.clientHeight }, 100, "linear"),
        $(me).animate({ bottom: 103 }, 100, "linear")
   ;
    }
    function AbbassaMare() {
        $(ground).animate({ bottom: 103 - ground.clientHeight }, 100, "linear"),
            $(blue).animate({ bottom: 103 - ground.clientHeight }, 100, "linear"),
            $(ground2).animate({ bottom: 53 }, 100, "linear"),
            $(me).animate({ bottom: 103 }, 100, "linear");
            // $(mountainbrown).animate({ bottom: 103 }, 100, "linear"),
            // $(statue).animate({ bottom: 103 }, 100, "linear"),
            // $(nybuilding).animate({ bottom: 103 }, 100, "linear"),
            // $(empire).animate({ bottom: 103 }, 100, "linear"),
            // $(skills).animate({ bottom: 103 }, 100, "linear"),
            // $(skillsright).animate({ bottom: 103 }, 100, "linear"),
            // $(skilltext).animate({ bottom: skills.clientHeight + 24 }, 100, "linear"),
            // $(usabanner).animate({ bottom: house.clientHeight + 200 }, 100, "linear"),
            // $(goldengate).animate({ bottom: 103 }, 100, "linear"),
           
     
    }




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
                    console.log(i);
                    if(i >= 9700){
                        $(cloud3).hide();
                    }
                    if(i <= 9820){
                        $(cloud3).show();
                    }
              
                
                $(ground).css({ left: o }),
                $(ground2).css({ left: part1.clientHeight + o }),
                $(ground3).css({ left: ground.clientWidth + blue.clientWidth + o }),
                $(ground).position().left < negativepositionEndGround1 &&
                    (this.in_the_sea && (this.dive_in_the_sea(), (this.in_the_sea = !1), (this.isFirstTimebackSea = !0))),
                    $(blue).position().left < negativepositionEndGround2 && this.isFirstTimeSand && (this.AbbassaMare(), this.AbbassaSabbia(), (this.isFirstTimeSand = !1), (this.isFirstTimebackSand = !0)),
                    $(ground).position().left > negativepositionEndGround1 && this.isFirstTimebackSea && (this.AbbassaMare(), (this.isFirstTimebackSea = !1), (this.in_the_sea = !0)),
                   $(blue).position().left > negativepositionEndGround2 && this.isFirstTimebackSand && (this.dive_in_the_sea(), this.AlzaSabbia(), (this.isFirstTimebackSand = !1), (this.isFirstTimeSand = !0)),
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