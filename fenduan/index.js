function myFunction() {
    var x = document.getElementById("score");
    var y = x.value;

    if (y <= 100 && y > 90) {
        alert("1等生");
    }
    
    else if(y <= 90 && y > 80) { alert("2等生"); }
    
    else if(y <= 80 && y > 70) { alert("3等生"); }
    
    else if(y <= 70 && y > 60) { alert("4等生"); }
    
    else if(y <= 60 && y > 50) { alert("5等生"); }
   
    else if(y <= 50 && y > 40) { alert("6等生"); }
    
    else if(y <= 40 && y > 30) { alert("7等生"); }
    
    else if(y <= 30 && y > 20) { alert("8等生"); }
    
    else if(y <= 20 && y > 10) { alert("9等生"); }
    
    else if(y <= 10 && y > 0) { alert("10等生"); }
    else { alert("请输入分数或者成绩为0或者数值输入有误"); }
        /*switch(n)
			{
				case 1:y<=100&&y>90;
				alert ("1等生");
				break;
				case 2:y<=90&&y>80;
				alert ("2等生");
				break;
				case 3:y<=80&&y>70;
				alert ("3等生");
				break;
				case 4:y<=70&&y>60;
				alert ("4等生");
				break;
				case 5:y<=60&&y>50;
				alert ("5等生");
				break;
				case 6:y<=50&&y>40;
				alert ("6等生");
				break;
				case 7:y<=40&&y>30;
				alert ("7等生");
				break;
				case 8:y<=30&&y>20;
				alert ("8等生");
				break;
				case 9:y<=20&&y>10;
				alert ("9等生");
				break;
				case 10:y<=10&&y>0;
				alert ("10等生");
				break;
				default:
				alert("请输入分数或者成绩为0");
			}
*/
}
