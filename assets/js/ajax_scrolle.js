(function (Drupal, $) {
  Drupal.behaviors.myfeature = {
    attach: function (context, settings) {
      var selector = $('.time--scrolle img.selector', context);
      var targetSection = $('.wrapper--historique-des-chefs', context);

      if (targetSection.length === 0) {
        console.warn('Target section .wrapper--historique-des-chefs not found.');
        return;
      }

      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var sectionTop = targetSection.offset().top;
        var sectionBottom = sectionTop + targetSection.outerHeight();
        var windowHeight = $(window).height();

        if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
          var scrollRange = sectionBottom - sectionTop - windowHeight;
          var newPosition = scrollTop - sectionTop;

          newPosition = Math.max(0, Math.min(newPosition, scrollRange)) + 200;

          selector.css({
            'transform': 'translateY(' + newPosition + 'px)'
          });
        }
      });
    }
  };
}(Drupal, jQuery));
