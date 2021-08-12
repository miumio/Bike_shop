(function () {

  const nav = document.querySelector('.nav');
  const toggler = document.querySelector('.nav__toggler');
  const body = document.querySelector('body');

  nav.classList.remove('nav--nojs');
  nav.classList.add('nav--closed');
  toggler.classList.add('nav__toggler--show');

  toggler.addEventListener('click', function () {
    if (nav.classList.contains('nav--closed')) {
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
      body.style.overflow = 'hidden';
    } else {
      nav.classList.add('nav--closed');
      nav.classList.remove('nav--opened');
      body.style.overflow = 'visible';
    }
  }, { passive: true }, { once: true },
  );

})();
