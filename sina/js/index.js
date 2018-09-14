
//登录的下拉选项
//function dengluover(){
//	var divs = document.getElementById("dropdown_denglu");
//	divs.className = "display_block";
//}
//function dengluout(){
//	var divs = document.getElementById("dropdown_denglu");
//	divs.className = "display_hidden";
//}
$(document).ready(function(){
	$(".header_top_right>ul>li:first-child").hover(function(){
		$("#dropdown_denglu").show();
	},function(){
		$("#dropdown_denglu").hide();
	})	
})

//鼠标移至二维码显示提示
$(document).ready(function(){
	$(".dd_denglu_left img").hover(function(){
		$(".dd_denglu_right>div:first-child").show();
	},function(){
		$(".dd_denglu_right>div:first-child").hide();
	})
})


//移动客户端的下拉选项
function clientover(){
	var divs = document.getElementById("dropdown_client");
	divs.className = "display_block"
}
function clientout(){
	var divs = document.getElementById("dropdown_client");
	divs.className = "display_hidden"
}

//搜索标题的下拉选项
function selectedtitle(){
	var title = document.getElementById("dropdown_searchkey");
	var classtitle = title.className;
	if(classtitle == "display_hidden"){
		title.className = "display_block";
	}else{
		title.className = "display_hidden"
	}
}

//选择标题替换标题框内容
function chgtitle(obj){
	var title = document.getElementById("dropdown_searchkey");
	var pre = document.querySelector(".serchinput_style p span");
	var titlenew = obj.innerHTML;
	pre.innerHTML = titlenew;
	title.className = "display_hidden"
}


//轮播举报广告
var start = 0;
function slideadpic(){
	var ad = document.querySelectorAll(".reportAd a");
	for(var i=0;i<ad.length;i++){
		ad[i].className = "display_hidden"
			if(i == start){
				ad[i].className = "display_block";
			}
	}	
	start++;
	if(start == 2){
		start = 0;
	}
	setTimeout(slideadpic,2000);
}

//更多下拉选项
function moreover(){
	var morelist = document.getElementById("dropdown_more");
	morelist.className = "display_block"
}
function moreout(){
	var morelist = document.getElementById("dropdown_more");
	morelist.className = "display_hidden"
}


//左侧轮播
//var leftstart = 0;
//function leftslidemove(){
//	var leftaside = document.querySelectorAll(".main_aside_slide ul li img");
//	for(var i=0;i<leftaside.length;i++){
//		leftaside[i].className="display_hidden";
//		if{i == leftstart}{
//			leftaside[i].className = "display_block";
//		}
//	}
//	leftstart++;
//	if(leftstart == 2){
//		leftstart =0;
//	}
//	setTimeout(leftslidemove,2000);	
//}


//main选项卡
function maintabover(obj,index){
//	var tabtitle = document.querySelectorAll(".main_middle .main_middle_tab ul li");
	var tabtitle = obj.parentNode.getElementsByTagName("li");
	var news = obj.parentNode.parentNode.nextElementSibling;
	
	var tabnews = news.querySelectorAll("#main_middle_tabselect .main_middle_tabselectpic");
	for(var i=0;i<tabtitle.length;i++){
		tabtitle.className = " ";
		tabnews.className = " "
		if(i == index){
			tabtitle[i].className = "tab_selected  fl";
			tabnews[i].className = "main_middle_tabselectpic";
		}
		else{
			tabtitle[i].className = "fl";
			tabnews[i].className = "main_middle_tabselectpic display_hidden";
		}
	}
}


//猜你喜欢选项卡
function pageover(index){
	var pagelist = document.querySelectorAll(".span_pagelist .span_page");
	var pagedetail = document.querySelectorAll(".main_middle_pageselect .main_middle_tabselectpic");
	for (var i=0;i<pagedetail.length;i++) {
		pagedetail[i].className = "main_middle_tabselectpic";
		if(i == index){
			pagedetail[i].className = "main_middle_tabselectpic";
			pagelist[i].className = "span_page span_page_hover";
//			console.log(i);
		}else{
			pagedetail[i].className = "main_middle_tabselectpic display_hidden";
			pagelist[i].className = "span_page";
//			console.log(i);
		}
	}
}


//找车询价下拉框
function selectques(obj){
	var dplist = obj.nextElementSibling;
	var dpclass = dplist.className;
	if(dpclass = "dropdown_carlist display_hidden"){
		dplist.className = "dropdown_carlist";
	}else{
		dplist.className = "dropdown_carlist display_hidden";
	}
}
//找车询价下拉框选择替换
function chgtype(obj){
	var p_pre = obj.parentNode.parentNode.parentNode.firstElementChild;
	var dplist = obj.parentNode.parentNode;
	p_pre.innerHTML = obj.innerHTML;
	dplist.className = "dropdown_carlist display_hidden";
}

//右侧选项卡
function pickaside(index){
	var pickitem = document.querySelectorAll(".main_aside_slide_pick>ul>li>ul>li");
	var pickdetail = document.querySelectorAll(".main_aside_slide_pick>ul>li:last-child>div");
	for(var i = 0; i<pickitem.length;i++){
		if(i == index){
			pickitem[i].className ="fl slide_pick";
			pickdetail[i].className = "display_block";
		}else{
			pickitem[i].className ="fl";
			pickdetail[i].className = "display_hidden";
		}
	}
}


//搜索框获取焦点置空
$(document).ready(function(){
	$("#news").focus(function(){
	if($(this).val() == "请输入关键词"){
	$(this).val("");
	}
	}).blur(function(){
	if($(this).val() == ""){
	$(this).val("请输入关键词");
	}
	})
})

//右上角图片向上轮播
$(document).ready(function(){
	index=0;
	var length = $(".reportAd ul li").length;
	setInterval(function(){
		show(index);
		index++;
		if(index == length){
		index = 0; 
		}
	},3000)
	function show(index){
		var adheight = $(".reportAd ul li:first a img").height();
		$(".slider").stop(true, false).animate({
		"marginTop":-adheight*index + "px"
		},1000);
	}	
})


//新浪产品左侧选项卡（新浪产品）
$(document).ready(function(){
	var $tabBox =$(".main_aside_slide>ul>li:last-child"),
	indexTabnow = 1,   //选项卡初始值
	totalTabtotal = 3,			//选项卡总数
	tabSize = 240,        //选项卡宽度
	moveTime = 500,       //切换时间
	setTime = 4000,       //中间暂停时间
	tabTimer = null;     // 选项卡定时器
	function TabChg(){
		if(indexTabnow != totalTabtotal){
			$tabBox.animate({
			left:-(tabSize)*indexTabnow + "px"
			},moveTime);
			indexTabnow++;
		}else{
			indexTabnow = 1;
			$tabBox.animate({
			left:-(tabSize)*(indexTabnow-1) + "px"
			},moveTime);
		}
		}
		$tabBox.hover(function(){
			clearInterval(tabTimer);
		},function(){
			tabTimer = setInterval(TabChg,setTime);
		})
		//左方向事件
		$(".a_left_tab1").click(function(){
			indexTabnow--;
			if(indexTabnow >0){
				$tabBox.animate({
				left:-(tabSize)*(indexTabnow-1)+ "px"
			},moveTime);
			clearInterval(tabTimer);
			}else{
				indexTabnow = totalTabtotal;
				$tabBox.animate({
				left:-(tabSize)*(indexTabnow-1) + "px"
				},moveTime);
				clearInterval(tabTimer);
			}
			tabTimer = setInterval(TabChg,setTime);
		})
		//右方向事件
		$(".a_right_tab1").click(function(){
			if(indexTabnow <totalTabtotal){
			indexTabnow++;
			$tabBox.animate({
			left:-(tabSize)*(indexTabnow-1)+ "px"
			},moveTime);
			clearInterval(tabTimer);
			}else{
				indexTabnow = 1;
				$tabBox.animate({
				left:-(tabSize)*(indexTabnow-1) + "px"
				},moveTime);
				clearInterval(tabTimer);
			}
		tabTimer = setInterval(TabChg,setTime);
		})
		tabTimer = setInterval(TabChg,setTime);
})



//猜你喜欢选项卡jq
$(document).ready(function(){
	var $box = $(".main_middle_pageselect"),
	$num = $(".span_page"),
	indexImg = 1,    		//初始下标
	totalImg = 6,          //图片总数量
	textSize = 360,         //图片尺寸 宽度
	moveTime = 1000,        //切换动画时间
	setTime = 6000,        //中间暂停时间
	timer = null;          //定时器
	function movetext(){
		if(indexImg != totalImg){
		$box.animate({
		left: -(indexImg*textSize) + 'px'
		}, moveTime);
		$num.removeClass('span_page_hover')
			.eq(indexImg)
			.addClass('span_page_hover');
			indexImg++;
		}
		else{
		indexImg = 1;
		$num.removeClass('span_page_hover')
			.eq(indexImg - 1)
			.addClass('span_page_hover');
		$box.animate({
			left: -((indexImg - 1)*textSize) + 'px'
			}, moveTime);
		}}
		$num.hover(function(){
			$box.stop();                    //结束当前动画
			clearInterval(timer);              //暂停循环
			$num.removeClass('span_page_hover');
			$(this).addClass('span_page_hover');
			indexImg = $(this).index() + 1;
			$box.animate({
				left: -((indexImg - 1)*textSize) + 'px'
			}, moveTime);
			timer = setInterval(movetext, setTime);
		});
		//鼠标放上停止动画
		$box.hover(function(){
			clearInterval(timer);              //暂停循环
			},function(){
			timer = setInterval(movetext, setTime);
		});	
		//向右边前进
		$('.a_right_disp').click(function(){    
			if(indexImg < totalImg){
				$box.animate({
				left: -(indexImg*textSize) + 'px'
			}, moveTime);
			$num.removeClass('span_page_hover')
				.eq(indexImg)
				.addClass('span_page_hover');	        
				clearInterval(timer); 
				indexImg++;
			}
			else{
				indexImg = 1;
				$num.removeClass('span_page_hover')
				.eq(indexImg - 1)
				.addClass('span_page_hover');
			$box.animate({
				left: -((indexImg - 1)*textSize) + 'px'
			}, moveTime);
			clearInterval(timer); 
			}
			timer = setInterval(movetext, setTime);
		});
		//向左边前进
		$('.a_left_disp').click(function(){
			indexImg--;
			if(indexImg > 0){
			$box.animate({
				left: -((indexImg - 1)*textSize) + 'px'
				}, moveTime);
				$num.removeClass('span_page_hover')
				.eq((indexImg - 1))
				.addClass('span_page_hover');
				clearInterval(timer); 
			}
			else{
			indexImg = totalImg;
			$num.removeClass('span_page_hover')
				.eq(indexImg - 1)
				.addClass('span_page_hover');
			$box.animate({
				left: -((indexImg - 1)*textSize) + 'px'
			}, moveTime);
			clearInterval(timer);
			}
			timer = setInterval(movetext, setTime);
		});		
		timer = setInterval(movetext, setTime);
})


//弹出登录点击隐藏
$(document).ready(function(){
	$(".cancel>span").click(function(){
		$("#dropdown_denglu").hide();
	})
})
