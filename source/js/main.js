'use strict';
var nav = document.querySelector('.nav');
var toggler = document.querySelector('.nav__toggler');

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
