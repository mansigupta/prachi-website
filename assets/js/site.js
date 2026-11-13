// Prachi Leathers: mobile menu, banner video pause/play, copy-email buttons.
(function () {
  var nav = document.getElementById('mainNav'), menuBtn = document.getElementById('menuBtn');
  if (menuBtn) menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  var vid = document.getElementById('heroVid'), tg = document.getElementById('vidToggle');
  if (vid && tg) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { vid.removeAttribute('autoplay'); vid.pause(); tg.textContent = 'PLAY VIDEO'; }
    tg.addEventListener('click', function () {
      if (vid.paused) { vid.play().catch(function () {}); tg.textContent = 'PAUSE VIDEO'; }
      else { vid.pause(); tg.textContent = 'PLAY VIDEO'; }
    });
  }

  document.querySelectorAll('.copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.getAttribute('data-copy');
      var done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1600); };
      var select = function () {
        var c = b.parentNode.querySelector('code'), r = document.createRange();
        r.selectNodeContents(c); var s = getSelection(); s.removeAllRanges(); s.addRange(r);
      };
      try { navigator.clipboard.writeText(t).then(done, select); } catch (e) { select(); }
    });
  });
})();
