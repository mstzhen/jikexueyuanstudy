

$(document).ready(function() {


    $(".notuseskina").mouseover(function() {
        $(this).css("color", "#398bfb");
    })
    $(".notuseskina").mouseout(function() {
        $(this).css("color", "#000");
    })
    $(".notuseskina").click(function() {
        $("body").css("background", "#fff");
        $("#gold").css("color", "#000");
        $("#news").css("color", "#000");
        $("#changeskin").css("color", "#000");
        $("#login").css("color", "#000");
        $("#set").css("color", "#000");
        $(".navmenu").css("color", "#000");
    })
    $("#changeskin").click(function() {

        $(".changecolor").fadeIn(2000);
    })
    $(".hidden").click(function() {

        $(".changecolor").fadeOut(2000);
    })
    $(".bjbackone").click(function() {

        $("body").css("background", "url(imgs/bj1.jpg)");
        $("#gold").css("color", "#fff");
        $("#news").css("color", "#fff");
        $("#changeskin").css("color", "#fff");
        $("#login").css("color", "#fff");
        $("#set").css("color", "#fff");
        $(".navmenu").css("color", "#fff");
    })
    $(".bjbacktwo").click(function() {

        $("body").css("background", "url(imgs/bj2.jpg)");
        $("#gold").css("color", "#fff");
        $("#news").css("color", "#fff");
        $("#changeskin").css("color", "#fff");
        $("#login").css("color", "#fff");
        $("#set").css("color", "#fff");
        $(".navmenu").css("color", "#fff");
    })
    var x = 1; //记住我的关注，购物，视频选项卡状态
    $("#firstimg").mouseover(function() {
        $(".showimg").css("display", "block");
    });
    $("#secondimg").mouseout(function() {
        $(".showimg").css("display", "none");
    });
    //更多产品一项显示或者隐藏
    $("#more").hover(function() {
        $("#rightfloat").show();
    }, function() {
        $("#rightfloat").hide();
    });
    $("#rightfloat").hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });

    //登录下拉菜单显示或者隐藏
    $("#login").hover(function() {
        $("#oneli").show();
    }, function() {
        $("#oneli").hide();
    });
    $("#oneli").hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });
    //设置下拉菜单显示或者隐藏
    $("#set").hover(function() {
        $("#twoli").show();
    }, function() {
        $("#twoli").hide();
    });
    $("#twoli").hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });

    // 滑动显示或者隐藏添加模式
    $(".myfocus").hover(function() {
        $(".mynavifight").css("display", "block");
    }, function() {
        $(".mynavifight").hide();
    });
    var a = 1;
    $(".myfocusfirstp").click(function() {

        if (a == 1) {
            $(".myfocusfirstp").css("background", "url(imgs/bottom.jpg) -4px 0px no-repeat")
            $(".mynavithirdp").show();
            a = 2;
        } else if (a == 2) {
            $(".myfocusfirstp").css("background", "url(imgs/left.jpg) -2px 0px no-repeat")
            $(".mynavithirdp").hide();
            a = 1;
        }
    })

    //当鼠标滑动百度搜索框置顶
    $(window).scroll(function() {
        var bot = 190; //距离顶部高度
        if ($(window).scrollTop() >= bot) {
            $(".gap").addClass("fixed");
            $(".fixedimg").css("display", "inline-block");
        }
        if ($(window).scrollTop() < bot) {
            $(".gap").removeClass("fixed");
            $(".fixedimg").css("display", "none");
        }

    });
    $(window).scroll(function() {
        var bot = 90; //距离顶部高度
        if ($(window).scrollTop() >= bot) {
            $(".gotop").css("visibility", "visible");
        }
        if ($(window).scrollTop() < bot) {
            $(".gotop").css("visibility", "hidden");
        }

    });
    //回到顶部函数
    $(".gotop").mouseover(function() {
        $(this).addClass("gotop1");
    });
    $(".gotop").mouseout(function() {
        $(this).removeClass("gotop1");
    });
    //我的关注菜单滑动属性
    $("#sectiontwomenu").mouseover(function() {
        if (x != 1) {
            $("#sectiontwomenu").css({
                "background": "#b3b6bb url(imgs/myfocusa.jpg) 15px 10px no-repeat",
                "color": "#fff",
                "cursor": "pointer"
            });
        }
    });
    $("#sectiontwomenu").mouseout(function() {
        if (x != 1) {
            $("#sectiontwomenu").css({
                "background": "#fff url(imgs/myfoucs.jpg) 14px 10px no-repeat",
                "color": "#000",
                "font-weight": "normal"
            });
        }
    });
    //推荐菜单滑动设置
    $("#suggest").mouseover(function() {
        if (x != 2) {
            $("#suggest").css({
                "background": "#b3b6bb",
                "color": "#fff",
                "cursor": "pointer"
            });
        }
    });
    $("#suggest").mouseout(function() {
        if (x != 2) {
            $("#suggest").css({
                "background": "#fff ",
                "color": "#000",
                "font-weight": "normal"
            });
        }
    });

    //导航菜单滑动设置
    $("#navi").mouseover(function() {
        if (x != 3) {
            $(this).css({
                "background": "#b3b6bb",
                "color": "#fff",
                "cursor": "pointer"
            });
        }
    });
    $("#navi").mouseout(function() {
        if (x != 3) {
            $(this).css({
                "background": "#fff ",
                "color": "#000",
                "font-weight": "normal"
            });
        }
    });
    //视频菜单滑动设置
    $("#video").mouseover(function() {
        if (x != 4) {
            $(this).css({
                "background": "#b3b6bb",
                "color": "#fff",
                "cursor": "pointer"
            });
        }
    });
    $("#video").mouseout(function() {
        if (x != 4) {
            $(this).css({
                "background": "#fff ",
                "color": "#000",
                "font-weight": "normal"
            });
        }
    });
    //购物滑动设置
    $("#buy").mouseover(function() {
        if (x != 5) {
            $(this).css({
                "background": "#b3b6bb",
                "color": "#fff",
                "cursor": "pointer"
            });
        }
    });
    $("#buy").mouseout(function() {
        if (x != 5) {
            $(this).css({
                "background": "#fff ",
                "color": "#000",
                "font-weight": "normal"
            });
        }
    });

    //推荐的点击设置
    $("#suggest").click(function() {
        $("#suggest").css({
            "background": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });
        $("#sectiontwomenu").css({
            "background": "#fff url(imgs/myfoucs.jpg) 14px 10px no-repeat",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#navi").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#video").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#buy").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $(".myfocus").css("display", "none");
        $(".suggest").css("display", "block");
        $(".video").css("display", "none");
        $(".navi").css("display", "none");
        $(".buy").css("display", "none");
        x = 2;
        console.log(x);
        localStorage.a = 2;
        console.log(localStorage.a);
    });
    //我的关注点击设置
    $("#sectiontwomenu").click(function() {
        $("#suggest").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#sectiontwomenu").css({
            "background": "#9a9da2 url(imgs/myfocusb.jpg) 15px 10px no-repeat",
            "font-weight": "bold",
            "color": "#fff"
        });
        $("#navi").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#video").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#buy").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });

        $(".myfocus").css("display", "block");
        $(".suggest").css("display", "none");
        $(".video").css("display", "none");
        $(".navi").css("display", "none");
        $(".buy").css("display", "none");
        x = 1;
        localStorage.a = 1;

    });
    $("#navi").click(function() {
        $("#suggest").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#sectiontwomenu").css({
            "background": "#fff url(imgs/myfoucs.jpg) 14px 10px no-repeat",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#navi").css({
            "background": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });
        $("#video").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#buy").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $(".myfocus").css("display", "none");
        $(".suggest").css("display", "none");
        $(".video").css("display", "none");
        $(".navi").css("display", "block");
        $(".buy").css("display", "none");
        x = 3;
        localStorage.a = 3;

    });

    $("#video").click(function() {
        $("#suggest").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#sectiontwomenu").css({
            "background": "#fff url(imgs/myfoucs.jpg) 14px 10px no-repeat",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#navi").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#video").css({
            "background": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });
        $("#buy").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $(".myfocus").css("display", "none");
        $(".suggest").css("display", "none");
        $(".video").css("display", "block");
        $(".navi").css("display", "none");
        $(".buy").css("display", "none");
        x = 4;
        localStorage.a = 4;

    });
    $("#buy").click(function() {
        $("#suggest").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#sectiontwomenu").css({
            "background": "#fff url(imgs/myfoucs.jpg) 14px 10px no-repeat",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#navi").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#video").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#buy").css({
            "background": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });
        $(".myfocus").css("display", "none");
        $(".suggest").css("display", "none");
        $(".video").css("display", "none");
        $(".navi").css("display", "none");
        $(".buy").css("display", "block");
        x = 5;
        localStorage.a = 5;

    });
      if (localStorage.a == 1) {
        $("#suggest").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#sectiontwomenu").css({
            "background": "#9a9da2 url(imgs/myfocusb.jpg) 15px 10px no-repeat",
            "font-weight": "bold",
            "color": "#fff"
        });
        $("#navi").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#video").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#buy").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });

        $(".myfocus").css("display", "block");
        $(".suggest").css("display", "none");
        $(".video").css("display", "none");
        $(".navi").css("display", "none");
        $(".buy").css("display", "none");
        x=1
  
    } else if (localStorage.a == 2) {
        $("#suggest").css({
            "background": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });
        $("#sectiontwomenu").css({
            "background": "#fff url(imgs/myfoucs.jpg) 14px 10px no-repeat",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#navi").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#video").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#buy").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $(".myfocus").css("display", "none");
        $(".suggest").css("display", "block");
        $(".video").css("display", "none");
        $(".navi").css("display", "none");
        $(".buy").css("display", "none");
        x=2

    } else if (localStorage.a == 3) {
        $("#suggest").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#sectiontwomenu").css({
            "background": "#fff url(imgs/myfoucs.jpg) 14px 10px no-repeat",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#navi").css({
            "background": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });
        $("#video").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#buy").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $(".myfocus").css("display", "none");
        $(".suggest").css("display", "none");
        $(".video").css("display", "none");
        $(".navi").css("display", "block");
        $(".buy").css("display", "none");
        x=3
       
    } else if (localStorage.a == 4) {
        $("#suggest").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#sectiontwomenu").css({
            "background": "#fff url(imgs/myfoucs.jpg) 14px 10px no-repeat",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#navi").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#video").css({
            "background": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });
        $("#buy").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $(".myfocus").css("display", "none");
        $(".suggest").css("display", "none");
        $(".video").css("display", "block");
        $(".navi").css("display", "none");
        $(".buy").css("display", "none");
        x=4
   
    } else if (localStorage.a == 5) {
        $("#suggest").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#sectiontwomenu").css({
            "background": "#fff url(imgs/myfoucs.jpg) 14px 10px no-repeat",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#navi").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#video").css({
            "background": "#fff",
            "font-weight": "normal",
            "color": "#000"
        });
        $("#buy").css({
            "background": "#9a9da2",
            "font-weight": "bold",
            "color": "#fff"
        });
        $(".myfocus").css("display", "none");
        $(".suggest").css("display", "none");
        $(".video").css("display", "none");
        $(".navi").css("display", "none");
        $(".buy").css("display", "block");
        x=5
 
    }

});