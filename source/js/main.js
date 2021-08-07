'use strict';
const nav = document.querySelector('.nav');
const toggler = document.querySelector('.nav__toggler');

nav.classList.remove('nav--nojs');
nav.classList.add('nav--closed');
toggler.classList.add('nav__toggler--show');

toggler.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});

const links = document.querySelectorAll('a[href*="#"]');
const animationTime = 300;
const framesCount = 20;

links.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();

    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    let scroller = setInterval(function () {
      let scrollBy = coordY / framesCount;

      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});
