//求得最多出现次数函数
function time() {

    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"]; //已知数组
    var coder = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //编码数组
    var resetarr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"].sort();

    for (var i = 0; i <= arr.length; i++) {

        if (arr[0] == arr[i]) {
            coder[0]++;
        }
        if (arr[1] == arr[i]) {
            coder[1]++;
        }
        if (arr[2] == arr[i]) {
            coder[2]++;
        }
        if (arr[3] == arr[i]) {
            coder[3]++;
        }
        if (arr[4] == arr[i]) {
            coder[4]++;
        }
        if (arr[5] == arr[i]) {
            coder[5]++;
        }
        if (arr[6] == arr[i]) {
            coder[6]++;
        }
        if (arr[7] == arr[i]) {
            coder[7]++;
        }
        if (arr[8] == arr[i]) {
            coder[8]++;
        }
        if (arr[9] == arr[i]) {
            coder[9]++;
        }
        if (arr[10] == arr[i]) {
            coder[10]++;
        }

    }


    var resetcoder = (coder.sort(sortNumber));//对编码数组进行排序
    var y = resetcoder[10]; //最多出现几次
    document.getElementById("word").value =y; //赋值给输入框

    function sortNumber(a, b) {
        return a - b
    } //	为数字数组排序函数
}

//根据最多出现位置，找到出现最多次数字母函数
function who() {

    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"]; //已知数组
    var coder = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //编码数组

    for (var i = 0; i <= arr.length; i++) {
        if (arr[0] == arr[i]) {
            coder[0]++;
        }
        if (arr[1] == arr[i]) {
            coder[1]++;
        }
        if (arr[2] == arr[i]) {
            coder[2]++;
        }
        if (arr[3] == arr[i]) {
            coder[3]++;
        }
        if (arr[4] == arr[i]) {
            coder[4]++;
        }
        if (arr[5] == arr[i]) {
            coder[5]++;
        }
        if (arr[6] == arr[i]) {
            coder[6]++;
        }
        if (arr[7] == arr[i]) {
            coder[7]++;
        }
        if (arr[8] == arr[i]) {
            coder[8]++;
        }
        if (arr[9] == arr[i]) {
            coder[9]++;
        }
        if (arr[10] == arr[i]) {
            coder[10]++;
        }

    }

    var a = coder.join("");//数组转为字符串

    var x = a.indexOf("3"); //哪个字母出现次数最多

    document.getElementById("time").value = arr[x]; //输出
}

//根据以上条件，最多次数和字母，找到出现位置函数
function locatio() {
    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"]; //已知数组
    var c = arr.join("");//数组转为字符串
    var z1 = c.indexOf("a"); //出现位置1
    var z2 = c.indexOf("a", z1 + 1); //出现位置2
    var z3 = c.indexOf("a", z2 + 1); //出现位置3
    var z = [z1, z2, z3]; //所有出现位置
    document.getElementById("local").value = z; //输出
}
