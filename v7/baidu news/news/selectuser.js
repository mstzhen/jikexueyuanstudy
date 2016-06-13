
var d=11;
$(document).ready(function(){
	
   $(".channel").click(function(){
        
        var x=$(".channel").index(this); 
        d=x+11;
         getNewslist();
   });
  
});

function getNewslist(){
	 $.get("getuser.php",{data:d}, function(data) {
             document.getElementById("txtHint").innerHTML=data;
        });
}

function defaul(){
  $.get("getuser.php",{data:11}, function(data) {
             document.getElementById("txtHint").innerHTML=data;
        });
}








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