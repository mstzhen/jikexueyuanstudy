<?php

header("Content-type: text/html; charset=utf-8"); 
$q=$_GET["data"];
$con = mysql_connect('localhost', 'root', 'root');
if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }

mysql_select_db("news", $con);

mysql_query ("set names utf8");
$sql="SELECT * FROM newslist WHERE cat_id=$q";


$result = mysql_query($sql);


echo "<ul>";

while($row = mysql_fetch_array($result))
 {

 echo "<li>";
 echo "<h3>" . $row['title'] . "</h3>";
 echo "<p>" . $row['introduction'] . "</p>";
 echo "<p>" . $row['created'] . "</p>";
 echo "</li>";
 }

echo "</ul>";
mysql_close($con);
?>