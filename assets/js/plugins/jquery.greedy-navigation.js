(function ($) {
  'use strict';

  $(function () {
    var nav = $('#site-nav');
    var button = nav.find('button');
    var visible = nav.find('.visible-links');
    var hidden = nav.find('.hidden-links');

    function updateNav() {
      button.addClass('hidden');
      hidden.addClass('hidden');
      // Repeatedly measure the laid-out list rather than relying on its offset width.
      while (visible.get(0).scrollWidth > visible.parent().width() + 1) {
        var item = visible.children(':not(.persist):last');
        if (!item.length) break;
        item.prependTo(hidden);
        button.removeClass('hidden');
      }
    }

    function positionMenu() {
      hidden.css({
        right: Math.max(0, nav.outerWidth() - button.offset().left - button.outerWidth() / 2) + 'px',
        top: $('.masthead').outerHeight() - nav.offset().top + 'px'
      });
    }

    button.on('click', function (event) {
      event.stopPropagation();
      positionMenu();
      hidden.toggleClass('hidden');
      $(this).toggleClass('close');
    });
    $(document).on('click', function () {
      hidden.addClass('hidden');
      button.removeClass('close');
    });
    hidden.on('click', function (event) { event.stopPropagation(); });
    $(window).on('resize', updateNav);
    updateNav();
  });
})(jQuery);
