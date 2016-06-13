//函数记载当前主题状态
function cookie(x) {
    if (x == 1) {
        redred();
    }

    if (x == 2) {
        blueblue();
    }
    if (x == 3) {
        greengreen();
    }
}
//切换红色主题
function redred() {

    document.getElementById('reapirnav').style.background = "#FF0033";
    document.getElementsByClassName('navli')[0].style.background = "#FF9966";
    document.getElementsByClassName('navli')[1].style.background = "#FF9966";
    document.getElementsByClassName('navli')[2].style.background = "#FF9966";
    document.getElementsByClassName('navli')[3].style.background = "#FF9966";
    document.getElementsByClassName('navli')[4].style.background = "#FF9966";
    document.getElementsByClassName('navli')[5].style.background = "#FF9966";
    document.getElementsByClassName('navli')[6].style.background = "#FF9966";

    document.getElementsByClassName('navli')[7].style.background = "#FF9966";
    document.getElementsByClassName('navli')[8].style.background = "#FF9966";
    document.getElementsByClassName('navli')[9].style.background = "#FF9966";
    window.localStorage.a = 1;


}
// 切换蓝色主题
function blueblue() {

    document.getElementById('reapirnav').style.background = "#3333CC";
    document.getElementsByClassName('navli')[0].style.background = "#6699FF";
    document.getElementsByClassName('navli')[1].style.background = "#6699FF";
    document.getElementsByClassName('navli')[2].style.background = "#6699FF";
    document.getElementsByClassName('navli')[3].style.background = "#6699FF";
    document.getElementsByClassName('navli')[4].style.background = "#6699FF";
    document.getElementsByClassName('navli')[5].style.background = "#6699FF";
    document.getElementsByClassName('navli')[6].style.background = "#6699FF";

    document.getElementsByClassName('navli')[7].style.background = "#6699FF";
    document.getElementsByClassName('navli')[8].style.background = "#6699FF";
    document.getElementsByClassName('navli')[9].style.background = "#6699FF";
    window.localStorage.a = 2;

}
//切换绿色主题
function greengreen() {

    document.getElementById('reapirnav').style.background = "#0c8d55";
    document.getElementsByClassName('navli')[0].style.background = "#0db265";
    document.getElementsByClassName('navli')[1].style.background = "#0db265";
    document.getElementsByClassName('navli')[2].style.background = "#0db265";
    document.getElementsByClassName('navli')[3].style.background = "#0db265";
    document.getElementsByClassName('navli')[4].style.background = "#0db265";
    document.getElementsByClassName('navli')[5].style.background = "#0db265";
    document.getElementsByClassName('navli')[6].style.background = "#0db265";

    document.getElementsByClassName('navli')[7].style.background = "#0db265";
    document.getElementsByClassName('navli')[8].style.background = "#0db265";
    document.getElementsByClassName('navli')[9].style.background = "#0db265";
    window.localStorage.a = 3;


}
//鼠标进入导航栏菜单颜色
function hovertwo(color) {

    if (document.getElementById('reapirnav').style.background == "rgb(51, 51, 204)") {
        document.getElementsByClassName('navli')[color].style.background = "#3333CC";
    } else if (document.getElementById('reapirnav').style.background == "rgb(255, 0, 51)") {
        document.getElementsByClassName('navli')[color].style.background = "#FF0033";
    } else if (document.getElementById('reapirnav').style.background == "rgb(12, 141, 85)") {
        document.getElementsByClassName('navli')[color].style.background = "#0c8d55";
    }


}
//鼠标划出菜单栏，菜单项目颜色
function hovertwoopp(color) {
    if (document.getElementById('reapirnav').style.background == "rgb(51, 51, 204)") {
        document.getElementsByClassName('navli')[color].style.background = "#6699FF";
    } else if (document.getElementById('reapirnav').style.background == "rgb(255, 0, 51)") {
        document.getElementsByClassName('navli')[color].style.background = "#FF9966";

    } else if (document.getElementById('reapirnav').style.background == "rgb(12, 141, 85)") {
        document.getElementsByClassName('navli')[color].style.background = "#0db265";

    }

}
