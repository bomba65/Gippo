$( document ).ready(function() {

  $('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
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

});

// Change icon in map iframe



/*
var changeBg = () => {
  document.getElementById("navbar").style.backgroundColor = "#323232";
}
*/
