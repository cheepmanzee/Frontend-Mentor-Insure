const $burger = document.querySelector('.navbar__burger');
const $dropMenu = document.querySelector('.menu-drop');
const $body = document.querySelector('body');
const $heroTitle = document.querySelector('h1');
const $heroText = document.querySelector('.hero__offer p');
const $heroBtn = document.querySelector('.hero__offer a');
const $heroImg = document.querySelector('.hero__image');
const $navbar = document.querySelector('.navbar');

window.addEventListener('load', () => {
   const preloader = document.querySelector('.preloader');
   preloader.classList.add('preload-fin');
   $heroTitle.classList.add('load-pop');
   $heroText.classList.add('load-pop');
   $heroBtn.classList.add('load-pop');
   $heroImg.classList.add('load-pop');
   $navbar.classList.add('load-pop');
})

$burger.addEventListener('click', () => {
   if ($dropMenu.classList.contains('drop')) {
      $dropMenu.classList.remove('drop')
      $burger.innerHTML = '<img src="img/icon-hamburger.svg">'
      $body.style.overflowY = 'initial';
   } else {
      $dropMenu.classList.add('drop')
      $burger.innerHTML = '<img src="img/icon-close.svg">'
      $body.style.overflowY = 'hidden';
   }
})

function scrollDiffPop() {
   var diffTitle = document.querySelector('.adv__wrapper h2');
   var position = diffTitle.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.1;
   if (position < screenPosition) {
      diffTitle.classList.add('load-pop');
   }
}

function scrollDiffItemPop() {
   var row = document.querySelector('.adv__row');
   var item = document.querySelectorAll('.row__item');
   var position = row.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.2;
   if (position < screenPosition) {
      for (let i of item) {
         i.classList.add('load-pop')
      }
   }
}

window.addEventListener('scroll', scrollDiffPop);
window.addEventListener('scroll', scrollDiffItemPop);