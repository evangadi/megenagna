'use strict';
/* --------------- WAYPOINT ------------------ */
	function wayPoint() {
		jQuery('.main-header-v1').waypoint(function() {
			setTimeout(function() {
				jQuery('.text-1').addClass('animated fadeInUp');
			}, 100);
			setTimeout(function() {
				jQuery('.main-header-v1 .banner-caption-text h2').addClass('animated fadeInDown');
			}, 100);
		}, { offset: '50%' });
		
		jQuery('.content-1').waypoint(function() {
			setTimeout(function() {
				jQuery('.image-banner-2').addClass('animated fadeInUp');
			}, 100);
		}, { offset: '70%' });
		jQuery('.content-2 , .content-8').waypoint(function() {
			setTimeout(function() {
				jQuery('.image-banner-1:nth-of-type(1)').addClass('animated fadeInUp');
			}, 100);
			setTimeout(function() {
				jQuery('.image-banner-1:nth-of-type(2)').addClass('animated fadeInUp');
			}, 200);
			setTimeout(function() {
				jQuery('.image-banner-1:nth-of-type(3)').addClass('animated fadeInUp');
			}, 300);
			setTimeout(function() {
				jQuery('.image-banner-1:nth-of-type(4)').addClass('animated fadeInUp');
			}, 400);
		}, { offset: '50%' });
	}


jQuery(document).ready(function(){
	//sticky menu
	if (jQuery(window).width() >= 992) {
		jQuery(window).on('scroll', function() {
			var menuHeight =($('.header-top-v-1').height());
			if ($(window).scrollTop() > menuHeight) {
				jQuery('.header-top-v-1').addClass('sticky-menu');
				jQuery('.logo').addClass('logosticky');
			}else{
				jQuery('.header-top-v-1').removeClass('sticky-menu');
				jQuery('.logo').removeClass('logosticky');
			}	
		});
	}	
	// parallax 
	var contentNewsletter = jQuery('.content-newsletter');
	 if (contentNewsletter.length) {
		contentNewsletter.parallax({
		speed : 0.5
		});
	 }
	// mobile social links
	jQuery('.toggle-share-alt').on('click',function(event){
		event.preventDefault();
		jQuery(this).next().slideToggle();
		jQuery('.header-search').removeClass('state-show');
	});
	// Mobile Menu
	jQuery('.menu-toogle,  #mobileNav2').on('click',function(event){
		event.preventDefault();
		jQuery('.navigation-mobile').toggleClass('active');
		jQuery('.navigation-mobile').slideToggle(150).stopPropagation();		
	});
	// Navigation Submenu
	jQuery('.navigation-mobile .menu-item-has-children >a').on('click',function(event){
		event.preventDefault();
		jQuery(this).toggleClass('active');
		jQuery(this).next().slideToggle();
	});
	// Toggle Search
	jQuery('.toggle-search-form').on('click',function  (event) {
		event.preventDefault();
		jQuery('.header-search').toggleClass('state-show');
	});
	// Owl Slider
	jQuery('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText:['<span class="glyphicon glyphicon-chevron-left"></span>','<span class="glyphicon glyphicon-chevron-right"></span>'],
    responsive:{
        0:{
            items:1
        },
       992:{
            items:3
        }
    }
	});
	
	// Ajax Contact form Submit
	jQuery('.contact-form form').on('submit', function(event){
    event.preventDefault();
    var formdata = jQuery('.contact-form form').serializeArray();
    jQuery.ajax({
      url: 'php/contact.php',
      type: 'POST',
      async: true,
      data: formdata,     
    }).done(function() {
          jQuery('.contact-form .form-messges').removeClass('hidden');
          jQuery('.contact-form .btn').attr('disabled', 'disabled');
      });
  });
  // waypoint
	if (jQuery(window).width() >= 992) { wayPoint(); }
	// Twitter Widget
	jQuery('.twitter-posts').twittie({
		'username':'ThemeForest',
		'count': 3,
		'template': '{{tweet}}',
		'apiPath':'php/api/tweet.php'
	});

});
jQuery(window).on('resize', function() {
		if ($(window).width() >= 992) { wayPoint(); }
})
.on('load',function(){
	// Isotope
	// Product Filter
	var $container = jQuery('.product-list');
	// initialize isotope
	$container.isotope({
	  itemSelector: '.product-grid'
	});
	// filter items when filter link is clicked
	jQuery('.product-list-filter a').on('click', function(){
		jQuery('.product-list-filter a').removeClass('active');
		jQuery(this).addClass('active');
	  var selector = jQuery(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  return false;
	});
	// product image lightbox
	$('.mfp-image').magnificPopup({
		type:"image",
		removalDelay: 500,
		callbacks: {
		   beforeOpen: function() {
		     // just a hack that adds mfp-anim class to markup 
		      this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		      this.st.mainClass = this.st.el.attr('data-effect');
		   }
		 },
		 closeOnContentClick: true,
		 midClick: true
	});
});