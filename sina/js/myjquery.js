<script type="text/javascript">
					$(document).ready(function(){
						var $box = $(".main_middle_pageselect"),
						$num = $(".span_page"),
						indexImg = 1,    		//初始下标
						totalImg = 6,          //图片总数量
				   		textSize = 360,         //图片尺寸 宽度
				    	moveTime = 1000,        //切换动画时间
				    	setTime = 5000,        //中间暂停时间
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
				</script>