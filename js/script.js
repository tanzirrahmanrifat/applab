// head start

window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("fixed-top", window.scrollY > 600);
});

// nav active
$(document).on("click", "ul li", function () {
  $(this).addClass("active-font").siblings().removeClass("active-font");
});

// aos js
AOS.init();

// slick trusted company slider
$(document).ready(function () {
  $(".trust-company").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// review slick
$(document).ready(function () {
  $(".customer-item").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
});

//  scrolltop
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $("#topbtn").fadeIn();
    } else {
      $("#topbtn").fadeOut();
    }
  });

  $("#topbtn").click(function () {
    $("html ,body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
});

// preloader

let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
