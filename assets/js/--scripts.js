(function ($) {
  $('.filter--search--box').on('click', '.fa-close', function (e) {
    const _this = $(this).parent();
    _this.fadeOut(300, function () {
      $(this).remove();
    });
    if ($('.a-filter-attr').length < 2) {
      $('.a-filter-selection > a').fadeOut(300)
    }
    e.preventDefault();
  });
  // For each scroll--item--loop, apply the logic
  $('.scroll--item--loop').each(function () {
    const $loop = $(this); // Cache the current loop
    const $elements = $loop.find('.wrapper-organisations_tabs'); // Get all elements inside this loop

    // Show only the first 5 elements initially
    $elements.slice(5).hide();

    // Button click event
    $loop.find('.showing--scrool-elemnt').on('click', function (e) {
      e.preventDefault();
      // Show the hidden elements
      $elements.slice(5).slideDown();
      // Optionally hide the button after showing all elements
      $(this).hide();
    });
  });
  // Hide all tabs except the first one on page load
  $(".wrapper--info-tabs-dc").hide();
  $("#tab-1").show();

  // Set the first video source with autoplay in the iframe
  var firstVideoSrc = $(".card").first().data("video") + "?autoplay=1";
  var firstVideoSrc = $(".card").first().data("video");
  $("#current-video").attr("src", firstVideoSrc);

  // Handle tab clicks
  $(".card").on("click", function () {
    var tabId = $(this).data("tab");
    var videoSrc = $(this).data("video");

    $(".wrapper--info-tabs-dc").hide();
    $("#tab-" + tabId).fadeIn();

    // $("#current-video").attr("src", videoSrc + "?autoplay=1");
    $("#current-video").attr("src", videoSrc);
  });

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
      autoHeight: true, // Enable autoHeight
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          autoHeight: true, // Ensure autoHeight is enabled for small screens
        },
        600: {
          items: 1,
          autoHeight: true, // Enable autoHeight for medium screens
        },
        1000: {
          items: 3,
          autoHeight: true, // Ensure autoHeight for large screens
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
    // $('.element-sc').first().addClass('active');
    // $('.element-sc').first().find('.information--detail').first().addClass('active');
    // $('.tabs--item button').first().addClass('active'); // Add active class to the first tab
    // $('.element-sc.active .detail-item button').first().addClass('active'); // Add active class to the first detail button

    // // Handle tab clicks
    // $('.tabs--item button').click(function() {
    //     var index = $(this).index(); // Get the index of the clicked tab

    //     // Remove active class from all tabs, elements, and details
    //     $('.tabs--item button').removeClass('active');
    //     $('.element-sc').removeClass('active');
    //     $('.information--detail').removeClass('active');
    //     $('.detail-item button').removeClass('active'); // Remove active class from all detail buttons

    //     // Add fade-out class to the currently active element and details
    //     $('.element-sc.active').addClass('fade-out');
    //     $('.information--detail.active').addClass('fade-out');

    //     // After fade-out transition ends, remove fade-out class and hide the elements
    //     setTimeout(function() {
    //         $('.element-sc.fade-out').removeClass('fade-out');
    //         $('.information--detail.fade-out').removeClass('fade-out');
    //     }, 500); // Match the duration of your fade-out transition

    //     // Show the new element
    //     var $newElement = $('.element-sc').eq(index);
    //     var $newTab = $('.tabs--item button').eq(index);

    //     $newElement.addClass('active');
    //     $newElement.find('.information--detail').first().addClass('active');
    //     $newTab.addClass('active'); // Add active class to the selected tab

    //     // Add active class to the first button in the new element
    //     $newElement.find('.detail-item button').first().addClass('active');
    // });
    // Initially show the first element and the first detail
    $('.element-sc').first().addClass('active');
    $('.element-sc').first().find('.information--detail').first().addClass('active');
    $('.tabs--item button').first().addClass('active'); // Add active class to the first tab
    $('.element-sc.active .detail-item button').first().addClass('active'); // Add active class to the first detail button

    // Set the initial background image from the first element's data attribute
    let initialBackgroundImage = $('.element-sc.active').data('img');
    $('.informations_pratiques').css('background-image', 'url(' + initialBackgroundImage + ')');

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

      // Change the background image based on the new element's data-img attribute
      let backgroundImage = $newElement.data('img');
      $('.informations_pratiques').css('background-image', 'url(' + backgroundImage + ')');
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

      default:
        // Handle other cases if needed
        break;
    }
  });

})(jQuery);
