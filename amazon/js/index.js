//登录页面，点击下拉
$(function(){
	$(".help_click").toggle(function(){
		$(".help_drop").show();
	},function(){
		$(".help_drop").hide();
	})
})

//hover左侧显示提示信息
$(function(){
	$(".logo_a_right,.logo_a_right_hover").hover(function(){
		$(".logo_a_right_hover").show();
	},function(){
		$(".logo_a_right_hover").hide();
	})
})

//搜索点击切换关键词
$(function(){
	$(".header_top_search .dropdown-menu li a").click(function(){
		var key = $(this).html();
		$(".header_top_search").find(".select_keyword").html(key);
	})
})

//hover显示下拉Department
$(function(){
	$(".header_bottom_midd_first>a,.header_bottom_midd_fir_drop").hover(function(){
		$(".header_bottom_midd_fir_drop").delay(0).show();
		$(".hover_pageopacity").delay(0).fadeIn();
	},function(){
		$(".header_bottom_midd_fir_drop").hide();
		$(".hover_pageopacity").hide();
	})
})
//Department右侧
$(function(){
	$(".header_bottom_midd_fir_drop_content ul li").hover(function(){
		$(this).find(".showlist").fadeIn();
	},function(){
		$(this).find(".showlist").hide();
	})
})


//en
$(function(){
	$(".header_bottom_rig_a2,.en_drop").hover(function(){
		$(".en_drop").show();
		$(".hover_pageopacity").show();
	},function(){
		$(".en_drop").hide();
		$(".hover_pageopacity").hide();
	})
})

//Account&List
$(function(){
	$(".header_bottom_rig_a3,.account_drop").hover(function(){
		$(".account_drop").show();
		$(".hover_pageopacity").show();
	},function(){
		$(".account_drop").hide();
		$(".hover_pageopacity").hide();
	})
})

//Try Prime
$(function(){
	$(".header_bottom_rig_prime,.prime_drop").hover(function(){
		$(".prime_drop").show();
		$(".hover_pageopacity").show();
	},function(){
		$(".prime_drop").hide();
		$(".hover_pageopacity").hide();
	})
})



//footer 点击返回顶部特效
$(function(){
	$(".footer_toBar").hover(function(){
		$(this).addClass("footer_toBar_hover");
	},function(){
		$(this).removeClass("footer_toBar_hover");
	})
	$(".footer_toBar").click(function(){
		$("html,body").animate({
			scrollTop:0
		}, 500);
	})
})

//图片切换效果Today's Deals
$(function(){
	var num = 0;
	var length = $(".article_Today .article_show_pic ul").length;
	var movewidth = 1254; //移动的距离
	var $movebox = $(".article_Today .article_show_pic>.article_show_box");	
	$(".article_Today .article_show_pic").hover(function(){
		if(num==0){
			$(this).find(".article_show_pic_control").show();
			$(this).find(".pic_control_left").addClass("pic_control_opcatity");
		}else if(num==length-1){
			$(this).find(".article_show_pic_control").show();
			$(this).find(".pic_control_right").addClass("pic_control_opcatity");
		}else{
			$(this).find(".pic_control_left").removeClass("pic_control_opcatity");
			$(this).find(".pic_control_right").removeClass("pic_control_opcatity");
			$(this).find(".article_show_pic_control").show();
		}
	},function(){
		$(this).find(".article_show_pic_control").hide();
	})
	
	//左方向
	$(".article_Today .pic_control_left").click(function(){
		if(num>1){
			num--;
			$movebox.animate({
			left: -(movewidth *num) + 'px'
			},500);
			$(this).removeClass("pic_control_opcatity");
			$(this).siblings(".pic_control_right").removeClass("pic_control_opcatity");
		}else if(num == 1){
			num--;
			$movebox.animate({
			left: -(movewidth *num) + 'px'
			},500);
			$(this).addClass("pic_control_opcatity");
			$(this).siblings(".pic_control_right").removeClass("pic_control_opcatity");
		}else{
			
		}	
	})
	
	//右方向
	$(".article_Today .pic_control_right").click(function(){
		if(num<length-2){
			num++;
			$movebox.animate({
			left:-(movewidth *num)+'px'
			},500);
			$(this).removeClass("pic_control_opcatity");
			$(this).siblings(".pic_control_left").removeClass("pic_control_opcatity");
		}else if(num == length-2){
			num++;
			$movebox.animate({
			left:-(movewidth *num)+'px'
			},500);
			$(this).addClass("pic_control_opcatity");
			$(this).siblings(".pic_control_left").removeClass("pic_control_opcatity");
		}
		else{
			
		}
	})
})

//图片切换效果Inspired by your browsing history
$(function(){
	var num = 0;
	var length = $(".article_Inspired .article_show_pic ul").length;
	var movewidth = 1254; //移动的距离
	var $movebox = $(".article_Inspired .article_show_pic>.article_show_box");	
	$(".article_Inspired .article_show_pic").hover(function(){
		if(num==0){
			$(this).find(".article_show_pic_control").show();
			$(this).find(".pic_control_left").addClass("pic_control_opcatity");
		}else if(num==length-1){
			$(this).find(".article_show_pic_control").show();
			$(this).find(".pic_control_right").addClass("pic_control_opcatity");
		}else{
			$(this).find(".pic_control_left").removeClass("pic_control_opcatity");
			$(this).find(".pic_control_right").removeClass("pic_control_opcatity");
			$(this).find(".article_show_pic_control").show();
		}
	},function(){
		$(this).find(".article_show_pic_control").hide();
	})
	
	//显示quick look
	$(".article_Inspired .article_show_box ul li").hover(function(){
		$(this).find(".show_look").show();
	},function(){
		$(this).find(".show_look").hide();
	})
	//左方向
	$(".article_Inspired .pic_control_left").click(function(){
		if(num>1){
			num--;
			$movebox.animate({
			left: -(movewidth *num) + 'px'
			},500);
			$(this).removeClass("pic_control_opcatity");
			$(this).siblings(".pic_control_right").removeClass("pic_control_opcatity");
		}else if(num == 1){
			num--;
			$movebox.animate({
			left: -(movewidth *num) + 'px'
			},500);
			$(this).addClass("pic_control_opcatity");
			$(this).siblings(".pic_control_right").removeClass("pic_control_opcatity");
		}else{
			
		}	
	})
	
	//右方向
	$(".article_Inspired .pic_control_right").click(function(){
		if(num<length-2){
			num++;
			$movebox.animate({
			left:-(movewidth *num)+'px'
			},500);
			$(this).removeClass("pic_control_opcatity");
			$(this).siblings(".pic_control_left").removeClass("pic_control_opcatity");
		}else if(num == length-2){
			num++;
			$movebox.animate({
			left:-(movewidth *num)+'px'
			},500);
			$(this).addClass("pic_control_opcatity");
			$(this).siblings(".pic_control_left").removeClass("pic_control_opcatity");
		}
		else{
			
		}
	})
})

//图片切换效果More items to consider
$(function(){
	var num = 0;
	var length = $(".article_moreitems .article_show_pic ul").length;
	var movewidth = 1254; //移动的距离
	var $movebox = $(".article_moreitems .article_show_pic>.article_show_box");	
	$(".article_moreitems .article_show_pic").hover(function(){
		if(num==0){
			$(this).find(".article_show_pic_control").show();
			$(this).find(".pic_control_left").addClass("pic_control_opcatity");
		}else if(num==length-1){
			$(this).find(".article_show_pic_control").show();
			$(this).find(".pic_control_right").addClass("pic_control_opcatity");
		}else{
			$(this).find(".pic_control_left").removeClass("pic_control_opcatity");
			$(this).find(".pic_control_right").removeClass("pic_control_opcatity");
			$(this).find(".article_show_pic_control").show();
		}
	},function(){
		$(this).find(".article_show_pic_control").hide();
	})
	
	//显示quick look
	$(".article_moreitems .article_show_box ul li").hover(function(){
		$(this).find(".show_look").show();
	},function(){
		$(this).find(".show_look").hide();
	})
	//左方向
	$(".article_moreitems .pic_control_left").click(function(){
		if(num>1){
			num--;
			$movebox.animate({
			left: -(movewidth *num) + 'px'
			},500);
			$(this).removeClass("pic_control_opcatity");
			$(this).siblings(".pic_control_right").removeClass("pic_control_opcatity");
		}else if(num == 1){
			num--;
			$movebox.animate({
			left: -(movewidth *num) + 'px'
			},500);
			$(this).addClass("pic_control_opcatity");
			$(this).siblings(".pic_control_right").removeClass("pic_control_opcatity");
		}else{
			
		}	
	})
	
	//右方向
	$(".article_moreitems .pic_control_right").click(function(){
		if(num<length-2){
			num++;
			$movebox.animate({
			left:-(movewidth *num)+'px'
			},500);
			$(this).removeClass("pic_control_opcatity");
			$(this).siblings(".pic_control_left").removeClass("pic_control_opcatity");
		}else if(num == length-2){
			num++;
			$movebox.animate({
			left:-(movewidth *num)+'px'
			},500);
			$(this).addClass("pic_control_opcatity");
			$(this).siblings(".pic_control_left").removeClass("pic_control_opcatity");
		}
		else{
			
		}
	})
})


//game页面特效
//分类hover下拉
$(function(){
	$(".gememain_type>ul>li,.type_drow").hover(function(){
		var index = $(".gememain_type>ul>.type_drow_head").index(this);
		$(".type_drow").show();
		$(".type_drow>span").eq(index).siblings("span").hide()
		$(".type_drow>span").eq(index).show();
		$(".type_drop_content>ul").eq(index).siblings("ul").hide();
		$(".type_drop_content>ul").eq(index).show();
	},function(){
		$(".type_drow").hide();
	})
})
//图片切换
$(function(){
	var num =0;
	$(".gamemain_game_imgControl>ul>li").hover(function(){	
		var index = $(".gamemain_game_imgControl>ul>li").index(this);
		$(".gamemain_game_imgLarge>ul>li").eq(index).siblings("li").hide();
		$(".gamemain_game_imgLarge>ul>li").eq(index).show();
	},function(){
		$(".gamemain_game_imgLarge>ul>li").eq(num).siblings("li").hide();
		$(".gamemain_game_imgLarge>ul>li").eq(num).show();
	})
	$(".gamemain_game_imgControl>ul>li").click(function(){
		var index = $(".gamemain_game_imgControl>ul>li").index(this);
		num=index;
		$(".gamemain_game_imgLarge>ul>li").eq(num).siblings("li").hide();
		$(".gamemain_game_imgLarge>ul>li").eq(num).show();
		$(this).siblings("li").removeClass("imgControl_selected");
		$(this).addClass("imgControl_selected");
		
	})
})

//点击下拉弹出trade_drop
$(function(){
	$(".trade_in").click(function(e){
		$(".trade_drop").show();
		$(document).one("click",function(){
			$(".trade_drop").hide();
		})
		e.stopPropagation();
	})
	$(".trade_drop").on("click",function(e){
		e.stopPropagation();
	})
})

//Sponsored products related to this item
$(function(){
	var num = 0;
	var nummax = $(".Sponsored_lunbo_img>ul").length;
	$(".Sponsored_lunbo_control_left").click(function(){
		if(num>0){
			num--;
			$(".Sponsored_lunbo_img>ul").eq(num).siblings("ul").hide();
			$(".Sponsored_lunbo_img>ul").eq(num).show("slow");
			var page = num +1;
			$(".gamemain_bought_Sponsored .page_Sponsor").html(page);
		}else{
			
		}
	})
	$(".Sponsored_lunbo_control_right").click(function(){
		if(num<nummax-1){
			num++;
			$(".Sponsored_lunbo_img>ul").eq(num).siblings("ul").hide();
			$(".Sponsored_lunbo_img>ul").eq(num).show("slow");
			var page = num +1;
			$(".gamemain_bought_Sponsored .page_Sponsor").html(page);
		}else{
			
		}
	})
})


//shoppingcart 
//购物车计算价格
$(function(){
	$(".first_l_shop_item_quantity select").change(function(){
	var priceall =0;	
	var pricepre =0;
	var num = 0;
	var n =0;
	var length= $(".first_l_shop_item_quantity select option:selected").length;
	for(var i =0;i<length;i++){
		n = parseInt($(".first_l_shop_item_quantity select option:selected").eq(i).val());	//获取选择的商品个数	
		num = num + n;
		pricepre = parseFloat($(".first_l_shop_item_price").eq(i).html().substr(1));
		priceall = priceall + (pricepre*num);
	}
	$(".count_num").html(num);
	$(".count_money").html(priceall.toFixed(2));
	})
	
})

//图片切换 inspired
$(function(){
	var num = 0;
	var nummax = $(".cartmain_second_inspired .cartmain_second_inspired_lunbo>ul").length;
	$(".cartmain_second_inspired .inspired_lunbo_control_l").click(function(){
		if(num>0){
			num--;
			$(".cartmain_second_inspired .cartmain_second_inspired_lunbo>ul").eq(num).siblings("ul").hide();
			$(".cartmain_second_inspired .cartmain_second_inspired_lunbo>ul").eq(num).show("slow");
			var page = num +1;
			$(".cartmain_second_inspired .page_inspired").html(page);
		}else{
			
		}
	})
	$(".cartmain_second_inspired .inspired_lunbo_control_r").click(function(){
		if(num<nummax-1){
			num++;
			$(".cartmain_second_inspired .cartmain_second_inspired_lunbo>ul").eq(num).siblings("ul").hide();
			$(".cartmain_second_inspired .cartmain_second_inspired_lunbo>ul").eq(num).show("slow");
			var page = num +1;
			$(".cartmain_second_inspired .page_inspired").html(page);
		}else{
			
		}
	})
})

//图片切换cartmain_second_bestseller
$(function(){
	var num = 0;
	var nummax = $(".cartmain_second_bestseller .cartmain_second_inspired_lunbo>ul").length;
	$(".cartmain_second_bestseller .inspired_lunbo_control_l").click(function(){
		if(num>0){
			num--;
			$(".cartmain_second_bestseller .cartmain_second_inspired_lunbo>ul").eq(num).siblings("ul").hide();
			$(".cartmain_second_bestseller .cartmain_second_inspired_lunbo>ul").eq(num).show("slow");
			var page = num +1;
			$(".cartmain_second_bestseller .page_inspired").html(page);
		}else{
			
		}
	})
	$(".cartmain_second_bestseller .inspired_lunbo_control_r").click(function(){
		if(num<nummax-1){
			num++;
			$(".cartmain_second_bestseller .cartmain_second_inspired_lunbo>ul").eq(num).siblings("ul").hide();
			$(".cartmain_second_bestseller .cartmain_second_inspired_lunbo>ul").eq(num).show("slow");
			var page = num +1;
			$(".cartmain_second_bestseller .page_inspired").html(page);
		}else{
			
		}
	})
})