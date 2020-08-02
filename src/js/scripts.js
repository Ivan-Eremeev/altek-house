//= ../../bower_components/jquery/dist/jquery.js
//= jquery.matchHeight.js
//= jquery.fancybox.js
//= jquery-ui.js
//= fotorama.js
$(document).ready(function () {
	// MATCH HEIGHT
	$('.house-card').matchHeight();
	$('.house-card_title').matchHeight();
	$('.calc_block').matchHeight();

	// MOBILE MENU
	var menu = $('#menu_list');
	var timeIn = 300;
	$('#menu_btn').click(function() {
		menu.slideToggle(timeIn);
	});
	menu.find('li').click(function() {
		if(window.matchMedia('(max-width: 720px)').matches) {
			menu.slideUp(timeIn);
		}
	});
	$(window).resize(function() {
		if(window.matchMedia('(min-width: 721px)').matches) {
			menu.css({'display':'block'});
		}
		if(window.matchMedia('(max-width: 720px)').matches) {
			menu.css({'display':'none'});
		}
	});

	$('#menu_close').click(function() {
		menu.slideUp(timeIn);
	});

	// TABS IN MAIN PAGE
	var houseTab = $('#house-tabs').find('li');
	var houseGroup = $('.house-group');
	houseTab.click(function() {
		var index = $(this).index();
		houseTab.removeClass('active');
		$(this).addClass('active');
		houseGroup.addClass('hide');
		houseGroup.eq(index).removeClass('hide');
	});

	// // TABS IN PROJECTS PAGE
	// var houseProj = $('#tabs-proj').find('li');
	// var houseGroupProj = $('.projects-group');
	// houseProj.click(function() {
	// 	var index = $(this).index();
	// 	houseProj.removeClass('active');
	// 	$(this).addClass('active');
	// 	houseGroupProj.addClass('hide');
	// 	houseGroupProj.eq(index).removeClass('hide');
	// });

	// // TABS IN PRODUCT PAGE
	// var calcTab = $('#calc-tabs').find('li');
	// var calcGroup = $('.calc_body');
	// calcTab.click(function() {
	// 	var index = $(this).index();
	// 	calcTab.removeClass('active');
	// 	$(this).addClass('active');
	// 	calcGroup.addClass('hide');
	// 	calcGroup.eq(index).removeClass('hide');
	// });

	// RANGE
	function range1() {
		$('#range-1').slider({
			range: true,
			min: 100000,
			max: 10000000,
			values: [ 100000, 10000000 ],
			slide: function( event, ui ) {
	        	$( "#price1" ).val(ui.values[ 0 ]);
	        	$( "#price2" ).val(ui.values[ 1 ]);
        	}
		});
	};

	function range2() {
		$('#range-2').slider({
			range: true,
			min: 0,
			max: 1000,
			values: [ 0, 1000 ],
			slide: function( event, ui ) {
				$( "#area1" ).val(ui.values[ 0 ] );
	        	$( "#area2" ).val(ui.values[ 1 ] );
	        }
		});
	};

	range1();
	range2();

	// FOTORAMA
	var fotorama = $('.fotorama').fotorama({
		height: 400,
		nav: 'thumbs',
		thumbwidth: 120,
		thumbheight: 80,
		click: false,
		swipe: false
	});

	$('.fotorama__stage').click(function() {
		var src = $('.fotorama__active img').attr('src');
		$.fancybox.open({
			src: src,
		});
	});
	
	// RESET FORM
	$('.reset-form').click(function() {
		$(this).closest('form')[0].reset();
		range1();
		range2();
	});
})