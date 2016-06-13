<?php
header("Content-type: text/html; charset=utf8"); 
$con = mysql_connect('localhost', 'root', 'root');
if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }

$id=$_GET['newid'];
mysql_select_db("news", $con);
mysql_query("set names utf8");
/*$sql="INSERT INTO newslist (catid,title,introduction) VALUES ('$catid','$title','$introduction')";
$result = mysql_query($sql);*/


$sqltwo="delete * FROM newslist where id=$id";
$resulttwo = mysql_query($sqltwo);

  echo "<tr>";
  echo "<td>"."<b>"."ID"."</b>"."</td>";
  echo "<td style='width:50px'>"."<b>"."分类"."</b>"."</td>";
  echo "<td>"."<b>"."标题"."</b>"."</td>";
  echo "<td>"."<b>"."简介"."</b>"."</td>";
  echo "<td style='width:80px'>"."<b>"."</b>"."</td>";
  echo "<td style='width:80px'>"."<b>"."</b>"."</td>";
  echo "</tr>";

while($row = mysql_fetch_array($resulttwo))
 {

 echo "<tr>";
 echo "<td>" . $row['id'] . "</td>";
 echo "<td>" . $row['catid'] . "</td>";
 echo "<td>" . $row['title'] . "</td>";
 echo "<td>" . $row['introduction'] . "</td>";
 echo "<td>" . "<strong>"."[编辑]"."</strong>" . "</td>";
echo "<td>" ."<a style='cursor:pointer' class='tablea'>". "<strong>"."[删除]"."</strong>" ."</a>". "</td>";
 echo "</tr>";
 }

mysql_close($con);
?>
