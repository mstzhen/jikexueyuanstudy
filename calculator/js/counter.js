var x = true; //全局变量，用以当输入运算符，比如+、-、/时候改变函数条件
var y = true; //全部变量判断等于函数的状态
var a = 0; //用于存储运算符之前的数值
var b = 0; //用于存贮运算符之后的数值
var c = 0; //存储运算符


//调用类为backgroundthree函数
document.getElementsByClassName("backgroundthree")[0].addEventListener("click", changeone);
document.getElementsByClassName("backgroundthree")[1].addEventListener("click", changetwo);
document.getElementsByClassName("backgroundthree")[2].addEventListener("click", changethree);
document.getElementsByClassName("backgroundthree")[3].addEventListener("click", changefou);
document.getElementsByClassName("backgroundthree")[4].addEventListener("click", changefive);
document.getElementsByClassName("backgroundthree")[5].addEventListener("click", changesix);
document.getElementsByClassName("backgroundthree")[6].addEventListener("click", changeseven);
document.getElementsByClassName("backgroundthree")[7].addEventListener("click", changeaugust);
document.getElementsByClassName("backgroundthree")[8].addEventListener("click", changenine);
document.getElementsByClassName("backgroundthree")[9].addEventListener("click", changeten);
document.getElementsByClassName("backgroundthree")[10].addEventListener("click", dot);

function changeone() {
    var elements = document.getElementsByClassName("backgroundthree");
    if (x && y) {

        if (document.getElementById("resetin").value.length == 1 && document.getElementById("resetin").value == 0) {
            document.getElementById("resetin").value = elements[0].firstChild.innerHTML;
            b = elements[0].firstChild.innerHTML;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[0].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value == 0.) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[0].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (document.getElementById("resetin").value.length == 11 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
            b = document.getElementById("resetin").value;
        }
    } else {
        document.getElementById("resetin").value = elements[0].firstChild.innerHTML;
        x = true;
        y = true;
        b = document.getElementById("resetin").value;
   

    }

}
//数字8调用函数
function changetwo() {
    var elements = document.getElementsByClassName("backgroundthree");
    if (x && y) {

        if (document.getElementById("resetin").value.length == 1 && document.getElementById("resetin").value == 0) {
            document.getElementById("resetin").value = elements[1].firstChild.innerHTML;
            b = document.getElementById("resetin").value;

        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[1].firstChild.innerHTML;
            b = document.getElementById("resetin").value;

        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value == 0.) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[1].firstChild.innerHTML;
            b = document.getElementById("resetin").value;

        } else if (document.getElementById("resetin").value.length == 11 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
            b = document.getElementById("resetin").value;

        }
    } else {
        document.getElementById("resetin").value = elements[1].firstChild.innerHTML;
        x = true;
        y = true;
        b = document.getElementById("resetin").value;
       
    }

}
//数字9调用函数
function changethree() {
    var elements = document.getElementsByClassName("backgroundthree");
    if (x && y) {

        if (document.getElementById("resetin").value.length == 1 && document.getElementById("resetin").value == 0) {
            document.getElementById("resetin").value = elements[2].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[2].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value == 0.) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[2].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (document.getElementById("resetin").value.length == 11 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
            b = document.getElementById("resetin").value;
        }
    } else {
        document.getElementById("resetin").value = elements[2].firstChild.innerHTML;
        x = true;
        y = true;
        b = document.getElementById("resetin").value;
    }
}
//数字4调用函数
function changefou() {
    var elements = document.getElementsByClassName("backgroundthree");
    if (x && y) {

        if (document.getElementById("resetin").value.length == 1 && document.getElementById("resetin").value == 0) {
            document.getElementById("resetin").value = elements[3].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[3].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value == 0.) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[3].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (document.getElementById("resetin").value.length == 11 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
            b = document.getElementById("resetin").value;
        }
    } else {
        document.getElementById("resetin").value = elements[3].firstChild.innerHTML;
        x = true;
        y = true;
        b = document.getElementById("resetin").value;
    }

}
//数字5调用函数
function changefive() {
    var elements = document.getElementsByClassName("backgroundthree");
    if (x && y) {

        if (document.getElementById("resetin").value.length == 1 && document.getElementById("resetin").value == 0) {
            document.getElementById("resetin").value = elements[4].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[4].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value == 0.) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[4].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (document.getElementById("resetin").value.length == 11 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
            b = document.getElementById("resetin").value;
        }
    } else {
        document.getElementById("resetin").value = elements[4].firstChild.innerHTML;
        x = true;
        y = true;
        b = document.getElementById("resetin").value;
    }
}
//数字6调用函数
function changesix() {
    var elements = document.getElementsByClassName("backgroundthree");
    if (x && y) {

        if (document.getElementById("resetin").value.length == 1 && document.getElementById("resetin").value == 0) {
            document.getElementById("resetin").value = elements[5].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[5].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value == 0.) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[5].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (document.getElementById("resetin").value.length == 11 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
            b = document.getElementById("resetin").value;
        }
    } else {
        document.getElementById("resetin").value = elements[5].firstChild.innerHTML;
        x = true;
        y = true;
        b = document.getElementById("resetin").value;
    }

}
//数字1调用函数
function changeseven() {
    var elements = document.getElementsByClassName("backgroundthree");
    if (x && y) {

        if (document.getElementById("resetin").value.length == 1 && document.getElementById("resetin").value == 0) {
            document.getElementById("resetin").value = elements[6].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[6].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value == 0.) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[6].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (document.getElementById("resetin").value.length == 11 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
            b = document.getElementById("resetin").value;
        }
    } else {
        document.getElementById("resetin").value = elements[6].firstChild.innerHTML;
        x = true;
        y = true;
        b = document.getElementById("resetin").value;
    }
}
//数字2调用函数
function changeaugust() {
    var elements = document.getElementsByClassName("backgroundthree");
    if (x && y) {

        if (document.getElementById("resetin").value.length == 1 && document.getElementById("resetin").value == 0) {
            document.getElementById("resetin").value = elements[7].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[7].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value == 0.) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[7].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (document.getElementById("resetin").value.length == 11 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
            b = document.getElementById("resetin").value;
        }
    } else {
        document.getElementById("resetin").value = elements[7].firstChild.innerHTML;
        x = true;
        y = true;
        b = document.getElementById("resetin").value;

    }

}
//数字1调用函数
function changenine() {
    var elements = document.getElementsByClassName("backgroundthree");
    if (x && y) {

        if (document.getElementById("resetin").value.length == 1 && document.getElementById("resetin").value == 0) {
            document.getElementById("resetin").value = elements[8].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[8].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value == 0.) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[8].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (document.getElementById("resetin").value.length == 11 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
            b = document.getElementById("resetin").value;
        }
    } else {
        document.getElementById("resetin").value = elements[8].firstChild.innerHTML;
        x = true;
        y = true;
        b = document.getElementById("resetin").value;
    }

}


//数字0调用函数
function changeten() {
    var elements = document.getElementsByClassName("backgroundthree");
    if (x && y) {

        if (document.getElementById("resetin").value.length == 1 && document.getElementById("resetin").value == 0) {
            document.getElementById("resetin").value = elements[9].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[9].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (11 > document.getElementById("resetin").value.length >= 1 && document.getElementById("resetin").value == 0.) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[9].firstChild.innerHTML;
            b = document.getElementById("resetin").value;
        } else if (document.getElementById("resetin").value.length == 11 && document.getElementById("resetin").value != 0) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
            b = document.getElementById("resetin").value;
        }
    } else {
        document.getElementById("resetin").value = elements[9].firstChild.innerHTML;
        x = true;
        y = true;
        b = document.getElementById("resetin").value;
    }

}
//调用类为backgroundtwo函数
document.getElementsByClassName("backgroundtwo")[0].addEventListener("click", inversion);
document.getElementsByClassName("backgroundtwo")[1].addEventListener("click", last);
document.getElementsByClassName("backgroundtwo")[2].addEventListener("click", percent);
document.getElementsByClassName("backgroundtwo")[3].addEventListener("click", sprts);
document.getElementsByClassName("backgroundtwo")[4].addEventListener("click", equal);
document.getElementsByClassName("backgroundtwo")[5].addEventListener("click", coscos);

//取反函数
function inversion() {

    if (!document.getElementById("resetin").value) {
        document.getElementById("resetin").value = 0;
    } else if (document.getElementById("resetin").value == "负无穷") {
        document.getElementById("resetin").value = "正无穷";
    } else if (document.getElementById("resetin").value == "正无穷") {
        document.getElementById("resetin").value = "负无穷";
    } else {
        document.getElementById("resetin").value = -document.getElementById("resetin").value;
    }
}
//取倒数函数
function last() {
    if (document.getElementById("resetin").value == "0") {
        document.getElementById("resetin").value = "正无穷";
    } else if (document.getElementById("resetin").value == "负无穷") {
        document.getElementById("resetin").value = "0";
    } else if (document.getElementById("resetin").value == "正无穷") {
        document.getElementById("resetin").value = "0";
    } else {
        document.getElementById("resetin").value = 1 / document.getElementById("resetin").value;
    }
}
//全清函数和清除函数一致
function wipeout() {
    document.getElementById("resetin").value = "0";
}
//百分比函数
function percent() {
    if (document.getElementById("resetin").value == "0") {
        document.getElementById("resetin").value = "0";
    } else if (document.getElementById("resetin").value == "负无穷") {
        document.getElementById("resetin").value = "负无穷";
    } else if (document.getElementById("resetin").value == "正无穷") {
        document.getElementById("resetin").value = "正无穷";
    } else {
        document.getElementById("resetin").value = document.getElementById("resetin").value / 100;
    }
}
//开根号函数
function sprts() {
    if (document.getElementById("resetin").value >= 0) {
        document.getElementById("resetin").value = document.getElementById("resetin").value / 100;
    } else if (document.getElementById("resetin").value == "负无穷") {
        document.getElementById("resetin").value = "NaN";
    } else if (document.getElementById("resetin").value == "正无穷") {
        document.getElementById("resetin").value = "正无穷";
    } else if (document.getElementById("resetin").value < 0) {
        document.getElementById("resetin").value = "NaN";
    }

}
//余弦函数
function coscos() {
    if (document.getElementById("resetin").value >= 0) {
        document.getElementById("resetin").value = Math.cos(document.getElementById("resetin").value);
    } else if (document.getElementById("resetin").value == "负无穷") {
        document.getElementById("resetin").value = "负无穷";
    } else if (document.getElementById("resetin").value == "正无穷") {
        document.getElementById("resetin").value = "正无穷";
    } else if (document.getElementById("resetin").value < 0) {
        document.getElementById("resetin").value = Math.cos(document.getElementById("resetin").value);
    }

}
//调用类为backgroundone函数
document.getElementsByClassName("backgroundone")[0].addEventListener("click", backspace);
document.getElementsByClassName("backgroundone")[1].addEventListener("click", wipeout);
document.getElementsByClassName("backgroundone")[2].addEventListener("click", wipeout);


//退格函数，删除最后一个数字
function backspace() {


    if (document.getElementById("resetin").value.length == 1) {
        document.getElementById("resetin").value = 0;
    } else if (document.getElementById("resetin").value.length > 1) {
        document.getElementById("resetin").value = document.getElementById("resetin").value.substring(0, document.getElementById("resetin").value.length - 1);
    }

}
//点的函数
function dot() {


    var elements = document.getElementsByClassName("backgroundthree");
    if (document.getElementById("resetin").value.indexOf(".") < 0) {
        if (11 > document.getElementById("resetin").value.length >= 1) {
            document.getElementById("resetin").value = document.getElementById("resetin").value + elements[10].firstChild.innerHTML;
        } else if (document.getElementById("resetin").value.length == 11) {
            document.getElementById("resetin").value = document.getElementById("resetin").value;
        }
    } else {

    }

}
//调用类为backgroundfour函数
document.getElementsByClassName("backgroundfour")[0].addEventListener("click", divide);
document.getElementsByClassName("backgroundfour")[1].addEventListener("click", mcl);
document.getElementsByClassName("backgroundfour")[2].addEventListener("click", sub);
document.getElementsByClassName("backgroundfour")[3].addEventListener("click", add);
//除法函数，但是没发找到第一次输入的变量，所以没有写出来,同样因为没法记录其他运算没法进行计算

function divide() {

    a = document.getElementById("resetin").value;

    x = false;
    c = "/";
}
//乘法函数
function mcl() {

    a = document.getElementById("resetin").value;
    x = false;
    c = "×";
}
//减法函数
function sub() {

    a = document.getElementById("resetin").value;
    // console.log(a);

    x = false;
    c = "－";
}
//加法函数
function add() {

    a = document.getElementById("resetin").value;
    x = false;
    c = "＋";
}
//等于函数
function equal() {


   /* console.log(a);
    console.log(b);*/
    y = false;
  /*  console.log(y);*/
    if (b != 0 && c == "/") {
        document.getElementById("resetin").value = parseFloat(Number(a) / Number(b)).toFixed(1);
        a = document.getElementById("resetin").value;
    } else if (b == 0 && c == "/") {
        document.getElementById("resetin").value = "函数结果未定义";
    } else if (c == "×") {
        document.getElementById("resetin").value = parseFloat(Number(a) * Number(b)).toFixed(1);
        a = document.getElementById("resetin").value;
    } else if (c == "－") {
        document.getElementById("resetin").value = (Number(a) - Number(b)).toFixed(1);
        a = document.getElementById("resetin").value;
    } else if (c == "＋") {
        document.getElementById("resetin").value = (parseFloat(Number(a) + Number(b)).toFixed(1));
        a = document.getElementById("resetin").value;
    }



}


/* function mdown1(){ document.getElementsByTagName("li")[0].style.background="linear-gradient(#4fb0dd, #bbdfed)"; } function up1(){ document.getElementsByTagName("li")[0].style.background="linear-gradient(#bbdfed,#4fb0dd)"; } function mdown2(){ document.getElementsByTagName("li")[0].style.background="linear-gradient(#4fb0dd, #bbdfed)"; } function up2(){ document.getElementsByTagName("li")[0].style.background="linear-gradient(#bbdfed,#4fb0dd)"; } function mdown3(){ document.getElementsByTagName("li")[0].style.background="linear-gradient(#4fb0dd, #bbdfed)"; } function up3(){ document.getElementsByTagName("li")[0].style.background="linear-gradient(#bbdfed,#4fb0dd)"; } function mdown4(){ document.getElementsByTagName("li")[0].style.background="linear-gradient(#4fb0dd, #bbdfed)"; } function up4(){ document.getElementsByTagName("li")[0].style.background="linear-gradient(#bbdfed,#4fb0dd)"; }
 */
