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

const links = document.querySelectorAll('.nav__link');
const SPEED = 0.2;

links.forEach((item) => {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();

    const scroll = window.pageYOffset;
    const hash = this.href.replace(/[^#]*(.*)/, '$1');

    const el = document.querySelector(hash);

    if (!el) return;

    const { top } = el.getBoundingClientRect();
    let start = null;
    requestAnimationFrame(step);

    function step(time) {
      if (start === null) start = time;
      let progress = time - start;
      let r = (top < 0 ? Math.max(scroll - progress / SPEED, scroll + top) : Math.min(scroll + progress / SPEED, scroll + top));
      window.scrollTo(0, r);
      if (r !== scroll + top) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash
      }
    }
  }, false);
});
