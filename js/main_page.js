$(function() {
	var flag = true;
	/*首页切换图片*/
	function change_img() {
		if(flag == true) {
			$(".main_page_background").css("opacity", "0");
    		$(".main_page_background").css("background-image", "url(img/f75209df96d9084fec5d4fa932def3ff.jpg)");
    		$(".main_page_background").animate({opacity : '1'}, 1000);
    		flag = false;
		} else {
			$(".main_page_background").css("opacity", "0");
    		$(".main_page_background").css("background-image", "url(img/Work-Hard-Play-Harder-.jpg)");
    		$(".main_page_background").animate({opacity : '1'}, 1000);
    		flag = true;
		}
	}
	setInterval(change_img, 5000);
	
	
	/*滑动到顶部*/
	$.scrollUp({
	    scrollName : "goto_toppest",
        topDistance : "300",
        topSpeed : 1800,
        animation : "fade",
        animationInSpeed : 200,
        animationOutSpeed : 200,
        scrollText : "Scroll to top",
        activeOverlay : false
 	});
 	$(".tab_li01").click(function() {
		/*跳转到第一个栏目所在的位置*/
		$("html,body").animate({scrollTop:$(".second_div").offset().top},1000);
		
 	});
 	$(".tab_li02").click(function() {
   		alert(2);
 	});
 	$(".tab_li03").click(function() {
 		alert(3);
 	});
	$(".tab_li04").click(function() {
 		alert(4);
 	});
 	$(".tab_li05").click(function() {
 		alert(5);
 	});
 	$(".tab_li05").hover(function() {
 		$(".main_page_background").css("filter", "blur(1px)");
 	}, function() {
 		$(".main_page_background").css("filter", "blur(0px)");
 	});
 	/*设置点击主页上的按钮滑动到下一个栏目*/
	$(".main_img_next_btn").click(function() {
 		/*滚动到指定位置*/
 		$("html,body").animate({scrollTop:$(".second_div").offset().top},1000);
 	});
 	/*设置div延时显示*/
 	setTimeout(function() {
 		$(".main_img_next_btn").css('visibility','visible');//元素显示
 	}, 2000);
 	//鼠标滚动触发
    $(window).on('scroll',function() {
    	if($(document).scrollTop() < 600) {
    		var x = $(document).scrollTop() / 100 + 1;
    		$(".main_page_background").css("filter", "blur(" + x + "px)");
    	}
    	if($(document).scrollTop() == 0) {
    		$(".main_page_background").css("filter", "blur(0px)");
    	}
    	//设置标题栏
//  	if($(document).scrollTop() > 0) {			
//  		$(".tab_ul").css("margin-top", "25px");
//// 			$(".tab_ul").animate({marginTop : '25px'}, 500);
//  	} else {	
//  		$(".tab_ul").css("margin-top", "45px");
//// 			$(".tab_ul").animate({marginTop : '45px'}, 500);
//  	}
    });

});