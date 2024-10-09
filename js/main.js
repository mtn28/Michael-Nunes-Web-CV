(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight(); // Altura do cabeçalho
  
	$('.navbar-toggler').on('click', function() {
	  if( ! $('#mainNav').hasClass('navbar-reduce')) {
		$('#mainNav').addClass('navbar-reduce');
	  }
	});
  
	// Preloader
	$(window).on('load', function () {
	  if ($('#preloader').length) {
		$('#preloader').delay(100).fadeOut('slow', function () {
		  $(this).remove();
		});
	  }
	});

	// Back to top button
  
	$(document).ready(function() {
		var backToTopButton = $('.back-to-top');
		var footer = $('footer');
		
		function adjustBackToTopPosition() {
		  var scrollTop = $(window).scrollTop();
		  var windowHeight = $(window).height();
		  var footerOffsetTop = footer.offset().top;
		  var buttonHeight = backToTopButton.outerHeight();
		  
		  // Se o topo da janela + altura da janela ultrapassar o topo do footer
		  if (scrollTop + windowHeight > footerOffsetTop) {
			var distanceFromFooter = (scrollTop + windowHeight) - footerOffsetTop;
			backToTopButton.css({
			  bottom: distanceFromFooter + 15 + 'px'  // Ajusta o botão para não ultrapassar o footer
			});
		  } else {
			backToTopButton.css({
			  bottom: '15px'  // Mantém o botão fixo em 15px do fundo da janela
			});
		  }
		}
	  
		// Mostra/esconde o botão e ajusta a posição
		$(window).scroll(function() {
		  if ($(this).scrollTop() > 100) {
			backToTopButton.fadeIn('slow');
		  } else {
			backToTopButton.fadeOut('slow');
		  }
	  
		  adjustBackToTopPosition();
		});
	  
		// Suaviza o scroll ao clicar no botão
		backToTopButton.click(function() {
		  $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		  return false;
		});
	  });
	  
	  
  
	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function (e) {
	  e.preventDefault(); // Previne o comportamento padrão
  
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  
	  if (target.length) {
		var scrollOffset = target.offset().top - navHeight;
  
		// Se a seção for "Sobre", aplicar um scroll extra apenas visualmente
		if (target.is("#about")) {
		  $('html, body').animate({
			scrollTop: scrollOffset + 50 // Adicionar o deslocamento extra para "Sobre"
		  }, 1000, "easeInOutExpo");
		} else {
		  // Para todas as outras seções, manter o comportamento padrão
		  $('html, body').animate({
			scrollTop: scrollOffset
		  }, 1000, "easeInOutExpo");
		}
	  }
	});
  
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
	  $('.navbar-collapse').collapse('hide');
	});
  
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
	  target: '#mainNav',
	  offset: navHeight + 10 // Aumenta o offset para garantir precisão ao marcar as seções
	});
  
	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
	  var pixels = 50;
	  var top = 1200;
	  if ($(window).scrollTop() > pixels) {
		$('.navbar-expand-md').addClass('navbar-reduce');
		$('.navbar-expand-md').removeClass('navbar-trans');
	  } else {
		$('.navbar-expand-md').addClass('navbar-trans');
		$('.navbar-expand-md').removeClass('navbar-reduce');
	  }
	  if ($(window).scrollTop() > top) {
		$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
	  } else {
		$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
	  }
	});
  
	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
	  var typed_strings = $('.text-slider-items').text();
	  var typed = new Typed('.text-slider', {
		strings: typed_strings.split(','),
		typeSpeed: 80,
		loop: true,
		backDelay: 1100,
		backSpeed: 30
	  });
	}
  
	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
	  margin: 20,
	  autoplay: true,
	  autoplayTimeout: 4000,
	  autoplayHoverPause: true,
	  responsive: {
		0: {
		  items: 1,
		}
	  }
	});
  
  })(jQuery);
  