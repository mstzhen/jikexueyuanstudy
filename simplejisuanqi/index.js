function result() {
    var x = document.getElementById("dataone").value;
    var y = document.getElementById("datatwo").value;
    var z = document.getElementById("datathree").value;

    if (!(x && y)) {

        if (x == "" && y == "") {
            alert("请输入'x'、'y'");
        }

        if (x != "" && y == "") {
            alert("请输入'y'");
        }
        if (x == "" && y != "") {
            alert("请输入'x'");
        }


    } else {
        if (z == "+") {
            alert(parseFloat(Number(x) + Number(y)).toFixed(2));
        }
        if (z == "-") {
            alert(parseFloat(Number(x) - Number(y)).toFixed(2));
        }
        if (z == "*") {
            alert(parseFloat(Number(x) * Number(y)).toFixed(2));
        }
        if (z == "/" && y == 0) {
            alert("除数不能为0");
        }
        if (z == "/") {
            alert(parseFloat(Number(x) / Number(y)).toFixed(2));
        }
        if (z == "%" && y == 0) {
            alert("余数不能为0");
        }
        if (z == "%") {
            alert(parseFloat(Number(x) % Number(y)).toFixed(2));
        }
    }
}

function judgea() {
    var a = document.getElementById("dataone").value;

    if (isNaN(a)) {
        alert("输入错误，请输入数字");
    }
    if (a == "") {
        alert("空，请输入数字")
    }


}

function judgeb() {

    var b = document.getElementById("datatwo").value;
    if (isNaN(b)) {
        alert("输入错误，请输入数字");
    }
    if (b == "") {
        alert("空，请输入数字")
    }
}

var arr=["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"]; //已知数组
        var count={};
        var posi={};

        arr.forEach(function(value,index){
            if (count[value]) {
                count[value]++;
                posi[value]+=","+index;
            }
            else{
                count[value]=1;
                posi[value]=""+index;
            }
        })
        console.log(count);
        console.log(posi);

        var max=0;
        var letter;
        for(i in count){
            if (count[i]>max) {
                max=count[i];
                letter=i;
            }
        }
        console.log("最多的位置:"+letter);
        console.log("位置分布："+posi[letter]);
            
    