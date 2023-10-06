$(".menu-btn").click(function(){
  $("body").toggleClass("open-menu");
});

$('.testi-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [{
    breakpoint: 991.98,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
     breakpoint: 767.98,
     settings: "unslick"
  }]
});

$('.img-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  mobileFirst: true,
});

$('.card-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  mobileFirst: true,
  responsive: [{
    breakpoint: 991.98,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
});

$(".select-btn").click(function(){
  $(this).parent().toggleClass("active")
});