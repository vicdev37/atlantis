import module from './module'
import jquery from 'jquery'
window.$ = window.jQuery = jquery;


$(document).ready(() => {
  console.log($('body'))
  module()

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

})





AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation



});