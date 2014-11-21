/* jquery custom */

$(document).ready(function(){


	/* Navi Main Drop-Down-Menu*/
	
	$(".nav_main li:has(ul)").hover(function(){
		$(this).find("ul").slideDown(100);
	}, function(){
		$(this).find("ul").slideUp(100);
	});	
	
	/* Portfolio */
	$("#view .button a").click(function () {
		$(".container.more").slideToggle(600);
		var $el = $(this);
		   $el.text($el.text() == "weitere Projekte" ? "weniger Projekte": "weitere Projekte");
	});
	
	/* Scrolling Anker-Link */
	/* Link:<a href="#services">Jump to services</a> */
	/* Anker: <div id="services"></div> */
	
	$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();
	
		    var target = this.hash,
		    $target = $(target);
	
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		});
		
	/* fadein scroll-top-button */
	
	var divs = $('.bt_up');
	$(window).scroll(function(){
	   if($(window).scrollTop()>120){
	         divs.stop(true,true).fadeIn("slow");
	   } else {
	         divs.stop(true,true).fadeOut("slow");
	   }
	});
	/*
	var divs = $('.bt_up');
	$(window).scroll(function(){
	   if($(window).scrollTop()<400){
	         divs.stop(true,true).fadeOut("slow");
	   } else {
	         divs.stop(true,true).fadeIn("slow");
	   }
	});
	*/
	
	/* accordion */
	
	$(document).ready( function() {
		$('.trigger').not('.trigger_active').next('.toggle_container').hide();
		$('.trigger').click( function() {
			var trig = $(this);
			if ( trig.hasClass('trigger_active') ) {
				trig.next('.toggle_container').slideToggle('slow');
				trig.removeClass('trigger_active');
			} else {
				$('.trigger_active').next('.toggle_container').slideToggle('slow');
				$('.trigger_active').removeClass('trigger_active');
				trig.next('.toggle_container').slideToggle('slow');
				trig.addClass('trigger_active');
			};
			return false;
		});
	});
	
	/* bxslider */
	
	$(document).ready(function(){
		$('.bxslider').bxSlider({
		auto: false,
		mode: 'fade',
		speed: '10000',
		randomStart: false,
		pager: true,
		captions: true,
		adaptiveHeight: true,
		adaptiveHeightSpeed: 700,
		responsive: true,
		touchEnabled: true,
		preloadImages: true
		});
	});		
	
	$(document).ready(function(){
		$('.homeslider').bxSlider({
		auto: true,
		pause: '5000',
		hyperlinks: true,
		mode: 'fade',
		speed: '10000',
		randomStart: true,
		pager: true,
		captions: true,
		adaptiveHeight: true,
		adaptiveHeightSpeed: 700,
		responsive: true,
		touchEnabled: true,
		preloadImages: true
		});
	});	
	
	
});