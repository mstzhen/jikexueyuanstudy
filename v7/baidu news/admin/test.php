<?php
header("Content-type: text/html; charset=utf8"); 
$con = mysql_connect('localhost', 'root', 'root');
if (!$con)
 {
     die('Could not connect: ' . mysql_error());
 }
else
{
mysql_select_db("news", $con);
mysql_query("set names utf8");

$sql="INSERT INTO newslist (title,introduction) VALUES ('打击好','我好你')";
$result = mysql_query($sql);


}
