import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);


new Swiper('.swiper.cases-slider', {
  slidesPerView: 1.02,
  speed: 1000,
  spaceBetween: 16,

 navigation: {
    nextEl: '.cases-slider .swiper-button-next',
    prevEl: '.cases-slider .swiper-button-prev',
  },
});

new Swiper('.swiper.solutions-slider', {
  slidesPerView: 1.02,
  speed: 1000,
  spaceBetween: 16,

 navigation: {
    nextEl: '.solutions-slider .swiper-button-next',
    prevEl: '.solutions-slider .swiper-button-prev',
  },
});
