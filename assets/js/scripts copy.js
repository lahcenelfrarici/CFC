(function ($) {
  $(window).on('scroll', function () {
    var section = $('.wrapper--historique-des-chefs');

    // Check if the section exists on the page before proceeding
    if (section.length > 0) {
      var scrollTop = $(window).scrollTop();
      var sectionTop = section.offset().top;
      var sectionBottom = sectionTop + section.outerHeight();
      var img = $('.time--scrolle img');
      var imgHeight = img.outerHeight();

      // Check if we are within the scrollable section
      if (scrollTop >= sectionTop && scrollTop <= sectionBottom - imgHeight) {
        var scrolledPercent = (scrollTop - sectionTop) / (sectionBottom - sectionTop - imgHeight);

        // Move the image based on scroll position
        img.css('transform', 'translateY(' + (scrolledPercent * 100) + '%)');
      } else if (scrollTop < sectionTop) {
        // Before the section
        img.css('transform', 'translateY(0)');
      } else if (scrollTop > sectionBottom - imgHeight) {
        // After the section
        img.css('transform', 'translateY(120%)');
      }
    }
  });

  // var sticky = new Sticky('.selector');
  // 
  // Count the number of items
  const itemsCount = $(".owl-carousel .owl-items").length;

  if (itemsCount > 1) {
    // Initialize Owl Carousel when there are 2 or more items
    $(".owl-carousel").owlCarousel({
      items: 1, // Show one item at a time
      loop: true, // Loop through items
      autoplay: false, // Disable Owl autoplay
      video: true, // Enable video support
      //  onTranslate: stopAllMedia, // Stop media when the slide changes
      //  onTranslated: autoplayMedia, // Autoplay media when slide is visible
    });
  } else {
    // If there's only 1 item, display it normally
    $('.owl-carousel').addClass('single-item-mode');
    $('.single-item-mode').css({
      'display': 'block', // Display the single item without carousel
      'width': '100%' // Ensure the item takes up full width
    });
  }

  //  // Stop all media when the slide changes
  //  function stopAllMedia() {
  //    // Stop all HTML5 videos
  //    $('video.local-video').each(function() {
  //      this.pause();
  //      this.currentTime = 0; // Reset video to start
  //    });

  //    // Stop all YouTube iframes
  //    $('iframe.youtube-iframe').each(function() {
  //      const iframeSrc = $(this).attr('src');
  //      $(this).attr('src', iframeSrc); // Reset iframe to stop video
  //    });
  //  }

  //  // Autoplay media when the slide is visible
  //  function autoplayMedia(event) {
  //    const $currentSlide = $('.owl-item.active .slider-main');

  //    // Autoplay HTML5 video if present
  //    const $video = $currentSlide.find('video.local-video');
  //    if ($video.length) {
  //      $video.get(0).play(); // Play video
  //    }

  //    // Autoplay YouTube iframe if present
  //    const $iframe = $currentSlide.find('iframe.youtube-iframe');
  //    if ($iframe.length) {
  //      const player = new YT.Player($iframe[0], {
  //        events: {
  //          'onReady': function(event) {
  //            event.target.playVideo(); // Autoplay YouTube video
  //          }
  //        }
  //      });
  //    }
  //  }

  // Load YouTube IFrame API asynchronously
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  // 
  $(".main-menu button.navbar-toggler").click(function () {
    $(".mobile-menu").toggleClass("showing--menu-mobile");
  });
  // Handle click events on nav items with submenus within .mobile-menu
  $('.mobile-menu .nav-item').on('click', function (event) {
    var $this = $(this);

    // Toggle the active class for the clicked nav item
    $this.toggleClass('active');

    // Close other open submenus
    $('.mobile-menu .nav-item').not($this).removeClass('active');

    // Prevent default link behavior
    event.preventDefault();
  });
  window.playVideo = function (button) {
    var videoSrc = $(button).closest('.video-item').data('video-src');
    $('#videoIframe').attr('src', videoSrc);
    $('#videoModal').modal('show');
  };

  $('#videoModal').on('hidden.bs.modal', function () {
    $('#videoIframe').attr('src', '');
  });
  $(document).ready(function () {
    // 
    window.playVideo = function (button) {
      var videoSrc = $(button).closest('.video-item').data('video-src');
      $('#videoIframe').attr('src', videoSrc);
      $('#videoModal').modal('show');
    };

    $('#videoModal').on('hidden.bs.modal', function () {
      $('#videoIframe').attr('src', '');
    });
    // 
    $(".maps .slider-element-maps").owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      dots: true,
      // mouseDrag: false, // Disable mouse drag
      // touchDrag: false, // Disable touch drag
      autoHeight: true,
      // navText: [
      //   "<i class='fa-solid fa-angle-left'></i>",
      //   "<i class='fa-solid fa-angle-right'></i>"
      // ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,

        },
        600: {
          items: 1,
          autoHeight: false,
        },
        1000: {
          items: 1,
          dragEndSpeed: 0,
        }
      }
    });
    // 
    $(".slider--owl-v2").owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      dots: true,

      autoHeight: true,
      // navText: [
      //   "<i class='fa-solid fa-angle-left'></i>",
      //   "<i class='fa-solid fa-angle-right'></i>"
      // ],
      responsive: {
        0: {
          items: 1,
          dots: true,
        },

        600: {
          items: 1,
        },

        1024: {
          items: 1,
        },

        1366: {
          items: 1,
        },
      },
    });
    // 
    $(".slider-actualites-internes").owlCarousel({
      loop: true,
      nav: false,
      items: 3,
      margin: 10,
      dots: true,
      // autoWidth:true,
      // mouseDrag: false, // Disable mouse drag
      // touchDrag: false, // Disable touch drag
      autoHeight: true,
      // navText: [
      //   "<i class='fa-solid fa-angle-left'></i>",
      //   "<i class='fa-solid fa-angle-right'></i>"
      // ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,

        },
        600: {
          items: 1,
          autoHeight: false,
        },
        1000: {
          items: 3,
          dragEndSpeed: 0,
        }
      }
    });
    // 
    // 
    $(".slider-voyages-internes").owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      margin: 10,
      dots: true,
      // autoWidth:true,
      // mouseDrag: false, // Disable mouse drag
      // touchDrag: false, // Disable touch drag
      autoHeight: true,
      // navText: [
      //   "<i class='fa-solid fa-angle-left'></i>",
      //   "<i class='fa-solid fa-angle-right'></i>"
      // ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,

        },
        600: {
          items: 1,
          autoHeight: false,
        },
        1000: {
          items: 1,
          dragEndSpeed: 0,
        }
      }
    });
    // 
    // $(".slider-voyages-internes-center").owlCarousel({
    //   center: true,
    //   loop: true,
    //   nav: false,
    //   items: 3,
    //   dots: true,
    //   margin: 10,
    //   responsive: {
    //     0: {
    //       center: false,
    //       items: 1,
    //       margin: 10,
    //     },
    //     600: {
    //       items: 3
    //     }
    //   }
    // });
    var $owl_internes = $('.slider-voyages-internes-center');

    $owl_internes.children().each(function (index) {
      $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $owl_internes.owlCarousel({
      touchDrag: false,
      mouseDrag: false,
      center: true,
      loop: true,
      // autoplay:true,
      items: 3,
      dots: true,
      autoHeight: true,
      // navText: [
      //   '<img class="arrow-img-down" src="/wp-content/themes/tmz/image/larg-left.png" alt="Polygon">',
      //   '<img class="arrow-img-down-right" src="/wp-content/themes/tmz/image/larg-right.png" alt="Polygon">',
      // ],

      // navText: ['<img class="arrow-img-down" src="image/arrow-down-right.png">', '<img class="arrow-img-down-right" src="image/arrow-down-left.png">'],

      onInitialized: (event) => {
        // Hide navigation arrows and dots if there's one or zero items
        if (event.item.count <= 1) {
          $(".our-new  .container .owl-carousel .owl-nav, .our-new  .container .owl-carousel .owl-dots").hide();
        }
      },

      responsive: {
        0: {
          items: 1,
          dots: true,
        },

        600: {
          items: 3,
        },

        1024: {
          items: 3,
        },

        1366: {
          items: 3,
        },
      },
    });

    // 
    // Initially show the first element and the first detail
    $('.element-sc').first().addClass('active');
    $('.element-sc').first().find('.information--detail').first().addClass('active');
    $('.tabs--item button').first().addClass('active'); // Add active class to the first tab
    $('.element-sc.active .detail-item button').first().addClass('active'); // Add active class to the first detail button

    // Handle tab clicks
    $('.tabs--item button').click(function () {
      var index = $(this).index(); // Get the index of the clicked tab

      // Remove active class from all tabs, elements, and details
      $('.tabs--item button').removeClass('active');
      $('.element-sc').removeClass('active');
      $('.information--detail').removeClass('active');
      $('.detail-item button').removeClass('active'); // Remove active class from all detail buttons

      // Add fade-out class to the currently active element and details
      $('.element-sc.active').addClass('fade-out');
      $('.information--detail.active').addClass('fade-out');

      // After fade-out transition ends, remove fade-out class and hide the elements
      setTimeout(function () {
        $('.element-sc.fade-out').removeClass('fade-out');
        $('.information--detail.fade-out').removeClass('fade-out');
      }, 500); // Match the duration of your fade-out transition

      // Show the new element
      var $newElement = $('.element-sc').eq(index);
      var $newTab = $('.tabs--item button').eq(index);

      $newElement.addClass('active');
      $newElement.find('.information--detail').first().addClass('active');
      $newTab.addClass('active'); // Add active class to the selected tab

      // Add active class to the first button in the new element
      $newElement.find('.detail-item button').first().addClass('active');
    });

    // Handle detail button clicks
    $('.detail-item button').click(function () {
      var $currentElement = $(this).closest('.element-sc'); // Get the current element-sc
      var detailIndex = $(this).index(); // Get the index of the clicked detail button

      // Remove active class from all buttons in the current element
      $currentElement.find('.detail-item button').removeClass('active');

      // Add active class to the clicked button
      $(this).addClass('active');

      // Remove active class from all details in the current element
      $currentElement.find('.information--detail').removeClass('active');

      // Add fade-out class to the currently active detail
      $currentElement.find('.information--detail.active').addClass('fade-out');

      // After fade-out transition ends, remove fade-out class and hide the detail
      setTimeout(function () {
        $currentElement.find('.information--detail.fade-out').removeClass('fade-out');
      }, 500); // Match the duration of your fade-out transition

      // Show the new detail
      $currentElement.find('.information--detail').eq(detailIndex).addClass('active');
    });

    // Handle detail button clicks
    $('.detail-item button').click(function () {
      var detailIndex = $(this).index(); // Get the index of the clicked detail button
      var $currentElement = $(this).closest('.element-sc'); // Get the current element-sc

      // Remove active class from all details in the current element
      $currentElement.find('.information--detail').removeClass('active');

      // Add fade-out class to the currently active detail
      $currentElement.find('.information--detail.active').addClass('fade-out');

      // After fade-out transition ends, remove fade-out class and hide the detail
      setTimeout(function () {
        $currentElement.find('.information--detail.fade-out').removeClass('fade-out');
      }, 500); // Match the duration of your fade-out transition

      // Show the new detail
      $currentElement.find('.information--detail').eq(detailIndex).addClass('active');
    });
    // Mp3

    $('#playPauseButton').click(function () {
      var audioPlayer = $('#audioPlayer')[0];
      var playPauseIcon = $('#playPauseIcon');

      if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.removeClass('fa-circle-play').addClass('fa-circle-pause');
      } else {
        audioPlayer.pause();
        playPauseIcon.removeClass('fa-circle-pause').addClass('fa-circle-play');
      }
    });

    // Tab click event
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var $mainMenu = $('.main-menu');

      if (scrollTop > 0) {
        $mainMenu.addClass('is-sticky').css({
          'position': 'fixed',
          'width': '100%', // Adjust width as needed
          'left': '0',
          'top': '0'
        });
      } else {
        $mainMenu.removeClass('is-sticky').removeAttr('style');
      }
    });
    // HEADER SEARCH
    $("header .search-btn").on("click", function () {
      $("header .search--bar").slideToggle();
      $(".search--bar input").focus();
    });

    $("header .search--bar button").on("click", function (e) {
      e.preventDefault();
      $("header .search--bar").slideToggle();
    });

    //
    AOS.init();
    //

  });
  // Back to top
  var amountScrolled = 200;
  var amountScrolledNav = 25;

  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $('button.back-to-top').addClass('show');
    } else {
      $('button.back-to-top').removeClass('show');
    }
  });

  $('button.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  // Menu
  $("#navbarNavDropdown .nav-item").hover(
    function () {
      $(this).addClass("hover-stable-line");
    },
    function () {
      $(this).removeClass("hover-stable-line");
    }
  );
  //
  $('.menu-subs-inner').each(function () {
    var menuCols = $(this).find('.menu-subs-col').length;

    switch (menuCols) {
      case 1:
        $(this).addClass("class-list-title");
        break;
        // case 6:
        //   $(this).addClass("class-for-6");
        //   break;
        // case 7:
        //   $(this).addClass("class-for-7");
        //   break;
      default:
        // Handle other cases if needed
        break;
    }
  });

})(jQuery);