import module from './module'
import jquery from 'jquery'
window.$ = window.jQuery = jquery;


$(document).ready(() => {
  console.log($('body'))
  module()

  AOS.init();

  // let mainSlider = document.querySelector('.slider__wrapper')

  // if (mainSlider) {
  //   let items = document.querySelectorAll('.slider-item');
  //   let current = 0;

  //   function slider() {
  //     for (let i = 0; i < items.length; i++) {
  //       items[i].classList.add('opacity0');
  //     }
  //     items[current].classList.remove('opacity0');
  //     if (current + 1 == items.length) {
  //       current = 0;
  //     } else {
  //       current++
  //     }
  //   }

  //   let slideIndex = 1,
  //     slides = document.querySelectorAll('.slider-item'),
  //     prev = document.querySelector('.slider-prev'),
  //     next = document.querySelector('.slider-next'),
  //     dotsWrap = document.querySelector('.slider-dots'),
  //     dots = document.querySelectorAll('.dot');

  //   showSlides(slideIndex);

  //   function showSlides(n) {
  //     if (n > slides.length) {
  //       slideIndex = 1;
  //     }
  //     if (n < 1) {
  //       slideIndex = slides.length;
  //     }

  //     slides.forEach((item) => item.style.display = 'none');
  //     dots.forEach((item) => item.classList.remove('dot-active'));

  //     slides[slideIndex - 1].style.display = "block";
  //     dots[slideIndex - 1].classList.add('dot-active');
  //   }

  //   function plusSlides(n) {
  //     showSlides(slideIndex += n);
  //   }

  //   function currentSlide(n) {
  //     showSlides(slideIndex = n);
  //   }

  //   prev.addEventListener('click', function () {
  //     plusSlides(-1);
  //   });
  //   next.addEventListener('click', function () {
  //     plusSlides(1);
  //   });

  //   dotsWrap.addEventListener('click', function (event) {
  //     for (let i = 0; i < dots.length + 1; i++) {
  //       if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
  //         currentSlide(i);
  //       }
  //     }
  //   });
  // }


  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    fadeEffect: {
      crossFade: true
    },

  })


  // const renderListMap = ($el, coords, showControl) => {
  //   const controls = isMobile() && !showControl ? [] : ["zoomControl"];
  //   let top = $(".contacts-container__map").height() / 2 - 30;
  //   if ($(".contacts-fs-map-screen").length) {
  //     top = $(".contacts-fs-map-screen").height() / 2 - 30;
  //   }

  //   const map = new ymaps.Map(
  //     $el[0], {
  //       center: coords,
  //       zoom: 12,
  //       controls: controls,
  //     }, {
  //       suppressMapOpenBlock: true,
  //       zoomControlSize: "small",
  //       zoomControlFloat: "none",
  //       zoomControlPosition: {
  //         right: "20px",
  //         top: top + "px",
  //       },
  //     }
  //   );
  //   const mark = new ymaps.Placemark(
  //     coords, {
  //       // hintContent: "Центральный офис",
  //     }, {
  //       iconLayout: "default#image",
  //       iconImageHref: "../images/pin.svg",
  //       iconImageSize: [68, 78],
  //       iconImageOffset: [-34, -64],
  //     }
  //   );
  //   // map.behaviors.disable("scrollZoom");
  //   // map.behaviors.disable("dblClickZoom");
  //   map.geoObjects.add(mark);
  //   return map;
  // };

  // const renderItemList = (list, type) => {
  //   const $container = $("#contacts-id__" + type);
  //   const $itemContainer = $container
  //     .find(".contacts-container__right")
  //     .html("");

  //   const _list = convertList(list);

  //   $("#contacts-template")
  //     .tmpl(_list)
  //     .appendTo($itemContainer);
  // };

  // const showMobileMap = (coords, address, e) => {
  //   e.preventDefault();

  //   $("#contacts-template-map-fs")
  //     .tmpl({
  //       address: address,
  //     })
  //     .appendTo($("body"));

  //   const $map = $(".contacts-fs-screen-map__content");

  //   const _map = renderListMap($map, coords, true);

  //   $(".contacts-fs-screen-map__close-btn").click(e => {
  //     e.preventDefault();
  //     _map.destroy();
  //     $(".contacts-fs-map-screen").remove();
  //   });
  // };

  // const renderYaMaps = () => {
  //   ymaps.ready(() => {
  //     $(".contacts-container__map").each(function () {
  //       const $el = $(this);
  //       const $elContainer = $el
  //         .closest(".contacts-container__map-container")
  //         .find(".contacts-container__map-holder");
  //       const map = $(this).data("map");

  //       if (map) {
  //         map.destroy();
  //         $elContainer.off("click");
  //       }
  //       const coords = [$(this).attr("data-lat"), $(this).attr("data-lng")];
  //       const address = $(this).attr("data-address");
  //       console.log(coords);
  //       const _map = renderListMap($el, coords);
  //       $el.data("map", _map);

  //       if (isMobile()) {
  //         $elContainer.on("click", showMobileMap.bind(null, coords, address));
  //       }
  //     });
  //   });
  // };


  // menu





  $(document).mouseup(function (e) {
    $('.menu-btn').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('menu-btn_active');
      $('.menu-mobile').toggleClass('menu_active');
      $('.overlay').toggleClass('overlay-show');
    });

    if (!$('.menu-mobile').is(e.target) && $('.menu-mobile').has(e.target).length === 0) {
      $('.menu-btn').removeClass('menu-btn_active');
      $('.menu-mobile').removeClass('menu_active');
      $('.overlay').removeClass('overlay-show');
    }

  });

  // $(".main-nav__li").click(function () {
  //   $(".menu-btn").toggleClass('menu-btn_active');
  //   $(".main-nav__ul").toggleClass('menu_active');
  // });


  // let menuBtn = document.querySelector('.menu-btn');
  // let nav = document.querySelector('.menu-mobile');
  // let overlay = document.querySelector('.overlay');


  // menuBtn.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   this.classList.toggle('menu_active');
  //   nav.classList.toggle('menu_active');
  //   overlay.classList.toggle('overlay-show');
  // });






  const galleryHandler = $gallery => {
    const $slides = $gallery.find(".gallery__slide");
    const $buttons = $gallery.find(".gallery__button");
    const $rightButton = $gallery.find(".gallery__button--next");
    const $leftButton = $gallery.find(".gallery__button--prev");
    const activeSlideClass = "gallery__slide--active";
    const deactivateButtonClass = "gallery__button--deactivate";
    const totalCount = $slides.length - 1;

    const renderButtons = () => {
      const $currentSlide = $gallery.find(`.${activeSlideClass}`);
      const index = $slides.index($currentSlide);

      $buttons.removeClass(deactivateButtonClass);
      if (index === 0) {
        $leftButton.addClass(deactivateButtonClass);
      }
      if (index === totalCount) {
        $rightButton.addClass(deactivateButtonClass);
      }
    };

    const moveSlide = (direction, e, _this) => {
      console.log(direction, e);
      e && e.preventDefault();

      if ($(_this).hasClass(deactivateButtonClass)) return false;

      const $currentSlide = $gallery.find(`.${activeSlideClass}`);
      const $nextSlide = $currentSlide[direction]();
      $currentSlide.removeClass(activeSlideClass);
      $nextSlide.addClass(activeSlideClass);

      renderButtons();
    };

    $rightButton.click(function (e) {
      moveSlide("next", e, this);
    });
    $leftButton.click(function (e) {
      moveSlide("prev", e, this);
    });

    renderButtons();
  };

  $(".gallery").each(function () {
    galleryHandler($(this));
  });

  const mobileWidth = 500;
  const isMobile = () => {
    return $(window).width() < mobileWidth;
  };


  if (!isMobile()) {
    var $line = $(".partners-line__wrapper");
    if ($line.length) {
      var b = $line.outerWidth(),
        f = $("body"),
        h = $(".partners-line__holder");
      h.height($line.height());
      var i = h.children(),
        e = $("body").width();
      $("html").is(".mobile, .tablet") ?
        (i.addClass("touch-scroll"), b > e && i.scrollLeft(b - e)) :
        (b > e && $line.css("margin-left", e - b),
          $(document).mousemove(function (a) {
            var b = $line.outerWidth(),
              c = f.width();
            console.log(c, b);
            if (c >= b) return void $line.css("margin-left", "auto");
            var d = (b - c) / (c - 200),
              e = Math.max(a.clientX - 100, 0);
            e > c && (e = c);
            var h = c - b,
              i = Math.max(d * -e, h);
            $line.css("margin-left", i);
          }),
          $(window).on("resize", function () {
            var a = $line.outerWidth(),
              b = f.width();
            return b >= a ?
              void $line.css("margin-left", "auto") :
              void $line.css("margin-left", b - a);
          }));
    }
  }


  const videoClickHandler = () => {
    $(".video-item").click(function (e) {
      if (!isMobile()) {
        e.preventDefault();
        const youtubeId = $(this).attr("data-youtube-id");
        $(".video-modal__holder").attr(
          "src",
          `https://www.youtube.com/embed/${youtubeId}?autoplay=1`
        );
        $(".video-modal__wrapper").show();
      }
    });

    $(".video-modal").click(function (e) {
      e.preventDefault();
      $(".video-modal__holder").attr("src", "");
      $(".video-modal__wrapper").hide();
    });
  };

  videoClickHandler();




  const partnerLineRenderOffset = () => {
    if (!isMobile()) return false;
    const offsetLeft = $(".partners-line").offset().left;
    $(".partners-line__wrapper").css({
      "padding-left": offsetLeft,
    });
  };

  if ($("body").hasClass("index-page")) {
    $(window).on("resize", () => {
      partnerLineRenderOffset();
    });
    partnerLineRenderOffset();
  }



});







// // You can also pass an optional settings object
// // below listed default settings
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation



// });