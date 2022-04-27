function on1clicked(){
	console.log("!1!");
	document.getElementById("p1").style.color = "red";
	alert("1");
}
function on2clicked(){
	console.log("!2!");
	alert("2");
	var t = new Date();
	var y = t.getFullYear();
	var m = t.getMonth()+1;
	var d = t.getDate();
	if (m< 10) m = '0' + m;
  	if (d< 10) d = '0' + d;
	document.getElementById("h1").innerHTML = y+"-"+m+"-"+d;
}
function on3clicked(){
	console.log("!3!");
	alert("3");

	var a = document.getElementById('ul').children;
	console.log(a.length);
	for(var i=0; i<a.length; i++){
		console.log(a[i]);
		a[i].classList.add("fn-active");
	}	

}
function on4clicked(){
	console.log("!4!");
	alert("4");
	var p8 = document.getElementById("p8");
	if( p8 != null)
		p8.parentNode.removeChild(p8);
// }
}
function on5clicked(){
	console.log("!5!");
	alert("5");
	window.open("https://uland.taobao.com/")
}
function on6clicked(){
	console.log("!6!");
	alert("6");
	var p9 = document.createElement("li");
	document.getElementById("ul").appendChild(p9);
	p9.innerHTML = "p9";

}

function on7clicked(){
	console.log("!7!");
	alert("7");
	document.getElementById("box").style.width = "100%";
}
function on8clicked(){
	console.log("!8!");
	alert("8");
}