$(document).ready(function randomColor(){
	var num1 = 1 + Math.floor(Math.random() * 255);
	var num2 = 1 + Math.floor(Math.random() * 255);
	var num3 = 1 + Math.floor(Math.random() * 255);
	$("body").animate({"background-color":"rgb("+num1+","+num2+","+num3+")"}, 5000);
	setTimeout(randomColor, 5000);
});


	
