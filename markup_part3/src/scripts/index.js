import Swiper from 'swiper';
import '../styles/index.scss';
import 'swiper/css/swiper.min.css';

var cboxSlider = new Swiper('.swiper-container.cbox1__slider-main', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination.cbox1__slider-pagination',
    clickable: true,
  },
});

const mainSwiper = new Swiper('.swiper-container.slider__main', {
  pagination: {
    el: '.swiper-pagination.slider__pagination',
    dynamicBullets: true,
  },
  loop: true,
  speed: 500,
  autoplay: 500,
});

// Now you can use all slider methods like
cboxSlider.slideNext();
mainSwiper.slideNext();
