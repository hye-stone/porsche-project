$(function () {
  $(".navLeft>li, .navRight>li").click(function () {
    $(this).children(".sub").stop().slideToggle(500);
    $(this).siblings("li").children(".sub").stop().slideUp(500);
  });
  $(".hamBtn").click(function () {
    $(".mNav").stop().animate(
      {
        left: 0,
      },
      700
    );
  });
  $(".closeBtn").click(function () {
    $(".mNav").animate(
      {
        left: "-100%",
      },
      700
    );
  });

  // video banner
  $(".circleBtn>li").click(function () {
    var sNum = $(this).index();
    $(".banner")
      .stop()
      .animate(
        {
          "margin-top": -sNum * 51 + "vw",
        },
        1500
      );
      $(this).addClass("on").siblings().removeClass("on");
    });
    // ===========section1 models========
    $(".carShow>li:eq(0)").css("left", 0);
    var carNum = 0;
    
    $(".carBtn>li").click(function () {
      bBanner();
      carNum= $(this).index();
      carBanner();
      $(this).addClass("on").siblings().removeClass("on");
  });

  function bBanner(){
    $(".carShow>li")
      .eq(carNum)
      .stop()
      .animate(
        {
          left: "100%",
        },
        function () {
          $(".show").siblings().css("left", "-100%");
        }
      );
  }
  function carBanner() {
    $(".carShow>li")
      .eq(carNum)
      .stop()
      .animate(
        {
          left: 0 + "%",
        },
        1000
      );
    $(".carShow>li").eq(carNum).addClass("show").siblings().removeClass("show");
    // $(this).addClass("on").siblings().removeClass("on");
  }
  //==========section1 mobile=============

  $(".prev").click(function () {
    bBanner();
    if (carNum <5) {
      carNum++;
    }
    // console.log(carNum);
    carBanner();
  });

  $(".next").click(function () {
    bBanner();
    if (carNum > 0) {
      carNum--;
    }
    carBanner();
  });

  //===========section2=============
  $(".service .discoverBtn").hover(
    function () {
      $(".service>.serviceImg>img").css({
        transform: "scale(1.1)",
        transitionDuration: "3s",
      });
    },
    function () {
      $(".service>.serviceImg>img").css({
        transform: "scale(1)",
        transitionDuration: "3s",
      });
    }
  );

  $(".compare .discoverBtn").hover(
    function () {
      $(".compare>.compareImg>img").css({
        transform: "scale(1.1)",
        transitionDuration: "3s",
      });
    },
    function () {
      $(".compare>.compareImg>img").css({
        transform: "scale(1)",
        transitionDuration: "3s",
      });
    }
  );
  //==============insta==============

  var wWidth = $(window).outerWidth();
  var showBanner = 0;
  var showCount = 4;
  var liWidth = $(".imgWrap>li").outerWidth();
  var liCount = $(".imgWrap>li").length;
  var objFirst = $(".imgWrap>li:lt(3)").clone();
  var objLast = $(".imgWrap>li:gt(4)").clone();

  $(".imgWrap").prepend(objLast);
  $(".imgWrap").append(objFirst);
  var count = $(".imgWrap>li").length;  
  
  function resizeFunction() {
    wWidth = $(window).outerWidth();
    if (wWidth < 767) {
      showCount = 2;
    } else {
      showCount = 4;
    }   
    $(".imgWrap").width((100 / showCount) * count + "%");
    $(".imgWrap>li").outerWidth(100 / count + "%");
    liWidth = $(".imgWrap>li").outerWidth()
    showBanner=0;
    // console.log($(".imgWrap>li").outerWidth())
    $(".imgWrap").css("margin-left",-liWidth/2)

  }

  resizeFunction();


  $(window).resize(function () {
    resizeFunction();
  });
  //

  $(".imgWrap>li")
    .eq(showBanner + 2)
    .find(".textBox")
    .stop()
    .fadeIn(500);

  function moveBanner() {
    // console.log(showBanner);
    if (showBanner == liCount) {
      showBanner = 0;
      $(".imgWrap").css("margin-left", -liWidth / 2);
    }
    showBanner++;
    $(".imgWrap>li").find(".textBox").stop().fadeOut(500);
    $(".imgWrap")
      .stop()
      .animate(
        {
          marginLeft: -showBanner * liWidth - liWidth / 2,
        },
        1000,
        function () {
          if(wWidth>767){
          $(".imgWrap>li")
            .eq(showBanner + 2)
            .find(".textBox")
            .stop()
            .fadeIn(500);
          }
          else{
            $(".imgWrap>li")
            .eq(showBanner + 1)
            .find(".textBox")
            .stop()
            .fadeIn(500);
          }         
        }
      );

    if (showBanner == liCount) {
      $(".scrollBg>li:eq(0)")
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else {
      $(".scrollBg>li")
        .eq(showBanner)
        .addClass("active")
        .siblings()
        .removeClass("active").siblings;
    }
  }
  var timer = setInterval(moveBanner, 3000);
  $(".stayConnectedWrap").mouseenter(function () {
    clearInterval(timer);
  });
  $(".stayConnectedWrap").mouseleave(function () {
    timer = setInterval(moveBanner, 3000);
  });

  
});
