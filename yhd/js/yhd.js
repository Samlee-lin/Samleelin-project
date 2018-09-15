//登录界面input点击去掉value
$(function(){
	$(".loginBox_content_h2>input[type = 'text']").focus(function(){
		if($(this).val() == "邮箱/手机/用户名"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val() == ""){
			$(this).val("邮箱/手机/用户名");
		}
	})
})

//登录界面（更多合作网站）下拉
$(function(){
	$(".loginBox_content_more p").toggle(function(){
		$(".loginBox_content_more_web").show();
	},function(){
		$(".loginBox_content_more_web").hide();
	})
})

//登录界面勾选显示提示
$(function(){
	$(".loginBox_content_h3 input").change(function(){//多选框状态改变时，根据提示的display属性判断是否将其显示或隐藏
		var disp = $(this).siblings("font").css('display')
		if(disp =="none"){
			$(this).siblings("font").show();
		}else{
			$(this).siblings("font").hide();
		}
	})
})

//注册界面输入框验证
$(function(){
	var regUser = /^[a-zA-z0-9]{4,19}$/;//正则，验证用户名
	var regPhone = /^1\d{10}$/;//正则，验证手机号
	var regCode = /^[0-9a-zA-z]{6}$/;//正则，验证验证码
	var regPassword = /^[0-9a-zA-z]{6,16}$/;//正则，验证密码
	$(".registerBox .input_insert").focus(function(){//获得焦点，将.input_lable左移
		$(this).siblings(".input_lable").animate({left:"-80px"});
		if($(this).val() == ""){//输入框为空，显示.tip
			$(this).siblings(".tip").show();
		}else if($(this).val() !== ""){//输入框为空，隐藏.tip
			$(this).siblings(".tip").hide();
			$(this).siblings(".tip_false").hide();
		}
	})
	$(".registerBox .input_insert").blur(function(){//失去焦点，将.tip隐藏，验证输入框的值是否正确，触发相应提示
		$(this).siblings(".tip").hide();
		var inputId= $(this).attr("id");
		if($(this).val() == ""){//若输入框的值为空，则.tip_false提示不能为空
			switch (inputId){
				case "user":
					$(this).siblings(".tip_false").find("p").text("用户名不能为空");
					break;
				case "phone":
					$(this).siblings(".tip_false").find("p").text("手机号不能为空");
					break;
				case "code":
					$(this).siblings(".tip_false").find("p").text("验证码不能为空");
					break;
				case "password":
					$(this).siblings(".tip_false").find("p").text("密码不能为空");
					break;
				case "passwordre":
					$(this).siblings(".tip_false").find("p").text("确认密码不能为空");
					break;	
				default:
					break;
			}
			$(this).siblings(".tip_false").show();			
		}else if($(this).val() !== ""){//若输入框的值不为为空，则进一步验证值格式是否正确，触发响应显示事件
//			$(this).siblings(".tip_false").hide();
			switch (inputId){//验证用户名
				case "user":
					if(regUser.test($(this).val()) == false){
						$(this).siblings(".tip_false").find("p").text("用户名格式错误，请重新填写");
						$(this).siblings(".tip_false").show();	
					}else{
						$(this).siblings(".tip_false").hide();
					}
					break;
				case "phone"://验证手机号
					if(regPhone.test($(this).val()) == false){
						$(this).siblings(".tip_false").find("p").text("手机格式错误，请重新填写");
						$(this).siblings(".tip_false").show();	
					}else{
						$(this).siblings(".tip_false").hide();
					}
					break;
				case "code"://验证验证码
					if(regCode.test($(this).val()) == false){
						$(this).siblings(".tip_false").find("p").text("验证码格式错误，请重新填写");
						$(this).siblings(".tip_false").show();	
					}else{
						$(this).siblings(".tip_false").hide();
					}
					break;
				case "password"://验证密码
					if(regPassword.test($(this).val()) == false){
						$(this).siblings(".tip_false").find("p").text("密码格式错误");
						$(this).siblings(".tip_false").show();	
					}else{
						$(this).siblings(".tip_false").hide();
					}
					break;
				case "passwordre"://验证确认密码
					if($(this).val() !== $("#password").val()){
						$(this).siblings(".tip_false").find("p").text("两次密码不相同，请重新输入");
						$(this).siblings(".tip_false").show();	
					}else{
						$(this).siblings(".tip_false").hide();
					}
					break;	
				default:
					break;
			}
		}
	})
})

//帮助中心下拉
$(function(){
	$(".header_LR_right .drop_help").hover(function(){
		$(".header_LR_right .drop_help ul").show();
//		$(".header_LR_right>ul").addClass("headr_LR_right_ul_hover");
		$(".header_LR_right .drop_help p").addClass("drop_help_hover");
	},function(){
		$(".header_LR_right .drop_help ul").hide();
		$(".header_LR_right .drop_help p").removeClass("drop_help_hover");
	})
})

//送货地址点击弹出
$(function(){
	$(".header_main_left").click(function(e){
		$(".header_main_left>a").addClass("city_select");
		$(".header_main_left>div").show();
		$(document).one("click",function(){
			$(".header_main_left>a").removeClass("city_select");
			$(".header_main_left>div").hide();
		})
		e.stopPropagation();
	})
	$(".header_main_left>div").on("click",function(e){
		e.stopPropagation();
	})
//	$(".header_main_left").toggle(function(){
//		$(".header_main_left>a").addClass("city_select");
//		$(".header_main_left>div").show();
//	},function(){
//		$(".header_main_left>a").removeClass("city_select");
//		$(".header_main_left>div").hide();
//	})
	$(".drop_selectcity ul li:first-of-type span").click(function(){
		$(".header_main_left>a").removeClass("city_select");
		$(".header_main_left>div").hide();
	})
})


//客户服务下拉
$(function(){
	$(".header_main_right ul li:nth-of-type(4)").hover(function(){
		$(".header_main_right ul li:nth-of-type(4)").addClass("cserver_select");
		$(".header_main_right ul li:nth-of-type(4)>ul").show();
	},function(){
		$(".header_main_right ul li:nth-of-type(4)").removeClass("cserver_select");
		$(".header_main_right ul li:nth-of-type(4)>ul").hide();
	})
})

//搜索的下拉记录
$(function(){
	$(".search_main>input").click(function(e){
		$(".input_drop").show();
		$(document).one("click",function(){
			$(".input_drop").hide();
		})
		e.stopPropagation();
	})
	$(".input_drop").on("click", function(e){
    	e.stopPropagation();
	});
//	$(".search_main>input").blur(function(){
//		$(".input_drop").hide();
//	})
//	$(".input_drop_l_head span").click(function(){
//		$(".input_drop_l_detail>ul").hide();
//	})
})

//购物车 （这个不使用）
//$(function(){
//	$(".shoppingcart").hover(function(){ //鼠标移动显示购物车
//		$(".shoppingcart_drop").show();
//	},function(){
//		$(".shoppingcart_drop").hide();
//	})    
//	
//	$(".shoppingcart_drop .btn_minus").click(function(){//减
//		var num = $(this).next(".input_num").val();
//		var price = $(this).siblings(".pricep").text();
//		if(num >0){
//			num--;
//			$(this).next(".input_num").val(num);
//			price = price*num;
//			$(this).siblings(".count_span").find("font").text(price);
//			$(this).parent().parent().siblings(".shoppingcart_drop_head").find("font").text(num);
//		}else{
////			$(this).next(".input_num").css("color","red");
//		}	
//	})
//	$(".shoppingcart_drop .btn_puls").click(function(){//加
//		var num = $(this).prev(".input_num").val();
//		var price = $(this).siblings(".pricep").text();
//		if(num >=0){
//			num++;
//			$(this).prev(".input_num").val(num);	
//			price = price*num;
//			$(this).siblings(".count_span").find("font").text(price);
//			$(this).parent().parent().siblings(".shoppingcart_drop_head").find("font").text(num);
//		}else{
//			
//		}	
//	})
//	
//	$(".shoppingcart_drop .delete_span").click(function(){
////		var answer = prompt("确定删除吗？");	
//		$(this).parent().parent().parent().hide();
//	})
//})


//主要部分1 左侧分类
$(function(){
	$(".main_first_sort>ul>li").hover(function(){
		$(this).addClass("li_back");
		$(this).children(".main_first_sort_more").show();
		$(this).children(".main_first_sort_details").addClass("detaila_hover");
		$(this).children(".main_first_sort_spanright").addClass("spanright_hover");
	},function(){
		$(this).removeClass("li_back");
		$(this).children(".main_first_sort_more").hide();
		$(this).children(".main_first_sort_details").removeClass("detaila_hover");
		$(this).children(".main_first_sort_spanright").removeClass("spanright_hover");
	})
})

//主要部分1 图片轮播
$(function(){	
		var num=0;
		var length = $(".lunbo_pic_img>ul>li").length;
		var timer = null;	
	function slideimg(){	//定义一个轮播函数
		if(num != length){
			$(".lunbo_pic_img>ul>li").eq(num).fadeIn("slow");
			$(".lunbo_pic_control>div").eq(num).siblings("div").removeClass("span_circle_hover");
			$(".lunbo_pic_control>div").eq(num).addClass("span_circle_hover");	
			$(".lunbo_pic_img>ul>li").eq(num).siblings("li").hide();
			num++;
		}else{
			num = 0;
			$(".lunbo_pic_img>ul>li").eq(num).fadeIn("slow");
			$(".lunbo_pic_control>div").eq(num).siblings("div").removeClass("span_circle_hover");
			$(".lunbo_pic_control>div").eq(num).addClass("span_circle_hover");	
			$(".lunbo_pic_img>ul>li").eq(num).siblings("li").hide();
		}
	}
	$(".lunbo_pic").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(slideimg,3000);
	})
	$(".lunbo_pic_control>div").hover(function(){   //图片中的原点的hover事件
		var index = $(".lunbo_pic_control>div").index(this);
		num = index;
		$(".lunbo_pic_img>ul>li").eq(num).fadeIn("slow");
		$(".lunbo_pic_control>div").eq(num).siblings("div").removeClass("span_circle_hover");
		$(".lunbo_pic_control>div").eq(num).addClass("span_circle_hover");	
		$(".lunbo_pic_img>ul>li").eq(num).siblings("li").hide();
		clearInterval(timer);
		timer = setInterval(slideimg,3000);
	})
	$(".lunbo_pic").hover(function(){//鼠标移动到图片显示左右箭头
		$(".lunbo_pic_dir").show();
	},function(){
		$(".lunbo_pic_dir").hide();
	})
	$(".b_left").click(function(){
		if(num>0){
			num--;
			$(".lunbo_pic_img>ul>li").eq(num).fadeIn("slow");
			$(".lunbo_pic_control>div").eq(num).siblings("div").removeClass("span_circle_hover");
			$(".lunbo_pic_control>div").eq(num).addClass("span_circle_hover");	
			$(".lunbo_pic_img>ul>li").eq(num).siblings("li").hide();
			clearInterval(timer);
			timer = setInterval(slideimg,3000);
		}else{
			num = 2;
			$(".lunbo_pic_img>ul>li").eq(num).fadeIn("slow");
			$(".lunbo_pic_control>div").eq(num).siblings("div").removeClass("span_circle_hover");
			$(".lunbo_pic_control>div").eq(num).addClass("span_circle_hover");	
			$(".lunbo_pic_img>ul>li").eq(num).siblings("li").hide();
			clearInterval(timer);
			timer = setInterval(slideimg,3000);
		}
	})
	$(".b_right").click(function(){
		if(num<2){
			num++;
			$(".lunbo_pic_img>ul>li").eq(num).fadeIn("slow");
			$(".lunbo_pic_control>div").eq(num).siblings("div").removeClass("span_circle_hover");
			$(".lunbo_pic_control>div").eq(num).addClass("span_circle_hover");	
			$(".lunbo_pic_img>ul>li").eq(num).siblings("li").hide();
			clearInterval(timer);
			timer = setInterval(slideimg,3000);
		}else{
			num = 0;
			$(".lunbo_pic_img>ul>li").eq(num).fadeIn("slow");
			$(".lunbo_pic_control>div").eq(num).siblings("div").removeClass("span_circle_hover");
			$(".lunbo_pic_control>div").eq(num).addClass("span_circle_hover");	
			$(".lunbo_pic_img>ul>li").eq(num).siblings("li").hide();
			clearInterval(timer);
			timer = setInterval(slideimg,3000);
		}
	})
	clearInterval(timer);
	timer = setInterval(slideimg,3000);
})

//文字向上轮播
$(function(){
	var timer = setInterval('autoScroll(".main_first_news_box_msg")',3000);
	$(".main_first_news_box_msg_lunbo").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval('autoScroll(".main_first_news_box_msg")',3000);
	})
})
function autoScroll(obj){
   		$(obj).find(".main_first_news_box_msg_lunbo").animate({marginTop : "-30px"},500,function(){
   			$(this).css("margin-top","0px").find("p:first").appendTo(this);
   		});
   	}

//首页抢购、热门的轮播
$(function(){
	var iclick = true;
	var moveSize = 1020;
	var $content = $(".main_second_right_box");
	var num = 1;
	var numMax = 3;
	$(".main_second_right").hover(function(){//设置鼠标hover显示箭头事件
		if(num == 1){//若显示为第一排，则只显示右箭头
			$(".main_second_right_control_r").animate({
				right:"5px"
			},300);
		}else if(num == numMax){//若显示为最后一排，则只显示左箭头
			$(".main_second_right_control_l").animate({
				left:"5px"
			},300);
		}else{//若显示为其他排，则显示左右箭头
			$(".main_second_right_control_l").animate({
				left:"5px"
			},300);
			$(".main_second_right_control_r").animate({
				right:"5px"
			},300);
		}
	},function(){//鼠标移走时，左右箭头消失
			$(".main_second_right_control_l").animate({
				left:"-20px"
			},300);
			$(".main_second_right_control_r").animate({
				right:"-20px"
			},300);
	})
	$(".main_second_right_control_r").click(function(){//设置右箭头click事件
		if(num<numMax-1){
			num++;
			$content.animate({
				left:-(moveSize *(num-1)) +'px'
			},500);
			$(".main_second_right_control_l").animate({
				left:"5px"
			},300);
		}else if(num == numMax-1){
			num++;
			$content.animate({
				left:-(moveSize *(num-1)) +'px'
			},500);
			$(".main_second_right_control_r").animate({
				right:"-20px"
			},300);
		}else{
			
		}
	})
	$(".main_second_right_control_l").click(function(){//设置左箭头click事件
		if(num>2){
			num--;
			$content.animate({
				left:-(moveSize *(num-1)) +'px'
			},500);
			$(".main_second_right_control_r").animate({
				right:"5px"
			},300);
		}else if(num==2){
			num--;
			$content.animate({
				left:-(moveSize *(num-1)) +'px'
			},500);
			$(".main_second_right_control_l").animate({
				left:"-20px"
			},300);
			$(".main_second_right_control_r").animate({
				right:"5px"
			},300);
		}else{
			
		}
	})
})
//$(function(){
//	var moveSize = 255;
//	var $content = $(".main_second_right>ul");
//	var num = 1;
//	var length = 2;
//	var timer = null;
//	var dir = 0;//默认正方向
//	function moveP(){//设置图片轮播
//		if(dir == 0){
//			if(num<5){
//				num++;
//				$content.animate({
//					left:-(moveSize * (num-1)) +'px'
//				},1000,"linear")
//				.delay(3000);
//			}else{
//				dir = 1;
//			}
//		}else if(dir == 1){
//			if(num>1){
//				num--;
//				$content.animate({
//					left:-(moveSize * (num-1)) +'px'
//				},1000,"linear")
//				.delay(3000);
//			}else{
//				dir = 0;
//			}	
//		}
//	}
//	$(".main_second_right").hover(function(){//鼠标放置，停止轮播，显示箭头
//		clearInterval(timer);
//		$(".main_second_right_control").show();
//	},function(){
//		timer = setInterval(moveP,5000);
//		$(".main_second_right_control").hide();
//	})
//	
//	$(".main_second_right_control_l").click(function(){//左箭头
//		if(num>1){
//			num--;
//			$content.animate({
//			left:-(moveSize * (num-1)) +'px'
//			},1000,"linear");
//		dir = 1;
//		}else{
//			dir = 0;
//		}
//		clearInterval(timer);
//		timer = setInterval(moveP,5000);
//	})
//	$(".main_second_right_control_r").click(function(){//右箭头
//		if(num<5){
//			num++;
//			$content.animate({
//			left:-(moveSize * (num-1)) +'px'
//			},1000,"linear");
//			dir = 0;
//		}else{
//			dir = 1;
//		}
//		clearInterval(timer);
//		timer = setInterval(moveP,5000);
//	clearInterval(timer);
//	timer = setInterval(moveP,5000);
//})


//进口 生鲜...那些分类的图片轮播
$(function(){
	var $content = $(".main_third .main_third_mian_l_up_img");
	var piclength = $(".main_third .main_third_mian_l_up_img>a").length; //图片总数
	var num = 1; //初始计数
	var moveSize = 211;  //移动的距离
	var timer = null;  //定时器
	function movePic(){
		if(num != piclength){
			$content.animate({
				left: -(moveSize * num) + 'px'
				},1000)
			.delay(1000); //左移动
			num++;
		}else{
			num =1;
			$content.animate({
				left: -(moveSize * (num -1)) + 'px'
				},1000)
			.delay(1000); //左移动
		}
	}
	$content.hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(movePic,3000);
	})
	$(".main_third .pic_left").click(function(){
		num--;
		if(num > 0){
			$content.animate({
				left: -(moveSize * (num-1)) + 'px'
				},1000);
		}else{
			num = piclength;
			$content.animate({
				left: -(moveSize * (num-1)) + 'px'
				},1000);
		}
		clearInterval(timer);
		timer = setInterval(movePic,3000);
	})
	$(".main_third .pic_right").click(function(){
		num++;
		if(num > piclength){
			num = 0;
			$content.animate({
				left: -(moveSize * num) + 'px'
				},1000);
		}else{
			$content.animate({
				left: -(moveSize * (num-1) )+ 'px'
				},1000);
		}
		clearInterval(timer);
		timer = setInterval(movePic,3000);
	})	
	clearInterval(timer);
	timer = setInterval(movePic,3000);
})
//个人美妆的图片轮播
$(function(){
	var $content = $(".main_fourth .main_third_mian_l_up_img");
	var piclength = $(".main_fourth .main_third_mian_l_up_img>a").length; //图片总数
	var num = 1; //初始计数
	var moveSize = 211;  //移动的距离
	var timer = null;  //定时器
	function movePic(){
		if(num != piclength){
			$content.animate({
				left: -(moveSize * num) + 'px'
				},1000)
			.delay(1000); //左移动
			num++;
		}else{
			num =1;
			$content.animate({
				left: -(moveSize * (num -1)) + 'px'
				},1000)
			.delay(1000); //左移动
		}
	}
	$content.hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(movePic,3000);
	})
	$(".main_fourth .pic_left").click(function(){
		num--;
		if(num > 0){
			$content.animate({
				left: -(moveSize * (num-1)) + 'px'
				},1000);
		}else{
			num = piclength;
			$content.animate({
				left: -(moveSize * (num-1)) + 'px'
				},1000);
		}
		clearInterval(timer);
		timer = setInterval(movePic,3000);
	})
	
	$(".main_fourth .pic_right").click(function(){
		num++;
		if(num > piclength){
			num = 0;
			$content.animate({
				left: -(moveSize * num) + 'px'
				},1000);
		}else{
			$content.animate({
				left: -(moveSize * (num-1) )+ 'px'
				},1000);
		}
		clearInterval(timer);
		timer = setInterval(movePic,3000);
	})
	clearInterval(timer);
	timer = setInterval(movePic,4000);
})
//母婴玩具的图片轮播
$(function(){
	var $content = $(".main_fifth .main_third_mian_l_up_img");
	var piclength = $(".main_fifth .main_third_mian_l_up_img>a").length; //图片总数
	var num = 1; //初始计数
	var moveSize = 211;  //移动的距离
	var timer = null;  //定时器
	function movePic(){
		if(num != piclength){
			$content.animate({
				left: -(moveSize * num) + 'px'
				},1000)
			.delay(1000); //左移动
			num++;
		}else{
			num =1;
			$content.animate({
				left: -(moveSize * (num -1)) + 'px'
				},1000)
			.delay(1000); //左移动
		}
	}
	$content.hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(movePic,3000);
	})
	$(".main_fifth .pic_left").click(function(){
		num--;
		if(num > 0){
			$content.animate({
				left: -(moveSize * (num-1)) + 'px'
				},1000);
		}else{
			num = piclength;
			$content.animate({
				left: -(moveSize * (num-1)) + 'px'
				},1000);
		}
		clearInterval(timer);
		timer = setInterval(movePic,6000);
	})
	$(".main_fifth .pic_right").click(function(){
		num++;
		if(num > piclength){
			num = 0;
			$content.animate({
				left: -(moveSize * num) + 'px'
				},1000);
		}else{
			$content.animate({
				left: -(moveSize * (num-1) )+ 'px'
				},1000);
		}
		clearInterval(timer);
		timer = setInterval(movePic,3000);
	})	
	clearInterval(timer);
	timer = setInterval(movePic,5000);
})

//分类详情sort.html中购物车前的加和减操作和商品的hover效果
$(function(){
	$(".shangp_box_buy .num_up").click(function(){//加操作
		var num = $(this).parent().siblings("input").val();
		num++;
		$(this). parent().siblings("input").val(""+num+"");
	})
	$(".shangp_box_buy .num_down").click(function(){//减操作
		var num = $(this).parent().siblings("input").val();
		if(num>1){
			num--;
		$(this).parent().siblings("input").val(""+num+"");
		}	
	})
	
	//分类的类型的点击效果
	$(".sortmain_first_selecet_top ul li").click(function(){
		$(this).addClass("sortmain_first_selecet_top_selected");
		$(this).siblings("li").removeClass("sortmain_first_selecet_top_selected");
		var index = $(".sortmain_first_selecet_top ul li").index(this);
		if(index != 0){
			$(this).addClass("sortmain_first_selecet_top_selected2");
			$(this).siblings("li").removeClass("sortmain_first_selecet_top_selected2");
		}else{
			$(this).addClass("sortmain_first_selecet_top_selected");
			$(this).siblings("li").removeClass("sortmain_first_selecet_top_selected");
			$(this).siblings("li").removeClass("sortmain_first_selecet_top_selected2");
		}
	})
	
//	$(".shangp_box_img").hover(function(){//鼠标移至商品添加样式
//		$(this).addClass("shangp_box_img_hover");
//	},function(){
//		$(this).removeClass("shangp_box_img_hover");
//	})
	$(".sortmain_first_shangp_box").hover(function(){//鼠标移至商品添加样式
		$(this).addClass("shangp_box_img_hover");
	},function(){
		$(this).removeClass("shangp_box_img_hover");
	})
})


//详情页面shoppingdetail.html中的图片轮播
$(function(){
	var num = 0;
	$(".underimg_box>div").hover(function(){//鼠标移至显示图片
		var index = $(".underimg_box>div").index(this);
		$(this).addClass("control_div_hover");
		$(this).siblings("div").removeClass("control_div_hover");
		$(".shopmain_first_lunbo_img>div").eq(index).fadeIn();
		$(".shopmain_first_lunbo_img>div").eq(index).siblings("div").hide();
	},function(){
//		$(this).removeClass("control_div_hover");		
	})
	
	$(".shopmain_img_left").click(function(){//左方向控制图片
		if(num>0){
			num--;
			$(".underimg_box>div").eq(num).addClass("control_div_hover");
			$(".underimg_box>div").eq(num).siblings("div").removeClass("control_div_hover");
			$(".shopmain_first_lunbo_img>div").eq(num).fadeIn();
			$(".shopmain_first_lunbo_img>div").eq(num).siblings("div").hide();
		}else{
			num = 3;
			$(".underimg_box>div").eq(num).addClass("control_div_hover");
			$(".underimg_box>div").eq(num).siblings("div").removeClass("control_div_hover");
			$(".shopmain_first_lunbo_img>div").eq(num).fadeIn();
			$(".shopmain_first_lunbo_img>div").eq(num).siblings("div").hide();
		}
	})
	
	$(".shopmain_img_right").click(function(){//右方向控制图片
		if(num<3){
			num++;
			$(".underimg_box>div").eq(num).addClass("control_div_hover");
			$(".underimg_box>div").eq(num).siblings("div").removeClass("control_div_hover");
			$(".shopmain_first_lunbo_img>div").eq(num).fadeIn();
			$(".shopmain_first_lunbo_img>div").eq(num).siblings("div").hide();
		}else{
			num = 0;
			$(".underimg_box>div").eq(num).addClass("control_div_hover");
			$(".underimg_box>div").eq(num).siblings("div").removeClass("control_div_hover");
			$(".shopmain_first_lunbo_img>div").eq(num).fadeIn();
			$(".shopmain_first_lunbo_img>div").eq(num).siblings("div").hide();
		}
	})
})

//详情页面shoppingdetail.html中选择颜色、尺码
$(function(){
	$(".shop_size a,.shop_color a").click(function(){
		$(this).addClass("shop_select");
		$(this).siblings("a").removeClass("shop_select");
	})
})

//详情页面shoppingdetail.html中购物车增加、减少
$(function(){
	$(".car_plus").click(function(){//增加商品
		var num = $(this).parent().siblings("input").val();
		num++;
		$(this).parent().siblings("input").val(num);
	})
	$(".car_minus").click(function(){//减少商品
		var num = $(this).parent().siblings("input").val();
		if(num>1){
			num--;
			$(this).parent().siblings("input").val(num);
		}
	})
})

//详情页面shoppingdetail.html中推荐搭配的加法
$(function(){

	$(".collocation_detail_l input").click(function(){
		var length = $(".collocation_detail_l input[type = checkbox]:checked").length;
		var pricecount = 0;
		for(var i = 0;i<length;i++){
			var price =parseInt($(".collocation_detail_l input[type = checkbox]:checked").eq(i).val());
			pricecount = pricecount + price;
		}	
		$(".collocation_detail_r input").val(pricecount);
	})
})

//详情页面shoppingdetail.html中商品属性、详情、评论的选项
$(function(){
	$(".shopmain_second_info_head ul li").click(function(){
		$(this).addClass("collocation_head_select");
		$(this).siblings("li").removeClass("collocation_head_select");
		var index = $(".shopmain_second_info_head ul li").index(this);
		if(index == 0){
			$(".shopmain_second_attr").show();
			$("shopmain_second_about").show();
			$("shopmain_second_discuss").hide();
		}
		else if(index == 1){
			$(".shopmain_second_attr").hide();
			$(".shopmain_second_about").show();
			$(".shopmain_second_discuss").hide();
		}else{
			$(".shopmain_second_attr").hide();
			$(".shopmain_second_about").hide();
			$(".shopmain_second_discuss").show();
		}
	})
})

//详情页面shoppingdetail.html中评论的页数选择
$(function(){
	$(".discuss_content_page ul li .page_num").click(function(){
		$(this).addClass("page_bg");
		$(this).parent().siblings("li").find(".page_num").removeClass("page_bg");
	})
})


//购物车界面 下拉选择地址
$(function(){
	$(".area_head").click(function(e){  //点击弹出下拉选择，点击其他地方隐藏
		$(".select_drop").show();
		$(document).one("click",function(){
			$(".select_drop").hide();
		})
		e.stopPropagation();
	})
	$(".select_drop").on("click",function(e){
		e.stopPropagation();
	});
	$(".close_span").click(function(){ //点击×，关闭
		$(".select_drop").hide();
	})
	
	$(".select_drop_head ul li").click(function(){ //点击切换选项卡
		var index = $(".select_drop_head ul li").index(this);
		$(this).addClass("select_drop_head_li_select");
		$(this).siblings("li").removeClass("select_drop_head_li_select");
		$(".select_drop_down").eq(index).show();
		$(".select_drop_down").eq(index).siblings(".select_drop_down").hide();
	})
	$(".select_drop_down ul li a").click(function(){
		var $head = $(".select_drop_down:visible")[0];
		var indexhead = $(".select_drop_down").index($head);
			var content = $(this).text();
			$(".select_drop_head ul li").eq(indexhead).text(content);
			$(".area_head span").eq(indexhead).text(content);
		if(indexhead <2 ){
			$(".select_drop_head ul li").eq(indexhead).removeClass("select_drop_head_li_select");
			$(".select_drop_head ul li").eq(indexhead+1).addClass("select_drop_head_li_select");
			$(".select_drop_down").eq(indexhead).hide();
			$(".select_drop_down").eq(indexhead+1).show();
		}else if(indexhead == 2){
			$(".select_drop").hide();
//			$(".select_drop_head ul li").eq(indexhead).removeClass("select_drop_head_li_select");
//			$(".select_drop_head ul li").eq(indexhead+1).addClass("select_drop_head_li_select");
//			$(".select_drop_down").eq(indexhead).hide();
//			$(".select_drop_down").eq(indexhead+1).show();
		}
		
		$(this).addClass("select_drop_down_selected").siblings("a").removeClass("select_drop_down_selected");
		$(this).parent().siblings("li").find("a").removeClass("select_drop_down_selected");
	})
})

//购物车商品列的jquery 
$(function(){
	$(".main_car_list_detail").hover(function(){//鼠标移动添加样式
		$(this).addClass("main_car_list_detail_hover");
	},function(){
		$(this).removeClass("main_car_list_detail_hover");
	})
	$(".car_addminus>button:first-of-type").click(function(){ //减事件
		var num = $(this).siblings("input").val();
		var priceone = $(this).parent().siblings(".price_one").find("p").text();
		var pricecount;
		var $priceall = $(this).parent().siblings(".price_all").find("p");
		//减数量
		if(num>2){
			num--;
			$(this).siblings("input").val(num);
		}else if(num == 2){
			num--;
			$(this).siblings("input").val(num);
			$(this).addClass("input_reject");
		}else{
			
		}
		//计算小计
		pricecount = (priceone *num).toFixed(2)
		$priceall.text(pricecount);
		//计算商品 总数量
		var num2 =$(this).parents("li").siblings("li").find(".car_addminus input").val();
		var numall = parseInt(num) + parseInt(num2);
		$(".main_car_count_num span").text(numall);
		//计算商品 总价
		var pricecount1 = parseFloat($priceall.text()) ;
		var pricecount2 = parseFloat($(this).parents("li").siblings("li").find(".price_all p").text());
		var priceadd = pricecount1 +pricecount2;
		$(".main_car_count_price span").text(priceadd)
	})
	$(".car_addminus>button:last-of-type").click(function(){  //加事件
		var num = $(this).siblings("input").val();
		var priceone = $(this).parent().siblings(".price_one").find("p").text();
		var pricecount;
		var $priceall = $(this).parent().siblings(".price_all").find("p");
		//加数量
		if(num == 1){
			$(this).siblings("button").removeClass("input_reject");
			num++;
		$(this).siblings("input").val(num);
		}else{
			num++;
			$(this).siblings("input").val(num);
		}
		//计算小计
		pricecount = (priceone *num).toFixed(2)
		$priceall.text(pricecount);
		//计算商品 数量
		var num2 =$(this).parents("li").siblings("li").find(".car_addminus input").val();
		var numall = parseInt(num) + parseInt(num2);
		$(".main_car_count_num span").text(numall);
		//计算商品 总价
		var pricecount1 = parseFloat($priceall.text()) ;
		var pricecount2 = parseFloat($(this).parents("li").siblings("li").find(".price_all p").text());
		var priceadd = (pricecount1 +pricecount2).toFixed(2);
		$(".main_car_count_price span").text(priceadd)
	})
	
	$(".car_control>span:first-of-type").toggle(function(){
		$(this).addClass("car_control_love");
	},function(){
		$(this).removeClass("car_control_love");
	})
	
	$(".car_control>span:last-of-type").click(function(){
		$(this).parents("li").hide();
	})
})


//首页弹出的广告，以及关闭弹出的广告
$(function(){
	setTimeout(function(){
		$(".pc_add").show()
	},1000);
	$(".pc_add_box>span").click(function(){
		$(".pc_add").hide();
	})
})
