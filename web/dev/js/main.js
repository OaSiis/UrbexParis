(function ($) {
  'use strict';

  var $navigation = $('.navbar'),
      w = $(window),
      top = 400;

  // Toggle display on < 992 devices
  if (window.innerWidth < 768) {
      $navigation.addClass("bg-faded");
      $navigation.addClass("navbar_border");
  };

  w.on("scroll", function() {
         // Hide/show button on mobile
         if (window.innerWidth > 768) {
             var scrollPos = w.scrollTop();

             if (top < scrollPos) {
                 // Hide button when user scrolls down
                 $navigation.addClass('bg-faded');
                 $navigation.addClass('navbar_border');
             } else {
                 // Show button when user is at the top of the scroll
                 $navigation.removeClass('bg-faded');
                 $navigation.removeClass('navbar_border');
             }
         }
     });

})(jQuery);
