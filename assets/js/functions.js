$( document ).ready(function() {

  $(".phone-number").inputmask({"mask": "+7 (999) 999-9999"});

  $('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '<span class="icomoon icon-left-arrow"></span>',
    nextArrow: '<span class="icomoon icon-right-arrow"></span>'
  });

  $('.might-like-list').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
  });

  $(document).ready(function() {
  	$('.gallery-list-item').magnificPopup({
  		delegate: 'a',
  		type: 'image',
  		tLoading: 'Loading image #%curr%...',
  		mainClass: 'mfp-img-mobile',
  		gallery: {
  			enabled: true,
  			navigateByImgClick: true,
  			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  		},
  		image: {
  			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  			titleSrc: function(item) {
  				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
  			}
  		}
  	});
  });

  $('.nav-link-first').click(function() {
    $('.nav-link-first-menu').toggleClass('active');
  })
});

// Change icon in map iframe



/*
var changeBg = () => {
  document.getElementById("navbar").style.backgroundColor = "#323232";
}
*/
