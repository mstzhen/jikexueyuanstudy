$(document).ready(function() {
    //搜索输入框获取焦点和失去焦点事件
    $(".topsearchonein").focus(function() {
        $(".tipsearch").hide();
        $(".topsearchtwoin").css({ "background": "#38b55a url(imgs/header/topsearch2.jpg) center center no-repeat", "outline": "none" });
    });
    $(".topsearchonein").blur(function() {
        $(".topsearchtwoin").css("background", "#fff url(imgs/header/topsearch1.png) center center no-repeat");
        $(".tipsearch").show();
    });
    //搜索框内搜索提示鼠标滑过和离开的事件
    $(".tipsearch>a").hover(function() {
        $(this).css({ "background": "#dfdfdf", "color": "#000" })
    }, function() {
        $(this).css({ "background": "#f3f3f3", "color": "gray" })

    });
    //搜索点击按钮鼠标滑过和离开后的事件
    $(".topsearchtwoin").hover(function() {
        $(this).css({ "background": "#38b55a url(imgs/header/topsearch2.jpg) center center no-repeat", "outline": "none" });
    }, function() {
        $(this).css("background", "#fff url(imgs/header/topsearch1.png) center center no-repeat");

    });
    //鼠标滑过首页按钮时候发生的变化
    $("nav>div>div>ul>li").hover(function() {
        $(".ulbtndiv").show();
        $("nav>div>div>ul>li>ul").show();
    }, function() {
        $(".ulbtndiv").hide();
        $("nav>div>div>ul>li>ul").hide();
    })
    $(".ulbtndiv").hover(function() {
            $(".ulbtndiv").show();
            $("nav>div>div>ul>li>ul").show();
        }, function() {
            $(".ulbtndiv").hide();
            $("nav>div>div>ul>li>ul").hide();
        })
        // 鼠标滑过导航栏其它菜单栏时候，下拉菜单背景颜色变化时
    $(".othernav").eq(0).hover(function() {
        $(".othernav").eq(0).children("ul").css("background", "url(imgs/nav/liulbjt.png) center -2px no-repeat");
    }, function() {
        $(".othernav").eq(0).children("ul").css("background", "none");

    })

    $(".othernav").eq(1).hover(function() {
        $(".othernav").eq(1).children("ul").css("background", "url(imgs/nav/liulbjt.png) center -2px no-repeat");
    }, function() {
        $(".othernav").eq(1).children("ul").css("background", "none");

    })
    $(".othernav").eq(2).hover(function() {
        $(".othernav").eq(2).children("ul").css("background", "url(imgs/nav/liulbjt.png) center -2px no-repeat");
    }, function() {
        $(".othernav").eq(2).children("ul").css("background", "none");

    })

    $(".othernav").eq(3).hover(function() {
        $(".othernav").eq(3).children("ul").css("background", "url(imgs/nav/liulbjt.png) center -2px no-repeat");
    }, function() {
        $(".othernav").eq(3).children("ul").css("background", "none");

    })

    //正文部分事件，鼠标滑入垂直导航事件
    $(".vnav ul li").eq(0).hover(function() {
        $(".vnav ul").css("border-top", "1px solid #38b55a")
        $(".vnav ul li").eq(0).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a", "height": " 37px" });
        $(".vnav ul li a").eq(0).css("color", "#38b55a")
        $(".vnavconent").eq(0).css("display", "block")

    }, function() {
        $(".vnav ul").css("border-top", "2px solid #38b55a")
        $(".vnav ul li").eq(0).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede", "height": " 36px" });
        $(".vnav ul li a").eq(0).css("color", "#000")
        $(".vnavconent").eq(0).css("display", "none")
    })

    $(".vnavconent").eq(0).hover(function() {
            $(".vnavconent").eq(0).css("display", "block")
            $(".vnav ul").css("border-top", "1px solid #38b55a")
            $(".vnav ul li").eq(0).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
            $(".vnav ul li a").eq(0).css("color", "#38b55a")
        }, function() {
            $(".vnavconent").eq(0).css("display", "none")
            $(".vnav ul").css("border-top", "2px solid #38b55a")
            $(".vnav ul li").eq(0).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
            $(".vnav ul li a").eq(0).css("color", "#000")
        })
        //移动开发菜单结束
    $(".vnav ul li").eq(1).hover(function() {

        $(".vnav ul li").eq(1).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(1).css("color", "#38b55a")
        $(".vnavconent").eq(1).css("display", "block")
    }, function() {

        $(".vnav ul li").eq(1).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 11px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(1).css("color", "#000")
        $(".vnavconent").eq(1).css("display", "none")
    })
    $(".vnavconent").eq(1).hover(function() {
            $(".vnavconent").eq(1).css("display", "block")
            $(".vnav ul li").eq(1).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
            $(".vnav ul li a").eq(1).css("color", "#38b55a")
        }, function() {
            $(".vnavconent").eq(1).css("display", "none")
            $(".vnav ul li").eq(1).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
            $(".vnav ul li a").eq(1).css("color", "#000")
        })
        //前端开发设置结束

    $(".vnav ul li").eq(2).hover(function() {

        $(".vnav ul li").eq(2).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(2).css("color", "#38b55a")
        $(".vnavconent").eq(2).css("display", "block")
    }, function() {

        $(".vnav ul li").eq(2).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 11px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(2).css("color", "#000")
        $(".vnavconent").eq(2).css("display", "none")
    })
    $(".vnavconent").eq(2).hover(function() {
            $(".vnavconent").eq(2).css("display", "block")
            $(".vnav ul li").eq(2).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
            $(".vnav ul li a").eq(2).css("color", "#38b55a")
        }, function() {
            $(".vnavconent").eq(2).css("display", "none")
            $(".vnav ul li").eq(2).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
            $(".vnav ul li a").eq(2).css("color", "#000")
        })
        //结束
    $(".vnav ul li").eq(3).hover(function() {

        $(".vnav ul li").eq(3).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(3).css("color", "#38b55a")
        $(".vnavconent").eq(3).css("display", "block")
    }, function() {

        $(".vnav ul li").eq(3).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 11px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(3).css("color", "#000")
        $(".vnavconent").eq(3).css("display", "none")
    })
    $(".vnavconent").eq(3).hover(function() {
            $(".vnavconent").eq(3).css("display", "block")
            $(".vnav ul li").eq(3).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
            $(".vnav ul li a").eq(3).css("color", "#38b55a")
        }, function() {
            $(".vnavconent").eq(3).css("display", "none")
            $(".vnav ul li").eq(3).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
            $(".vnav ul li a").eq(3).css("color", "#000")
        })
        //结束
    $(".vnav ul li").eq(4).hover(function() {

        $(".vnav ul li").eq(4).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(4).css("color", "#38b55a")
        $(".vnavconent").eq(4).css("display", "block")
    }, function() {

        $(".vnav ul li").eq(4).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 11px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(4).css("color", "#000")
        $(".vnavconent").eq(4).css("display", "none")
    })
    $(".vnavconent").eq(4).hover(function() {
            $(".vnavconent").eq(4).css("display", "block")
            $(".vnav ul li").eq(4).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
            $(".vnav ul li a").eq(4).css("color", "#38b55a")
        }, function() {
            $(".vnavconent").eq(4).css("display", "none")
            $(".vnav ul li").eq(4).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
            $(".vnav ul li a").eq(4).css("color", "#000")
        })
        //结束
    $(".vnav ul li").eq(5).hover(function() {

        $(".vnav ul li").eq(5).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(5).css("color", "#38b55a")
        $(".vnavconent").eq(5).css("display", "block")
    }, function() {

        $(".vnav ul li").eq(5).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 11px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(5).css("color", "#000")
        $(".vnavconent").eq(5).css("display", "none")
    })
    $(".vnavconent").eq(5).hover(function() {
            $(".vnavconent").eq(5).css("display", "block")
            $(".vnav ul li").eq(5).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
            $(".vnav ul li a").eq(5).css("color", "#38b55a")
        }, function() {
            $(".vnavconent").eq(5).css("display", "none")
            $(".vnav ul li").eq(5).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
            $(".vnav ul li a").eq(5).css("color", "#000")
        })
        //结束
    $(".vnav ul li").eq(6).hover(function() {

        $(".vnav ul li").eq(6).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(6).css("color", "#38b55a")
        $(".vnavconent").eq(6).css("display", "block")
    }, function() {

        $(".vnav ul li").eq(6).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 11px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(6).css("color", "#000")
        $(".vnavconent").eq(6).css("display", "none")
    })
    $(".vnavconent").eq(6).hover(function() {
        $(".vnavconent").eq(6).css("display", "block")
        $(".vnav ul li").eq(6).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(6).css("color", "#38b55a")
    }, function() {
        $(".vnavconent").eq(6).css("display", "none")
        $(".vnav ul li").eq(6).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(6).css("color", "#000")
    })
    $(".vnav ul li").eq(7).hover(function() {

        $(".vnav ul li").eq(7).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(7).css("color", "#38b55a")
        $(".vnavconent").eq(7).css("display", "block")
    }, function() {

        $(".vnav ul li").eq(7).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 11px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(7).css("color", "#000")
        $(".vnavconent").eq(7).css("display", "none")
    })
    $(".vnavconent").eq(7).hover(function() {
        $(".vnavconent").eq(7).css("display", "block")
        $(".vnav ul li").eq(7).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(7).css("color", "#38b55a")
    }, function() {
        $(".vnavconent").eq(7).css("display", "none")
        $(".vnav ul li").eq(7).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(7).css("color", "#000")
    })

    $(".vnav ul li").eq(8).hover(function() {

        $(".vnav ul li").eq(8).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(8).css("color", "#38b55a")
        $(".vnavconent").eq(8).css("display", "block")
    }, function() {

        $(".vnav ul li").eq(8).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 11px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(8).css("color", "#000")
        $(".vnavconent").eq(8).css("display", "none")
    })
    $(".vnavconent").eq(8).hover(function() {
        $(".vnavconent").eq(8).css("display", "block")
        $(".vnav ul li").eq(8).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(8).css("color", "#38b55a")
    }, function() {
        $(".vnavconent").eq(8).css("display", "none")
        $(".vnav ul li").eq(8).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(8).css("color", "#000")
    })

    $(".vnav ul li").eq(9).hover(function() {

        $(".vnav ul li").eq(9).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(9).css("color", "#38b55a")
        $(".vnavconent").eq(9).css("display", "block")
    }, function() {

        $(".vnav ul li").eq(9).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 11px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(9).css("color", "#000")
        $(".vnavconent").eq(9).css("display", "none")
    })
    $(".vnavconent").eq(9).hover(function() {
        $(".vnavconent").eq(9).css("display", "block")
        $(".vnav ul li").eq(9).css({ "padding-left": "18px", "background": "none", "border-right": "1px solid #fcfcfc", "border-left": "2px solid #38b55a" });
        $(".vnav ul li a").eq(9).css("color", "#38b55a")
    }, function() {
        $(".vnavconent").eq(9).css("display", "none")
        $(".vnav ul li").eq(9).css({ "padding-left": "16px", "background": "url(imgs/article/more-icon.png) 186px center no-repeat", "background-size": "6px 10px", "border-left": "1px solid #dedede", "border-right": "1px solid #dedede" });
        $(".vnav ul li a").eq(9).css("color", "#000")
    })

    //轮播图开始
    $(".lunbo1").hover(function() {
        $(".lunbo1 .left").fadeIn();
        $(".lunbo1 .right").fadeIn();
    }, function() {
        $(".lunbo1 .left").fadeOut();
        $(".lunbo1 .right").fadeOut();
    })
    var i = 0;
    $("#lunbo1_list").first().show();
    $(".lunbo1 ul li ").eq(0).css("background", "#38b55a");

    $(".lunbo1 ul li ").click(function() {
        $(this).css("background", "#38b55a").siblings().css("background", "url(imgs/article/swiper.jpg)");
        var index = $(this).index();
        i = index;
        $(".lunbo1 div a").eq(index).fadeIn().siblings().fadeOut();

    })

    var t = setInterval(showAuto, 2500);

    $(".lunbo1").hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(showAuto, 2500);
    })
    $(".right").click(function() {
        showAuto();
    })
    $(".left").click(function() {
        oppshowAuto();
    })

    function showAuto() {
        i++;
        if (i == 4) {
            i = 0;
        }
        $(".lunbo1 div a").eq(i).fadeIn().siblings().fadeOut();
        $(".lunbo1 ul li ").eq(i).css("background", "#38b55a").siblings().css("background", "url(imgs/article/swiper.jpg)");

    }

    function oppshowAuto() {
        i--;
        if (i == -1) {
            i = 3;
        }
        $(".lunbo1 div a").eq(i).fadeIn().siblings().fadeOut();
        $(".lunbo1 ul li ").eq(i).css("background", "#38b55a").siblings().css("background", "url(imgs/article/swiper.jpg)");

    }
    //轮播2开始
    $(".lunbo2 ").hover(function() {
        $(".lunbo2 .leftag").show();
        $(".lunbo2 .rightag").show();

    }, function() {
        $(".lunbo2 .leftag").hide();
        $(".lunbo2 .rightag").hide();
    })
    var x = 0;
    var clone0 = $(".lunbo2 ul li").first().clone();

    $(".lunbo2 ul").append(clone0);
    var size = $(".lunbo2 ul li").size();
    console.log(size);
    $(".lunbo2 .leftag").click(function() {
        x++;
        if (x == size - 4) {
            $(".lunbo2 ul").css({ left: 0 });
            x = 1;
        }

        $(".lunbo2 ul").stop().animate({ left: -x * 187 }, 1000); //结果数值

    });

    $(".lunbo2 .rightag").click(function() {
        x--;

        if (x == -1) {
            $(".lunbo2 ul").css({ left: -748 }); //结果数值
            x = 3;
        }
        /*else if (x == -size + 1) {
            $(".lunbo2 ul").css({ left: -(size-1)* 187 });
            x = size-2;
        }*/
        $(".lunbo2 ul").stop().animate({ left: -x * 187 }, 1000); //animate是结果数值
    });
    //极客公开课开始


    $(".topbottomb").mouseover(function() {

        var y = $(".topbottomb").index(this);

        if (y == 1 | y == 2 | y == 3) {
            $(this).addClass("hoverfun1").siblings().removeClass("hoverfun1 hoverfun0 hoverfun2");
            $(".moonimg img").eq(y).addClass("imgshow").siblings().removeClass("imgshow");
        } else if (y == 0) {
            $(this).addClass("hoverfun0").siblings().removeClass("hoverfun0 hoverfun1");
            $(".moonimg img").eq(2).addClass("imgshow").siblings().removeClass("imgshow");

        } else if (y == 4) {
            $(this).addClass("hoverfun2").siblings().removeClass("hoverfun2 hoverfun1");
            $(".moonimg img").eq(2).addClass("imgshow").siblings().removeClass("imgshow");
        }

    });

    $(".classshowulli").mouseover(function() {
        var z = $(".classshowulli").index(this);
        if (z == 0 | z == 2 | z == 4) {
            $(this).addClass("ullibackground").siblings().removeClass("ullibackground ullibackgroundlast");
            $(".classshows ul").eq(0).hide().siblings().show();
        } else if (z == 1 | z == 3) {
            $(this).addClass("ullibackground").siblings().removeClass("ullibackground ullibackgroundlast");
            $(".classshows ul").eq(1).hide().siblings().show();
        } else if (z == 5) {
            $(this).addClass("ullibackgroundlast").siblings().removeClass("ullibackgroundlast ullibackground");
            $(".classshows ul").eq(1).hide().siblings().show();
        }
    });
    var num;
    $(".classshows ul li").hover(function() {
        num = $(".classshows ul li").index(this);
        switch (num) {
            case 0:
                enorder(0);
                break;
            case 1:
                enorder(1);
                break;
            case 2:
                enorder(2);
                break;
            case 3:
                enorder(3);
                break;
            case 4:
                enorder(4);
                break;
            case 5:
                enorder(5);
                break;
            case 6:
                enorder(6);
                break;
            case 7:
                enorder(7);
                break;
            case 8:
                enorder(8);
                break;
            case 9:
                enorder(9);
                break;
            case 10:
                enorder(10);
                break;
            case 11:
                enorder(11);
                break;
            case 12:
                enorder(12);
                break;
            case 13:
                enorder(13);
                break;
            case 14:
                enorder(14);
                break;
            case 15:
                enorder(15);
                break;
        }

    }, function() {
        switch (num) {
            case 0:
                exorer(0);
                break;
            case 1:
                exorer(1);
                break;
            case 2:
                exorer(2);
                break;
            case 3:
                exorer(3);
                break;
            case 4:
                exorer(4);
                break;
            case 5:
                exorer(5);
                break;
            case 6:
                exorer(6);
                break;
            case 7:
                exorer(7);
                break;
            case 8:
                exorer(8);
                break;
            case 9:
                exorer(9);
                break;
            case 10:
                exorer(10);
                break;
            case 11:
                exorer(11);
                break;
            case 12:
                exorer(12);
                break;
            case 13:
                exorer(13);
                break;
            case 14:
                exorer(14);
                break;
            case 15:
                exorer(15);
                break;
        }
    });
    /*课程展示开始*/
    var b;
    $(".sondivaborder").hover(function() {
        b = $(".sondivaborder").index(this);
        console.log(b)
        if (b < 4) {
            $(this).css({ "border-left": "1px solid #35b558", "border-top": "1px solid #35b558" });
            $(".sondivaborder").eq(b + 1).css("border-left", "1px solid #35b558");
            $(".sondivaborder").eq(b + 5).css("border-top", "1px solid #35b558");
            $(".sondivbutton").eq(b).css({ "background": "#35b558", "color": "#fff", "height": "34px", "line-height": "34px" })
        } else if (b == 4) {
            $(this).css({ "border-left": "1px solid #35b558", "border-top": "1px solid #35b558", "border-right": "1px solid #35b558" });
            $(".sondivaborder").eq(b + 5).css("border-top", "1px solid #35b558");
            $(".sondivbutton").eq(b).css({ "background": "#35b558", "color": "#fff", "height": "34px", "line-height": "34px" })
        } else if (4 < b && b < 9) {
            $(this).css({ "border-left": "1px solid #35b558", "border-top": "1px solid #35b558", "border-bottom": "1px solid #35b558" });
            $(".sondivaborder").eq(b + 1).css("border-left", "1px solid #35b558");
            $(".sondivbutton").eq(b).css({ "background": "#35b558", "color": "#fff", "height": "34px", "line-height": "34px" })

        } else if (b == 9) {

            $(".sondivaborder").eq(b).css("border", "1px solid #35b558");
            $(".sondivbutton").eq(b).css({ "background": "#35b558", "color": "#fff", "height": "34px", "line-height": "34px" })

        }
    }, function() {

        if (b < 4) {
            $(this).css({ "border-left": "1px solid #dedede", "border-top": "1px solid #dedede" });
            $(".sondivaborder").eq(b + 1).css("border-left", "1px solid #dedede");
            $(".sondivaborder").eq(b + 5).css("border-top", "1px solid #dedede");
            $(".sondivbutton").eq(b).css({ "background": "#f3fff6", "border": "1px solid #35b558", "color": "#35b558", "height": "34px", "line-height": "34px" })
        } else if (b == 4) {
            $(this).css({ "border-left": "1px solid #dedede", "border-top": "1px solid #dedede", "border-right": "1px solid #dedede" });
            $(".sondivaborder").eq(b + 5).css("border-top", "1px solid #dedede");
            $(".sondivbutton").eq(b).css({ "background": "#f3fff6", "border": "1px solid #35b558", "color": "#35b558", "height": "34px", "line-height": "34px" })
        } else if (4 < b && b < 9) {
            $(this).css({ "border-left": "1px solid #dedede", "border-top": "1px solid #dedede", "border-bottom": "1px solid #dedede" });
            $(".sondivaborder").eq(b + 1).css("border-left", "1px solid #dedede");
            $(".sondivbutton").eq(b).css({ "background": "#f3fff6", "border": "1px solid #35b558", "color": "#35b558", "height": "34px", "line-height": "34px" })

        } else if (b == 9) {
            $(this).css("border", "1px solid #dedede");
            $(".sondivbutton").eq(b).css({ "background": "#f3fff6", "border": "1px solid #35b558", "color": "#35b558", "height": "34px", "line-height": "34px" })

        }


    });

    $(".careeroad .question").hover(function() {
        $(".carsystem").fadeIn();
    }, function() {
        $(".carsystem").fadeOut();
    })

    $(".knowsys .sysquestion").hover(function() {
        $(".questionans").fadeIn();
    }, function() {
        $(".questionans").fadeOut();
    })
    $(".betterclasstip").hover(function() {
        $(".betterclasstipans").fadeIn();
    }, function() {
        $(".betterclasstipans").fadeOut();
    })

    var better;
    $(".betterclass ul li").hover(function() {
        $(this).css("border", "1px solid #35b558");
        better = $(this).index(".betterclass ul li");
        $(".atoncestudy").eq(better).show();
    }, function() {
        $(this).css("border", "1px solid #dedede");
        $(".atoncestudy").eq(better).hide();
    })

    var liorder;
    $(".liorder").hover(function() {

        liorder = $(".liorder").index(this);
        console.log(liorder);
        if (liorder < 2) {
            $(this).css({ "border-left": "1px solid #35b558", "border-top": "1px solid #35b558", "border-bottom": "1px solid #35b558" });
            $(".liorder").eq(liorder + 1).css("border-left", "1px solid #35b558");
        } else if (liorder == 2) {
            $(this).css("border", "1px solid #35b558");
        }
    }, function() {
        if (liorder < 2) {
            $(this).css({ "border-left": "1px solid #dedede", "border-top": "1px solid #dedede", "border-bottom": "1px solid #dedede" });
            $(".liorder").eq(liorder + 1).css("border-left", "1px solid #dedede");
        } else {
            $(this).css("border", "1px solid #dedede");
        }
    })

    /*快讯盒子第三个盒子补*/
    var d;
    $(".forhover").hover(function() {
        d = $(".forhover").index(this);
        if (d == 0) {
            $("#needhidul").hide();
            $("#navul").show();
            $("#afterhover0").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
            $("#conent0").show();
        } else if (d == 1) {
            $("#needhidul").hide();
            $("#navul").show();
            $("#afterhover1").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
            $("#conent1").show();
        } else if (d == 2) {
            $("#needhidul").hide();
            $("#navul").show();
            $("#afterhover2").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
            $("#conent2").show();
        } else if (d == 3) {
            $("#needhidul").hide();
            $("#navul").show();
            $("#afterhover3").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
            $("#conent3").show();
        }

    }, function() {
        if (d == 0) {
            $("#needhidul").show();
            $("#navul").hide();
            $("#afterhover0").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })
            $("#conent0").hide();
        } else if (d == 1) {
            $("#needhidul").show();
            $("#navul").hide();
            $("#afterhover1").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })
            $("#conent1").hide();
        } else if (d == 2) {
            console.log(d);
            $("#needhidul").show();
            $("#navul").hide();
            $("#afterhover2").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })
            $("#conent2").hide();
        } else if (d == 3) {
            $("#needhidul").show();
            $("#navul").hide();
            $("#afterhover3").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })
            $("#conent3").hide();
        }

    })
    $("#afterhover0").hover(function() {
        $("#needhidul").hide();
        $("#navul").show();
        $("#conent0").show();
        $("#afterhover0").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
    }, function() {
        $("#needhidul").show();
        $("#conent0").hide();
        $("#navul").hide();
        $("#afterhover0").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })

    })
    $("#conent0").hover(function() {
        $(this).show();
        $("#needhidul").hide();
        $("#navul").show();
        $("#afterhover0").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
    }, function() {
        $("#needhidul").show();
        $(this).hide();
        $("#navul").hide();
        $("#afterhover0").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })

    })
    $("#afterhover1").hover(function() {
        $("#needhidul").hide();
        $("#navul").show();
        $("#conent1").show();
        $("#afterhover1").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
    }, function() {
        $("#needhidul").show();
        $("#conent1").hide();
        $("#navul").hide();
        $("#afterhover1").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })

    });
    $("#conent1").hover(function() {
        $(this).show();
        $("#needhidul").hide();
        $("#navul").show();
        $("#afterhover1").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
    }, function() {
        $("#needhidul").show();
        $(this).hide();
        $("#navul").hide();
        $("#afterhover1").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })

    })
    $("#afterhover2").hover(function() {
        $("#needhidul").hide();
        $("#navul").show();
        $("#conent2").show();
        $("#afterhover2").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
    }, function() {
        $("#needhidul").show();
        $("#conent2").hide();
        $("#navul").hide();
        $("#afterhover2").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })

    })
    $("#conent2").hover(function() {
        $(this).show();
        $("#needhidul").hide();
        $("#navul").show();
        $("#afterhover2").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
    }, function() {
        $("#needhidul").show();
        $(this).hide();
        $("#navul").hide();
        $("#afterhover2").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })

    })
    $("#afterhover3").hover(function() {
        $("#needhidul").hide();
        $("#navul").show();
        $("#conent3").show();
        $("#afterhover3").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
    }, function() {
        $("#needhidul").show();
        $("#conent3").hide();
        $("#navul").hide();
        $("#afterhover3").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })

    })
    $("#conent3").hover(function() {
        $(this).show();
        $("#needhidul").hide();
        $("#navul").show();
        $("#afterhover3").css({ "color": "#35b558", "background": "#fff", "border-bottom": "none" })
    }, function() {
        $("#needhidul").show();
        $(this).hide();
        $("#navul").hide();
        $("#afterhover3").css({ "color": "#000", "background": "#FCFCFC", "border-bottom": "1px solid #F5F5F5" })

    })

    /* 回到顶部部分 */
    /*回到顶部按钮出现判断*/
    $(window).scroll(function() {
        var bot = 90; //距离顶部高度
        if ($(window).scrollTop() >= bot) {
            $(".gotop .firstsp").css("display", "block");
        }
        if ($(window).scrollTop() < bot) {
            $(".gotop .firstsp").css("display", "none");
        }

    });
    $(".gotop .firstsp").hover(function() {
        $(this).addClass("fufirstsp").removeClass("firstsp");
    }, function() {
        $(this).removeClass("fufirstsp").addClass("firstsp");
    });

})

function enorder(num) {
    $(".classshows ul li .stretchdiv").eq(num).css("height", "167px");
    $(".classshows ul li .divp").eq(num).css("display", "block");
    $(".classshows ul li .parentdiv .divson").eq(num).css("margin-top", "7px")
    $(".classshows ul li  .divson .fop").eq(num).css("top", "28px");
    $(".classshows ul li  .divson .sp").eq(num).css("display", "block");
    $(".classshows ul li  .divson .tp").eq(num).css("display", "block");
    $(".classshows ul li  .zhaozi").eq(num).fadeIn(500).stop;
}

function exorer(num) {
    $(".classshows ul li .parentdiv .divson").eq(num).css("margin-top", "30px");
    $(".classshows ul li .divson .fop").eq(num).css("top", "0px");
    $(".classshows ul li  .divson .sp").eq(num).css("display", "none");
    $(".classshows ul li  .divson .tp").eq(num).css("display", "none");
    $(".classshows ul li .divp").eq(num).css("display", "none");
    $(".classshows ul li .stretchdiv").eq(num).css("height", "88px");
    $(".classshows ul li  .zhaozi").eq(num).fadeOut(500).stop;
}
