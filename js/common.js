$(document).ready(function () {

	$.stellar({
		responsive: true,
		horizontalOffset: 60,
	});

	$('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup();

	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			
		},
		navText: ["<img src='./img/s_arrows_prev.png'>","<img src='./img/s_arrows_next.png'>"]

	});

	

	function wResize() {
		$("header").css("min-height", $(window).height())
	};
	wResize();

	$(window).resize(function () {
		wResize()
	});


	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function () {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$(".tabs_header_sales .tab_item").not(":first").hide();
	$(".tabs_header_sales .wrapper .tab").click(function () {
		$(".tabs_header_sales .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header_sales .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$(".s_map .tab").click(function() {
		$(".s_map .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_map .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active"); 

	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function () {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function (e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			alert("Спасибо за заявку!");
			setTimeout(function () {
				
			}, 1000);
		});
	});

});


$(window).load(function() {
	$(".top_header").animated("fadeInDown", "fadeOut");
	$(".tabs_header_sales .wrapper").animated("flipInY", "fadeOut");
	$(".trust_item").animated("fadeInRight", "fadeOut");
	$(".trust form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("section h2, footer h2, .map_top .tabs").animated("fadeInUp", "fadeOut");
});
