const make =(a)=> {return document.getElementById(a)};
const onclk = (a,b)=> {make(a).addEventListener('click',b)}
const hide =(a)=> {make(a).style.display = 'none'}
const show =(a)=> {make(a).style.display = 'flex'}

var n=3;
var num = document.querySelectorAll('#m-board3-list>li :nth-child(1)');
var delbt = document.querySelectorAll('#m-board3-list>li :nth-child(3)');
show("m-board1");
hide("m-board2");
hide("m-board3");
hide("bigboard");

onclk("m-menu-bt1",()=>{
	show("m-board1");
	hide("m-board2");
	hide("m-board3");
})

onclk("m-menu-bt2",()=>{
	show("m-board2");
	hide("m-board1");
	hide("m-board3");
})

onclk("m-menu-bt3",()=>{
	show("m-board3");
	hide("m-board1");
	hide("m-board2");
})

for(i=1;i<=6;i++){
	onclk("img"+i,
	function(e){
	let t = e.currentTarget;
	make("bigboard").setAttribute("src",t.src);
	show("bigboard");
})
}

onclk("bigboard",()=>hide("bigboard"));




function reload(){
	num = document.querySelectorAll('#m-board3-list>li :nth-child(1)');
	delbt = document.querySelectorAll('#m-board3-list>li :nth-child(3)');
	for(i=0;i<delbt.length;i++){
		num[i].innerText = i+1;
		delbt[i].addEventListener('click',function(e){
			let t = e.currentTarget;
			t.parentNode.remove();
			reload();
			n--;
		})
	}
}

reload();		


onclk("m-board3-add",function(e){
	if(n<7){
		var li = document.createElement("li");
		make("m-board3-list").appendChild(li);
		n++;
		reload();
		li.innerHTML="<div>"+(num.length+1)+"</div><div></div><div>Delete</div>";
	}
	
})





