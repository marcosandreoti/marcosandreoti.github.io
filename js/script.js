$(window).on("load",(function(){"use strict";
/* ===================================
        Loading Timeout
 ====================================== */$(".side-menu").removeClass("hidden"),setTimeout((function(){$(".loader-bg").fadeToggle()}),1e3),
// $('.navbar-collapse .navbar-nav .nav-link:nth-child(1)').addClass('active');
$(".navbar-collapse .navbar-nav .nav-link:nth-child(2)").removeClass("active")})),jQuery((function(e){"use strict";
/* ===================================
    WOW Animation
====================================== */
if(e(window).on("scroll",(function(){e(this).scrollTop()>260?// Set position from top to add class
e("header").addClass("header-appear"):e("header").removeClass("header-appear")})),
//scroll to appear
e(window).on("scroll",(function(){e(this).scrollTop()>500?e(".scroll-top-arrow").fadeIn("slow"):e(".scroll-top-arrow").fadeOut("slow")})),
//Click event to scroll to top
e(document).on("click",".scroll-top-arrow",(function(){return e("html, body").animate({scrollTop:0},800),!1})),e(".scroll").on("click",(function(s){s.preventDefault(),e("html,body").animate({scrollTop:e(this.hash).offset().top-80},800)})),
/* ===================================
    Side Menu
====================================== */
e("#sidemenu_toggle").length&&(e("#sidemenu_toggle").on("click",(function(){e(".pushwrap").toggleClass("active"),e(".side-menu").addClass("side-menu-active"),e("#close_side_menu").fadeIn(700)})),e("#close_side_menu").on("click",(function(){e(".side-menu").removeClass("side-menu-active"),e(this).fadeOut(200),e(".pushwrap").removeClass("active")})),e(".side-nav .navbar-nav .nav-link").on("click",(function(){e(".side-menu").removeClass("side-menu-active"),e("#close_side_menu").fadeOut(200),e(".pushwrap").removeClass("active")})),e("#btn_sideNavClose").on("click",(function(){e(".side-menu").removeClass("side-menu-active"),e("#close_side_menu").fadeOut(200),e(".pushwrap").removeClass("active")}))),e(window).width()>991){new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0});(new WOW).init()}
/* =====================================
        Circular Bars
====================================== */e(".circular-wrap").appear((function(){e(".circle").circleProgress({size:210,lineCap:"round",fill:{gradient:["#e52d27","#b31217"]}}),e("#circletwo").circleProgress({size:210,lineCap:"round",fill:{gradient:["#970000","#420b0b"]}})})),e(".circular-wrap.dark").appear((function(){e(".myskill").circleProgress({lineCap:"round",size:200})})),
/* ===================================
        Testimonial-Carousel
====================================== */
e(".testimonial-carousel").owlCarousel({loop:!0,margin:30,autoplay:!0,nav:!1,dots:!1,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})}));