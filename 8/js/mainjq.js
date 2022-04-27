$(init);
$(".m-board3").fadeOut(1);
$(".m-board2").fadeOut(1);
$(".m-board1").fadeIn(1);
$(".bigboard").fadeOut(1);
var n = 3; 
function init() {
	$("body").on('click','.m-menu-bt1',function(){
		$(".m-board3").fadeOut(1);
		$(".m-board2").fadeOut(1);
		$(".m-board1").fadeIn(1);
	})

	$("body").on('click','.m-menu-bt2',function(){
		$(".m-board1").fadeOut(1);
		$(".m-board3").fadeOut(1);
		$(".m-board2").fadeIn(1);
	})

	$("body").on('click','.m-menu-bt3',function(){
		$(".m-board1").fadeOut(1);
		$(".m-board2").fadeOut(1);
		$(".m-board3").fadeIn(1);
	})

	$("body").on('click','.m-board1>li',function(e){
		$(".bigboard").fadeIn(500);
		$(".bigboard").attr('src',$(this).attr('src'));
	})

	$('body').on('click','.bigboard',function(e) {
        $(".bigboard").fadeOut(500);
	});

	$('body').on('click','.m-board3-list>li :nth-child(3)',function() {
        $(this).parent().remove();
        n--;
        reload();
	});

	$('body').on('click','.m-board3-add',function() {
		if(n<7){	
			n++;
			$(".m-board3-list").append("<li><div>"+n+"</div> <div></div> <div>Delete</div> </li>");
        	reload();
		}
        				
	});
}

function reload(){
	var len=$(".m-board3-list>li").length;
	console.log(len);
	for(i=0;i<len;i++){
		$('.m-board3-list li:eq('+i+') :nth-child(1)').text(i+1);
	}		
}