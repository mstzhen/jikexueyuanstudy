
var d=11;
$(document).ready(function(){
	
   $(".channel").click(function(){
        
        var x=$(".channel").index(this); 
        d=x+11;
         getNewslist();
   });
  
});

function getNewslist(){
	 $.get("/datanews",{name:d}, function(data) {
             for(var i=0;i<data.length;i++){
        var div=$("<div></div>");
          var h3=$("<h3></h3>");
          h3.text(data[i]["title"]);
          var p1=$("<p></p>");
          var p2=$("<p></p>");
          p1.text(data[i]["introduction"]);
          p2.text(data[i]["created"]);
          div.append(h3);
          div.append(p1);
          div.append(p2);
        }
        $("#txtHint").append(div);
        });
}

function default(){
  $.get("/datanews",{name:11}, function(data) {
            for(var i=0;i<data.length;i++){
        var div=$("<div></div>");
          var h3=$("<h3></h3>");
          h3.text(data[i]["title"]);
          var p1=$("<p></p>");
          var p2=$("<p></p>");
          p1.text(data[i]["introduction"]);
          p2.text(data[i]["created"]);
          div.append(h3);
          div.append(p1);
          div.append(p2);
        }
        $("#txtHint").append(div);
        });
}

/*function getNewslist(){
  $.ajax({
      url:"/datanews",
      type:"post",
      dataType:"json",
      data:{"catid":d },

      success:function(data){
        for(var i=0;i<data.length;i++){
        var div=$("<div></div>");
          var h3=$("<h3></h3>");
          h3.text(data[i]["title"]);
          var p1=$("<p></p>");
          var p2=$("<p></p>");
          p1.text(data[i]["introduction"]);
          p2.text(data[i]["created"]);
          div.append(h3);
          div.append(p1);
          div.append(p2);
        }
        $("#txtHint").append(div);
      }

   })
  
}
function default(){

   $.ajax({
      url:"/datanews",
      type:"post",
      dataType:"json",
      data:{"catid":d},

      success:function(data){
        for(var i=0;i<data.length;i++){
          var div=$("<div></div>");
          var h3=$("<h3></h3>");
          h3.text(data[i]["title"]);
          var p1=$("<p></p>");
          var p2=$("<p></p>");
          p1.text(data[i]["introduction"]);
          p2.text(data[i]["created"]);
          div.append(h3);
          div.append(p1);
          div.append(p2);
        }
        $("#txtHint").append(div);
      }

   })
  
}


*/



/*var xmlHttp

function showUser(num)
{ 
xmlHttp=GetXmlHttpObject()
if (xmlHttp==null)
 {
 alert ("Browser does not support HTTP Request")
 return
 }
var url="getuser.php";
url=url+"?q="+num;
xmlHttp.onreadystatechange=stateChanged ;
xmlHttp.open("GET",url,true);
xmlHttp.responseType = '';
xmlHttp.send();
}

function stateChanged() 
{ 
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 { 

 document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
 console.log(xmlHttp.responseText);
 } 
}

function GetXmlHttpObject()
{
var xmlHttp=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 xmlHttp=new XMLHttpRequest();
 }
catch (e)
 {
 //Internet Explorer
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return xmlHttp;
}*/