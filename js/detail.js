var lyjs={
	xb: 0,
	hasDom: true,
	bind: function(){
		this.showOrHideAd();
		this.broadcast();
		this.roll();
		this.site();
		this.nav();
	},
	// 这里是广告
	showOrHideAd: function(){
		$(".slideUp").click(function(){
			$(this).parent().parent().slideUp();
		});
	},
	// 这里是轮播
	broadcast: function(){
		function sow(){
			$($(".ly_dot li")[lyjs.xb]).addClass("ly_at");
			$($(".ly_img")[lyjs.xb]).animate({opacity:'1'},300,function(){
				lyjs.hasDom = true;
			});
		};
		function tolerant(){
			$(".ly_dot li").removeClass("ly_at");
			$(".ly_img").animate({opacity:'0'},300);
		};
		// 下一张
		$(".ly_next").click(function(){
			if(lyjs.hasDom){
				lyjs.hasDom = false;
				if (lyjs.xb == 1) {
					lyjs.xb = 0;
					tolerant();
					sow();
				}else {
					lyjs.xb = 1;
					tolerant();
					sow();
				};
			};
		});
		// 上一张
		$(".ly_last").click(function(){
			if(lyjs.hasDom){
				lyjs.hasDom = false;
				if (lyjs.xb == 0) {
					lyjs.xb = 1;
					tolerant();
					sow();
				}else {
					lyjs.xb = 0;
					tolerant();
					sow();
				};
			};
		});
		// 小点
		$(".ly_dot li").click(function(){
			var value = $(this).attr("ly");
			lyjs.xb = value;
			console.log(lyjs.xb);
			if ($(this).hasClass("ly_at")) {
			}else {
				tolerant();
				sow();
			};
		});
		timer = setInterval(function(){
			$(".ly_next").click();
		},4000);
		$('.ly_section_left').mouseover(function(){
			clearInterval(timer);
			timer=null;
		});
		$('.ly_section_left').mouseout(function(){
			timer=setInterval(function(){
				$(".ly_next").click();
			},4000);
		});
	},
	// 滚动监听
	roll:function() {
		$(document).ready(function(){
			$(window).scroll(function(){
				var topp = $(document).scrollTop();
				console.log(topp);
				// 导航条
				if (topp>200) {
					$(".ly_j_nav").css({
						top:0
					});
				}else {
					$(".ly_j_nav").css({
						top:"-63px"
					});
				};
			});
		});
	},
	// 地址选择
	site:function() {
		$("#city").click(function (e) {
			SelCity(this,e);
		});
		$("s").click(function (e) {
			SelCity(document.getElementById("city"),e);
		});
	},
	// 导航条
	nav:function(){
		var bg_or = "#ff6700";
		//头部导航条（黑色部分）
		$(function(){
			$(".order_personal_li").mouseenter(function(){
				$(".order_personal").slideDown(200);
				$(".order_personal_li>a>span").css("color",bg_or);
			});
			$(".order_personal_li").mouseleave(function(){
				$(".order_personal").slideUp(200);
				$(".order_personal_li").removeAttr("style");
				$(".order_personal_li>a>span").removeAttr("style");
			});
			$(".order_car_li").mouseenter(function(){
				$(".order_car").slideDown();
				$(".order_car_li").css("background","white");
				$(".order_car_li>a").css("color",bg_or);
				$(".order_car_li>a>img").attr("src","img/gouwuche01.png");
			});
			$(".order_car_li").mouseleave(function(){
				$(".order_car").slideUp();
				$(".order_car_li").removeAttr("style");
				$(".order_car_li>a").removeAttr("style");
				$(".order_car_li>a>img").attr("src","img/gouwuche02.png");
			});
		});
		//头部2
		$(".order_nav_form form input:first-child").focus(function(){
			$(".order_hot_words").css("display","none");
			$(".order_input_tip").css("display","block");
			$(this).css("border-color",bg_or);
			$(this).next().css("border-color",bg_or);
		}).blur(function(){
			$(".order_hot_words").removeAttr("style");
			$(".order_input_tip").removeAttr("style");
			$(this).removeAttr("style");
			$(this).next().removeAttr("style");
		});
		for(let i=0;i<$(".in_ttop").length;i++){
			var left = "-"+($($(".in_ttop")[i]).html().length*4+62)/2+"px";
			console.log($($(".in_ttop")[i]).html().length);
			console.log(left);
			$($(".in_ttop")[i]).css("margin-left",left);
		}
		//nav_list下拉图形框
		$(function(){
			$(".order_nav_list>li").mouseover(function(){
				var i =$(this).attr("value");
				if(i){
					$(".in_tcMenu").slideDown(200);
					$(".in_tc").css("display","none");
					$($(".in_tc")[i]).css("display","block");
				}else{
					$(".in_tcMenu").slideUp(200);
					$(".in_tc").css("display","none");
				}
				$(this).children().css("color",bg_or);
			});
			$(".order_nav_list>li").mouseleave(function(){
				$(this).children().css("color","#333333");
			});
		});
		$(function(){
			$(".order_header").mouseover(function(){
				$(".in_tcMenu").slideUp(200);
				$(".in_tc").css("display","none");
			});
		});
		$(function(){
			$(".order_nav_first").mouseover(function(){
				$(".order_menu").css("display","block");
			}).mouseout(function(){
				$(".order_menu").removeAttr("style");
			});
		});
		$(".order_header2").mouseleave(function(){
			if($(".in_tcMenu").css("display")!="none"){
				$(".in_tcMenu").slideUp(200,function(){
					$(".in_tcMenu").css("display","none");
				});
			}
		});
		$("a").mouseover(function(){
			$(this).css("text-decoration","none")
		});
	}
}
lyjs.bind();