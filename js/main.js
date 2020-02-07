var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    loop: true,
    navigation: {
        nextEl: '.arrow', 
      },
  breakpoints: {
    // when window width is >= 540px
    540: {
      slidesPerView: 2
    },
}
});

let menuButton = document.querySelector('.menu-btn');
let menu = document.querySelector('.header')
menuButton.addEventListener('click', function(){
	menuButton.classList.toggle('menu-btn-active');
	menu.classList.toggle('header-active');
})