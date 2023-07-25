var input = document.getElementsByTagName("input")[0]
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var plays = 0;
var num1;
var num2;
var result;

math()
function math(){
	num1 = Math.floor(Math.random() * 10);
	num2 = Math.floor(Math.random() * 10);
	question.innerHTML = num1+" + "+num2;
	plays == 10? end() : console.log(plays);
	return result = num1 + num2;
}

function get(num){
	console.log("get "+result)
	num == result? check(true) : check(false);
	math();
}

function check(a){
	input.value = "";
	input.focus();
	plays++
	answer.innerHTML = num1+" + "+num2+" = "+result;
	answer.className = a;
	document.getElementById("feedback").innerHTML += "<span class='"+a+"'>"+num1+" + "+num2+" = "+result+"</span><br/>";
}

function end(){
	question.innerHTML = "acabou"
	document.getElementsByTagName("main")[0].style.display = "none";
	document.getElementsByTagName("aside")[0].style.display = "flex";
}

function restart(){
	plays = 0;
	document.getElementById("feedback").innerHTML = "";
	document.getElementsByTagName("main")[0].style.display = "flex";
	document.getElementsByTagName("aside")[0].style.display = "none";
	math();
}

var eKey = document.addEventListener("keydown", (k) => {
	if(input.value != "" && (k.code == "Enter" || k.code == "NumpadEnter")){
		get(input.value);
	}
})