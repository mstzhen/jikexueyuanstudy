$(document).ready(function() {

    $.get("./php/dafult.php", function(data) {
    	alert(data);
        document.getElementById('moren').innerHTML = data;

    });

    $(".saveincrease").click(function() {

        if (document.getElementById("introduceinput").value == "" || document.getElementById("titleinput").value == "") {
            alert("标题和简介不能为空");
        } else {
            save();
            empty();
        }

    })
});

function save() {

    var x = document.getElementById("channel").value;
    var y = document.getElementById("titleinput").value;
    var z = document.getElementById("introduceinput").value;
    $.get("./php/admin.php", { channel: x, newstitle: y, newstrod: z }, function(data) {
        alert('已保存');
        /*var table=document.getElementById('moren');
        table.appendChild(data);*/
     document.getElementById('moren').innerHTML = data;
    });

}

function empty() {
    $(".titleinput").val("");
    $(".introduceinput").val("");
}

/*function delet(){

    var relation=document.getElementsByClassName("tablea").this.parentNode.parentNode.firstChild.innerHTML;
    alert (relation);
    var newid=document.getElementsByClassName("id")[relation-5].innerHTML;
                 $.get("wipe.php", {newid:newid}, function(data) {
                 alert('已删除');
                 alert(data);
                 document.getElementById('moren').innerHTML = data;
    })
            
}
*/
