// JavaScript Document
// 〓〓〓 ページ読み込み時フェードイン 〓〓〓
// $('head').append(
// 	'<style>body{display:none;}'
// 	);

// $(window).on("load", function() {
// 	$('body').delay(100).fadeIn("fast");
// });

$(function(){
	var ua = navigator.userAgent;

	// 〓〓〓 スマホ用メニュー表示 〓〓〓
	function spMenuOpen(){
		$('[data-js-menu="close"]').addClass('head_btn_menu_open');
		$('[data-js-menu="close"]').attr('data-js-menu','open');
		$('body').append('<div class="head_menu_hider" data-js-menu="hider"></div>');
		$('header').addClass('navi_active')
		return false;
	}
	function spMenuClose(){
		$('[data-js-menu="open"]').removeClass('head_btn_menu_open');
		$('[data-js-menu="open"]').attr('data-js-menu','close');
		$('[data-js-menu="hider"]').remove();
		$('header').removeClass('navi_active')
		return false;
	}
	$(document).on('click','[data-js-menu="close"]',function(){
		spMenuOpen();

	});
	$(document).on('click','[data-js-menu="open"]',function(){
		spMenuClose();
	});


	// 〓〓〓 スマホ用サブメニュー表示 〓〓〓
	// マウスホバー時の挙動
	$('.head_menu_main>li').on({
		'mouseenter':function(){
			var WindowWidth = $(window).width();
			if(WindowWidth >= 992){ //PCサイズ
				$('[data-js-menu-sub]').removeClass('head_menu_sub_open');
				$('[data-js-menu-sub]').attr('data-js-menu-sub','close');
				$(this).children('a').addClass('head_menu_sub_open');
				$(this).children('a').attr('data-js-menu-sub','open');
			}
		},
		'mouseleave':function(){
			var WindowWidth = $(window).width();
			if(WindowWidth >= 992){ //PCサイズ
				$('[data-js-menu-sub]').removeClass('head_menu_sub_open');
				$('[data-js-menu-sub]').attr('data-js-menu-sub','close');
			}
		}
	});
	// サブメニューが閉じている時にクリックした際の挙動（＝SP時のサブメニューの開閉処理）
	$(document).on('click','[data-js-menu-sub="close"]',function(){
		var WindowWidth = $(window).width();
		if(WindowWidth < 992){ //タブレット以下
			$(this).toggleClass('head_menu_sub_open');
			$(this).next('.head_menu_sub').slideToggle();
			return false;
		}else{
			$('[data-js-menu-sub]').removeClass('head_menu_sub_open');
			$('[data-js-menu-sub]').attr('data-js-menu-sub','close');
			$(this).toggleClass('head_menu_sub_open');
			$(this).attr('data-js-menu-sub','open');
			return false;
		}
	});
	// サブメニューが閉じている時にタッチが外れた際の挙動（＝1度目のタップ時に遷移させないための処理）
	$(document).on('touchend','[data-js-menu-sub="close"]',function(){
		var WindowWidth = $(window).width();
		if(WindowWidth >= 992){ //タブレット以下
			$('[data-js-menu="hider"]').remove();
			$('[data-js-menu-sub]').removeClass('head_menu_sub_open');
			$('[data-js-menu-sub]').attr('data-js-menu-sub','close');
			$(this).toggleClass('head_menu_sub_open');
			$(this).attr('data-js-menu-sub','open');
			$('body').append('<div class="head_menu_hider" data-js-menu="hider"></div>');
			return false;
		}
	});
	// サブメニューが開いている時にクリックした際の挙動（＝メインメニューの遷移処理）
	$('a[data-js-menu-sub="open"]').click(function() {
		location.href = $(this).attr('href');
	});

	// グレーアウト処理
	$(document).on('click','[data-js-menu="hider"]',function(){
		var WindowWidth = $(window).width();
		if(WindowWidth >= 992){ //タブレット以下
			$('[data-js-menu-sub]').removeClass('head_menu_sub_open');
			$('[data-js-menu-sub]').attr('data-js-menu-sub','close');
			$('[data-js-menu="hider"]').remove();
		}else{
			spMenuClose();
		}
	});


	// 〓〓〓 RFWアコーディオン 〓〓〓
	$(document).on('click','[data-js-accordion-trigger]',function(){
		$(this).parents('[data-js-accordion-parent]').find('[data-js-accordion-body]').slideToggle('fast');
		$(this).parents('[data-js-accordion-parent]').delay(500).queue(function(){
			$(this).toggleClass('accordion_open').toggleClass('accordion_close');
			$(this).find('.accordion_toggle_hide, .accordion_toggle_show').toggleClass('accordion_toggle_hide').toggleClass('accordion_toggle_show');
			$(this).dequeue();
		});
	});

	// 〓〓〓 SPでTELリンク 〓〓〓
	$("a[href*=\"tel:\"]").not('[data-js-tellink="off"]').each(function(){
		if(ua.indexOf('iPhone') !== -1 || ua.indexOf('iPod') !== -1 || ua.indexOf('Android') !== -1 || ua.indexOf('windows Phone') !== -1){
		}else{
			$(this).removeAttr("href");
		}
	});

	// 〓〓〓 ページTOPに戻る 〓〓〓
	$('[data-js-gotop]').click(function(){
		$('body,html').animate({ scrollTop: 0}, 500);
		return false;
	});

	// 〓〓〓 スムーススクロール 〓〓〓
	$("a[href^='#']").not('[data-slide],[data-js-smoothscroll="off"],[data-js-gotop]').click(function() {
		if($($(this).attr("href")).length){
			var fixedHeadHeight = [];
			if($('.head_main').css('position')==='fixed'){
				var fixedHeadHeight = $('.head_main').height();
			}else{
				var fixedHeadHeight = 0;
			}
			if($($(this).attr("href")).length){
				$('body,html').animate({ scrollTop: $($(this).attr("href")).offset().top-fixedHeadHeight }, 500);
			}
			return false;
		}
	});

	// 〓〓〓 マイページ用サイドナビ 〓〓〓
	$('[data-js-mymenu-torigger]').click(function(){
		$(this).toggleClass('menu_active');
		$('.my_sidenavi_cover').toggleClass('hide');
		$('#my_sidenavi').fadeToggle('fast');
	});

	$('[data-js-mymenu-cover]').click(function(){
		$(this).next().removeClass('menu_active');
		$('.my_sidenavi_cover').toggleClass('hide');
		$('#my_sidenavi').fadeToggle('fast');
	});

	// 〓〓〓 function 〓〓〓

	// スクロール
	$(window).scroll(function(){

	});

	// 画面回転
	$(window).bind("orientationchange", function(){
	});

	// 画面サイズ変更
	$(window).resize(function(){
	});


	// スクロールしたらヘッダーが追尾
	var $win = $(window);
	var $main = $('.index_section_01');
	if ($main.length == 0) {
		return;
	}
	var $nav = $('.head_main');
	var navHeight = $main.outerHeight();
	var navPos = $main.offset().top;
	var fixedClass = 'scroll';

	$win.on('load scroll', function() {
		var value = $(this).scrollTop();
		if ( value > navPos ) {
			$nav.addClass(fixedClass);
			$main.css('margin-top', $nav);
		} else {
			$nav.removeClass(fixedClass);
			$main.css('margin-top', '0');
		}
	});
});

//〓〓〓 アンカーリンク位置調整 〓〓〓
$(window).on('load', function(){
	if(document.URL.indexOf("#")!==-1 && $(location.hash).length){
		var fixedHeadHeight = [];
		if($('.head_main').css('position')==='fixed'){
			var fixedHeadHeight = $('.head_main').height()+20;
		}else{
			var fixedHeadHeight = 0;
		}
		if($(location.hash).length){
			$('body,html').animate({ scrollTop: $(location.hash).offset().top-fixedHeadHeight }, 500);
		}
		return false;
	}
});

//〓〓〓 モーダル設定 〓〓〓
$(function(){
	$(".iziModal").iziModal({
		overlayColor: "rgba(0,0,0,0.6)",
		width: "960px",
		top: "30px",
		bottom: "30px",
		transitionIn: "comingIn",
		transitionOut: "fadeOutDown",
		});
});