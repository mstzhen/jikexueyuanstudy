$(document).ready(function() {
    $(window).on("load", function() {
        imgLocation(); //此行已改
    });
    var dataImg = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }] }
    window.onscroll = function() {
        if (scrollEvent()) {   //此行已改
            $.each(dataImg.data, function(index, value) {
                var box = $("<div>").addClass("box").appendTo($("#container"));
                var conent = $("<div>").addClass("conent").appendTo(box);
                $("<img>").attr("src", "./imgs/" + $(value).attr("src")).appendTo(conent);

            });
            imgLocation(); //此行已改
        }
    }
});

function scrollEvent(){    //此行已改
    var box = $('.box');
    var scrollToLastImgHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);//设置触发加载事件时的最小滚动高度
    var documentHeight = $(document).height();//获取当前窗口高度
    var scrollTop = $(window).scrollTop();//获取当前的鼠标滚动高度。
    return(scrollToLastImgHeight < documentHeight + scrollTop )?true:false;//当文档高度与滚动条滚动距离之和大于最小滚动高度时，返回true
}
function imgLocation(){   //此行已改
    var box = $('.box');
    var width =  box.eq(0).width();//每个图片宽度
    var cols = Math.floor($(window).width()/width);//能排下的列数
    $('.wrapper').width(width*cols);//设置容器宽度,防止屏幕收缩时出现问题
    var boxArr = [];//声明盒子数组。
    box.each(function(index,value){
        var boxHeight = box.eq(index).height();//将每个盒子高度获取到
        if (index < cols){//第一行
            boxArr[index] = boxHeight;//将盒子高度传入数组。
        }else {
            var minH = Math.min.apply(null,boxArr);//取得第一行的高度最小值
            var minHIndex = $.inArray(minH,boxArr);//取得高度最小值索引
            console.log(minHIndex);
            $(value).css({
                'position':'absolute',
                'top':minH,
                'left':box.eq(minHIndex).position().left
            });
            boxArr[minHIndex] +=  box.eq(index).height();//第一行最小高度图片下方插入图片之后该列的高度
        }
    });//遍历盒子。
}
