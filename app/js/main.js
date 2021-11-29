$(function () {

  $('.slidergalary__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [{
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },

    ]

  });

  $('.burger__menu').on('click', function () {
    $('.header__menu').toggleClass('active');

  });





});