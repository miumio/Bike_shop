(function () {

  const links = document.querySelectorAll('.nav__link');
  const SPEED = 0.2;

  links.forEach((item) => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      const from = window.pageYOffset;
      const hash = this.href.replace(/[^#]*(.*)/, '$1');

      const el = document.querySelector(hash);

      if (!el) return;

      const { top } = el.getBoundingClientRect();
      let start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        let progress = time - start;
        let r = (top < 0 ? Math.max(from - progress / SPEED, from + top) : Math.min(from + progress / SPEED, from + top));
        window.scrollTo(0, r);
        if (r !== from + top) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      }
    },
      false);
  });

})();
