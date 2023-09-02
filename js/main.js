//$ -- object represent Jquery have all methods in jQuery
//$ === Jquery

//selector(as css).method

//effects........built in effect
//$(".test").hide(3000);
//$(".test").show(3000);
//$(".test").toggle(3000);
//$(".test").slideDown(1000);
//$(".test").slideUp(1000);
//$(".test").slideToggle(1000);
//$(".test").fadeIn(1000);
//$(".test").fadeOut(1000);
//$(".test").fadeToggle(1000);
//$(".test").fadeTo(1000 , 0.5);

//animate not working with non-numeric property
//stop() -- work on animate stop(stopAll = false , goToEnd = false);

//setter and getter
/*
    attr("src") as getter
    attr("src" , "x.jpg") as setter

    css("color") as getter
    css("color" , "red"); as setter

    $("body").css({
    "backgroundColor" : "tomato" ,
    "color" : "white"
})

    addClass("");
    removeClass("");
    toggleClass("");
    hasClass("");

    $("div").html() as getter
    $("div").html("<p>ay7aga<p>") as setter

    $("div").text() as getter
    $("div").text("ay7aga") as setter

    $("input").val() as getter
    $("input").val("mohamed");

    $("h1").append("<span>Jquery</span>")
    $("h1").prepend("<span>Jquery</span>")

    $("h1").after("<span>Jquery</span>");
    $("h1").before("<span>Jquery</span>");


    $(".test").Width() get width without padding or border
    $(".test").innerWidth() get width without border only
    $(".test").outerWidth() get all width 
    $(".test").outerWidth(true) get all width with margin also

*/ 

/*
    traversing 

    $("#demo").next().css("border-color" , "lightgreen");
    $("#demo").nextAll().css("border-color" , "lightgreen");
    $("#demo").nextUntil(".test").css("border-color" , "lightgreen");

    $("#demo").prev().css("border-color" , "lightgreen");
    $("#demo").prevAll().css("border-color" , "lightgreen");
    $("#demo").prevUntil(".test").css("border-color" , "lightgreen");
    $("#demo").siblings().css("border-color" , "lightgreen");
    $("#demo").siblings("span").css("border-color" , "lightgreen");

    $("#demo").parent().css("border-color" , "lightgreen");
    
    $("#demo").parents().css("border-color" , "lightgreen");
    $("#demo").parents("h1").css("border-color" , "lightgreen");
    $("#demo").parentsUntil("div").css("border-color" , "lightgreen");

    $("section").children().css("border-color" , "lightgreen"); //all direct children
    $("section").children("div").css("border-color" , "lightgreen"); //only div children

    $("section").find("span").css("border-color" , "lightgreen"); //any span children
    $("section").find("*").css("border-color" , "lightgreen"); //any children

    $("span").eq(0).css("border-color" , "lightgreen");
    $("span").not(".test").css("border-color" , "lightgreen");

*/

/*
    scroll 

    --scrollTop()
    --offset()
*/


//start header
$("#mobile-more-icon").on("click" , function() {
    $("#mobile-more-menu-content").toggleClass("show");
});

$("#side-nav-btn").on("click" , function() {
    $(".custom-collapse").toggleClass("show");
});

$('.home-slider').slick({
    autoplay : false,
    speed : 800,
    lazyload : 'progressive',
    arrows : true,
    dots : false,
    prevArrow : '<div class="slick-nav prev-arrow"><i class="fa fa-chevron-right"></i></div>',
    nextArrow : '<div class="slick-nav next-arrow"><i class="fa fa-chevron-left"></i></div>',
    responsive : [
        {
            breakpoint : 991,
            settings : {
                dots : true,
                arrows : false,
            }
        }
    ]
}).slickAnimation();


$(".slick-nav").on("click", function (e){
    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')){
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }
});

//favorite slider responsive
$('.my-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
    prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
    responsive: [
    {
        breakpoint: 1200,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        }
    },
    {
        breakpoint: 767,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});

//start trending slider 
$('.top-ten-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: false ,
    responsive: [
        {
            breakpoint : 767,
            settings : {
                asNavFor : ".top-ten-slider-nav",
                arrows : true ,
                nextArrow : '<button class="special-arrow slick-arrow slick-next"><i class="fa fa-angle-right"></i></button>',
                prevArrow : '<button class="special-arrow slick-arrow slick-prev"><i class="fa fa-angle-left"></i></button>',
            }
        }
    ]
});
$('.top-ten-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".top-ten-slider",
    dots: false,
    vertical: true,
    verticalSwiping : true,
    nextArrow: '<button class="special-arrow slick-arrow slick-next"><i class="fa-solid fa-chevron-up"></i></button>',
    prevArrow : '<button class="special-arrow slick-arrow slick-prev"><i class="fa-solid fa-chevron-down"></i></button>',
    responsive: [
        {
            breakpoint: 1200 ,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600 ,
            settings: {
                asNavFor: false
            }
        },
    ]
});

let slideIndex = 0;
//start centring
$('.centering-slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.centering-slider-nav'
});
$('.centering-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".centering-slider-container",
    dots: false,
            nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
    infinite : true,
    centerMode : true,
    centerPadding : 0,
    focusOnSelect : true,
    responsive : [
        {
            breakpoint : 1024,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 1,
            }
        },
        {
            breakpoint : 600,
            settings : {
                slidesToShow : 1,
                slidesToScroll : 1,
            }
        }
    ]
});

$(".centering-slider-container .slide-tabs").each(function(index , element) {
    $(element).addClass(`tabs-${index}`);
    $(element.children).addClass(`tab-${index}`);
})

$(".centering-slider-container .slide-tab a").each(function(index , element){
    $(element).attr("data-tab" , `trending-data${index + 1}`);
});

$(".centering-slider-container .tab").each(function(index , element){
    $(element).attr("id" , `trending-data${index + 1}`);
});

//handle  active tab
$(".centering-slider-container .slide-tab a").on("click" , function(e) {

    let slideCurrentActiveIndex = $(".centering-slider-container .slick-current.slick-active").attr("data-slick-index");

    //handle class active
    $(`.tab-${slideCurrentActiveIndex} a`).removeClass("active");

    $(e.target).addClass("active");

    $(".centering-slider-container .slick-current.slick-active .tab").fadeOut(500); //async

    $(".centering-slider-container .slick-current.slick-active .tab").removeClass("active");

    let trendingDataId = `#${ $(e.target).attr("data-tab")}`; //trending-data2
 
    let activeTrendingData = $(trendingDataId);

    //add class active to activeTrendingData;
    activeTrendingData.addClass("active");

    activeTrendingData.fadeIn(500);
})

//episode carrousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})
