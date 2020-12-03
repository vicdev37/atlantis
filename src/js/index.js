import module from './module'
import jquery from 'jquery'
window.$ = window.jQuery = jquery;


$(document).ready(() => {
  console.log($('body'))
  module()

  AOS.init();

  let mainSlider = document.querySelector('.slider__wrapper')

  if (mainSlider) {
    let items = document.querySelectorAll('.slider-item');
    let current = 0;

    function slider() {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.add('opacity0');
      }
      items[current].classList.remove('opacity0');
      if (current + 1 == items.length) {
        current = 0;
      } else {
        current++
      }
    }

    let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.slider-prev'),
      next = document.querySelector('.slider-next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach((item) => item.style.display = 'none');
      dots.forEach((item) => item.classList.remove('dot-active'));

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
      plusSlides(-1);
    });
    next.addEventListener('click', function () {
      plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
      for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
          currentSlide(i);
        }
      }
    });
  }


  const renderListMap = ($el, coords, showControl) => {
    const controls = isMobile() && !showControl ? [] : ["zoomControl"];
    let top = $(".contacts-container__map").height() / 2 - 30;
    if ($(".contacts-fs-map-screen").length) {
      top = $(".contacts-fs-map-screen").height() / 2 - 30;
    }

    const map = new ymaps.Map(
      $el[0], {
        center: coords,
        zoom: 12,
        controls: controls,
      }, {
        suppressMapOpenBlock: true,
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: {
          right: "20px",
          top: top + "px",
        },
      }
    );
    const mark = new ymaps.Placemark(
      coords, {
        // hintContent: "Центральный офис",
      }, {
        iconLayout: "default#image",
        iconImageHref: "../images/pin.svg",
        iconImageSize: [68, 78],
        iconImageOffset: [-34, -64],
      }
    );
    // map.behaviors.disable("scrollZoom");
    // map.behaviors.disable("dblClickZoom");
    map.geoObjects.add(mark);
    return map;
  };

  const renderItemList = (list, type) => {
    const $container = $("#contacts-id__" + type);
    const $itemContainer = $container
      .find(".contacts-container__right")
      .html("");

    const _list = convertList(list);

    $("#contacts-template")
      .tmpl(_list)
      .appendTo($itemContainer);
  };

  const showMobileMap = (coords, address, e) => {
    e.preventDefault();

    $("#contacts-template-map-fs")
      .tmpl({
        address: address,
      })
      .appendTo($("body"));

    const $map = $(".contacts-fs-screen-map__content");

    const _map = renderListMap($map, coords, true);

    $(".contacts-fs-screen-map__close-btn").click(e => {
      e.preventDefault();
      _map.destroy();
      $(".contacts-fs-map-screen").remove();
    });
  };

  const renderYaMaps = () => {
    ymaps.ready(() => {
      $(".contacts-container__map").each(function () {
        const $el = $(this);
        const $elContainer = $el
          .closest(".contacts-container__map-container")
          .find(".contacts-container__map-holder");
        const map = $(this).data("map");

        if (map) {
          map.destroy();
          $elContainer.off("click");
        }
        const coords = [$(this).attr("data-lat"), $(this).attr("data-lng")];
        const address = $(this).attr("data-address");
        console.log(coords);
        const _map = renderListMap($el, coords);
        $el.data("map", _map);

        if (isMobile()) {
          $elContainer.on("click", showMobileMap.bind(null, coords, address));
        }
      });
    });
  };


  // menu
  $('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.main-nav__ul').toggleClass('menu_active');


  });

  $(".main-nav__li").click(function () {
    $(".menu-btn").toggleClass('menu-btn_active');
    $(".main-nav__ul").toggleClass('menu_active');
  });


  let menuBtn = document.querySelector('.menu-btn');
  let nav = document.querySelector('.menu-mobile');
  let overlay = document.querySelector('.overlay');


  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('menu_active');
    nav.classList.toggle('menu_active');
    overlay.classList.toggle('overlay-show');
  });



  // $(document).mouseup(function (e) {
  //   if (!$('.menu-mobile').is(e.target) && $('.menu-mobile').has(e.target).length === 0) {
  //     $('.menu-btn').removeClass('menu-btn_active');
  //     $('.menu-mobile').removeClass('menu_active');

  //   }


  // });


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