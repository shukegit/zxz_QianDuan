$(function() {
	
	
	/*
	 *首页图片模糊变化
	 * */
	$(".main_page_font").hover(function() {
 		$(".main_page_background").css("filter", "blur(2px)");
 	}, function() {
 		$(".main_page_background").css("filter", "blur(0px)");
 	});
	
	var flag = true;//判断导航栏是否返回的flag
	/*
	 * 首页切换图片
	 * */
	function change_img() {
		if(flag == true) {
			$(".main_page_background").css("opacity", "0.2");
    		$(".main_page_background").css("background-image", "url(img/main_background02.jpg)");
    		$(".main_page_background").animate({opacity : '1'}, 1000);
    		flag = false;
		} else {
			$(".main_page_background").css("opacity", "0.2");
    		$(".main_page_background").css("background-image", "url(img/main_background01.jpg)");
    		$(".main_page_background").animate({opacity : '1'}, 1000);
    		flag = true;
		}
	}
	setInterval(change_img, 5000);
	/*
	 * 设置首页图片、文字高度适应不同屏幕大小
	 */	
	var initHeight = $(window).height();
	function adapt_screen() {		
		var height = $(window).height();//浏览器显示内容的高度(从网址栏下面到开始菜单上面的部分)
		var temp = height;
		var fontPriority = height;
		//initHeight / 85 = fontpriority / x;//字体比例换算
		//initHeitht / 100 = fontpriority / y;//导航栏高度比例换算
		var x = 85 * fontPriority / initHeight;
		var y = 100 * fontPriority / initHeight;
		var z = 25 * fontPriority / initHeight;//导航栏字体
		$(".tab").css("margin-top", height);//设置导航栏的位置
		$(".main_page_background").css("height", height + "px");//调整背景图片
		$(".main_page_content").css("height", height + "px");//调整遮罩层
		$(".main_page_content").css("margin-top", "-" + height + "px");//调整遮罩层距离背景层的顶部距离
		height = Math.floor(height / 100) * 95; //设置首页按钮距离顶部的高度,取整
		$(".main_img_next_btn").css("margin-top",height + "px");
		height = Math.floor(height / 200) * 100
		$(".main_page_font").css("margin-top", height + "px");//设置文字高度
		$(".main_page_font").css("font-size", x);
		if(temp > 800) {
			$(".main_page_font").css("width", "36%");//设置首页文字的居中百分比
		} else {
			$(".main_page_font").css("width", "45%");//设置首页文字的居中百分比
		}
		
//		$(".tab_ul li").css("font-size", z);
//		$(".tab_ul").css("width", "60%" * fontPriority / initHeight);
		//五个栏目的高度
		$(".first_div").css("height", 1000);
		$(".second_div").css("height", 1400);
		$(".third_div").css("height", fontPriority);

//改动了height大小
		$(".forth_div").css("2000", fontPriority);
		$(".fifth_div").css("height", 1100);
		
		//导航栏的高度
		$(".tab").css("height", y);
//		
		
	}
	adapt_screen();
	
	
	/*
	 * 侧边的方框用于滑动到顶部
	 */
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
 	/**
 	 * 因为tab的高度为100px所以少移动tab的高度的距离
 	 */
 	$(".tab_li01").click(function() {
		/*跳转到第一个栏目所在的位置*/
		$("html,body").animate({scrollTop:$(".first_div").offset().top - 99},1000);
 	});
 	$(".tab_li02").click(function() {
		$("html,body").animate({scrollTop:$(".second_div").offset().top - 99},1000);
 	});
 	$(".tab_li03").click(function() {
		$("html,body").animate({scrollTop:$(".third_div").offset().top - 99},1000);
 	});
	$(".tab_li04").click(function() {
 		$("html,body").animate({scrollTop:$(".forth_div").offset().top - 99},1000);
 	});
 	$(".tab_li05").click(function() {
 		$("html,body").animate({scrollTop:$(".fifth_div").offset().top - 99},1000);
 	});
 	$(".tab_li06").click(function() {
 		$("html,body").animate({scrollTop:$(".tail_div").offset().top},1000);
 	});

 	
 	/* 
 	 * 设置点击主页上的箭头滑动到下一个栏目
	 */
	$(".main_img_next_btn").click(function() {
 		/*滚动到指定位置*/
 		$("html,body").animate({scrollTop:$(".first_div").offset().top - 99},1000);
 	});
 	/*设置主页上的箭头延时两秒出现*/
// 	setTimeout(function() {
// 		$(".main_img_next_btn").css('visibility','visible');//元素显示
// 	}, 2000);
 	
 	/**
 	 * 鼠标滚动触发
 	 */
 	var flagTab = false;
    $(window).on('scroll',function() {
    	//设置背景图片模糊
//  	if($(document).scrollTop() < 600) {
//  		var x = $(document).scrollTop() / 100 + 1;
//  		$(".main_page_background").css("filter", "blur(" + x + "px)");
//  	}
//  	if($(document).scrollTop() == 0) {
//  		$(".main_page_background").css("filter", "blur(0px)");
//  	}
    	//设置标题栏锁定
    	var height = $(window).height();
    	var x = $(document).scrollTop();
    	if(x > height) {
    		flagTab = true;
			$(".tab").css({"position": "fixed", "left": 0, "top": 0, "margin-top": 0});
    	} 
    	if(flagTab == true && x <= height) {
    		$(".tab").css({"margin-top": height, "position": "absolute"});
    	}
    });
    
	
	
	//页面缩放事件
	$(window).on("resize", function() {
		
		adapt_screen();
		
		
	});
});