import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


new Swiper('.swiper.reviews-slider', {
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  spaceBetween: 40,

 navigation: {
    nextEl: '.reviews-slider .swiper-button-next',
    prevEl: '.reviews-slider .swiper-button-prev',
  },

  pagination: {
    el: '.reviews-slider .swiper-pagination',
    clickable: true,
  },
});
