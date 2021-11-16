// search onclick event
var searchForm = document.querySelector('.search');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

// cart onclick event
var cartForm = document.querySelector('.cart');
document.querySelector('#cart-btn').onclick = () =>{
    cartForm.classList.toggle('active');
}

// login onclick event
var loginForm = document.querySelector('.login');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

// bar onclick event
var barForm = document.querySelector('.bar');
document.querySelector('#bar-btn').onclick = () =>{
    barForm.classList.toggle('active');
}


var swiper = new Swiper(".container1", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});