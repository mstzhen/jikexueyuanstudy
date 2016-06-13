<?php

$con = mysql_connect('localhost', 'root', 'root');
if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }

mysql_select_db("news", $con);
$cat_id=$_REQUEST['channel'];
switch ($cat_id) {
	case '推荐':
		$cat_id=11;
		break;
	case '百家':
	    $cat_id=12;
		break;
	case '本地':
		$cat_id=13;
		break;
	case '社会':
		$cat_id=14;
		break;
	case '搞笑':
		$cat_id=15;
		break;
	case '科技':
		$cat_id=16;
		break;
}
$title=$_REQUEST['newstitle'];
$introduction=$_REQUEST['newstrod'];

$sql="INSERT INTO 'newslist'('cat_id','title','introduction') VALUES ('".$cat_id."','".$title."','".$introduction."')";

$result = mysql_query($sql,$con);
if (!$result) {
	die('error：'.mysql_error());
}else{
	echo"update success";
}
mysql_close($con);
?>