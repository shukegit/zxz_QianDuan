$(function() {
	var flag = true;
	/*首页切换图片*/
	function change_img() {
		if(flag == true) {
			$(".main_page_background").css("opacity", "0");
    		$(".main_page_background").css("background-image", "url(img/main_background02.jpg)");
    		$(".main_page_background").animate({opacity : '1'}, 1000);
    		flag = false;
		} else {
			$(".main_page_background").css("opacity", "0");
    		$(".main_page_background").css("background-image", "url(img/main_background01.jpg)");
    		$(".main_page_background").animate({opacity : '1'}, 1000);
    		flag = true;
		}
	}
	setInterval(change_img, 5000);
	//设置首页图片、文字高度适应不同屏幕大小
	function adapt_screen() {
		
		var height = $(window).height();//浏览器显示内容的高度(从网址栏下面到开始菜单上面的部分)
		$(".main_page_background").css("height", height + "px");//调整背景图片
		$(".main_page_content").css("height", height + "px");//调整遮罩层
		$(".main_page_content").css("margin-top", "-" + height + "px");//调整遮罩层距离背景层的顶部距离
		height = Math.floor(height / 100) * 100; //设置首页按钮距离顶部的高度,取整
		$(".main_img_next_btn").css("margin-top",height + "px");
		height = Math.floor(height / 200) * 100
		$(".main_page_font").css("margin-top", height + "px");//设置文字高度
	}
	adapt_screen();
	
	
	/*侧边的方框用于滑动到顶部*/
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
// 		alert(2);
		alert($(window).height());
		alert($(document.body).height());
		alert($(document).height());
 	});
 	$(".tab_li03").click(function() {
// 		alert(3);
		alert($(document.body).outerHeight(true));
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
 	/*设置点击主页上的箭头滑动到下一个栏目*/
	$(".main_img_next_btn").click(function() {
 		/*滚动到指定位置*/
 		$("html,body").animate({scrollTop:$(".second_div").offset().top},1000);
 	});
 	/*设置主页上的箭头延时两秒出现*/
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