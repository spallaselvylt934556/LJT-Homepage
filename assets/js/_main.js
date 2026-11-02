(function ($) {
  'use strict';

  function themePreference() {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    $('#theme-icon').removeClass('fa-sun fa-moon').addClass(theme === 'dark' ? 'fa-moon' : 'fa-sun');
  }

  $(function () {
    setTheme(themePreference());
    $('#theme-toggle').on('click', function () {
      var theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
      setTheme(theme);
    });
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (event) {
        if (['light', 'dark'].indexOf(localStorage.getItem('theme')) === -1) setTheme(event.matches ? 'dark' : 'light');
      });
    }
  });
})(jQuery);
