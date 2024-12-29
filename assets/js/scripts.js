(function ($) {
  $(document).ready(function () {
    // Sticky Header on Scroll
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var $mainMenu = $('header');

      if (scrollTop > 0) {
        $mainMenu.addClass('is-sticky').css({
          'position': 'fixed',
          'width': '100%',
          'left': '0',
          'top': '0'
        });
      } else {
        $mainMenu.removeClass('is-sticky').removeAttr('style');
      }
    });

    // Counter Animation
    $('.counter').each(function () {
      const $this = $(this);
      const target = +$this.data('target');
      $({
        countNum: $this.text()
      }).animate({
        countNum: target
      }, {
        duration: 2000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum).toLocaleString());
        },
        complete: function () {
          $this.text(this.countNum.toLocaleString());
        }
      });
    });

    // Accordion Toggle
    $('.african_pioneer .accordion .card').click(function () {
      $('.african_pioneer .accordion .card').not(this).removeClass('active').find('.card-body').slideUp();
      $(this).toggleClass('active').find('.card-body').slideToggle();
      const attributeValue = $(this).data('attribute');
      console.log('Clicked card attribute:', attributeValue);
    });

    // Owl Carousel Initialization
    $('.banner_status_slider .owl-carousel').owlCarousel({
      // // stagePadding: 400,
      // // loop: true,
      // // items: 3,
      // // center:true,
      // // lazyLoad: true,
      // // autoplay: false,
      // // autoplaySpeed: 2000,
      // // autoplayTimeout: 5000,
      // // autoplayHoverPause: true,
      // // dots: false,
      // // responsive: {
      // //   0: {
      // //     items: 1,
      // //     stagePadding: null,

      // //   },
      // //   600: {
      // //     items: 1,
      // //     stagePadding: null,
      // //   },
      // //   1000: {
      // //     items: 3,

      // //   }
      // }
      stagePadding: 200,
      loop: true,
      items: 1,
      lazyLoad: true,
      autoplay: false,
      margin: 30,
      autoplaySpeed: 2000,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      autoHeight: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: null,

        },
        600: {
          items: 1,
          stagePadding: null,
        },
        1000: {
          items: 1,

        }
      }

    });

    // Generate Alphabet Filter Buttons
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const filterContainer = $("#filter");
    const articles = $(".article");

    alphabet.forEach(letter => {
      const button = $("<button>").text(letter);
      button.on("click", function () {
        filterArticles(letter, $(this));
      });
      filterContainer.append(button);
    });

    articles.show(); // Show all articles by default
    function filterArticles(letter, button) {
      $(".filter button").removeClass("active");
      button.addClass("active");
      articles.each(function () {
        const title = $(this).data("title");
        if (title.startsWith(letter)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
    // ****************
    $('.members').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 7,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768, // Define the breakpoint for smaller screens (e.g., tablets and phones)
          settings: {
            slidesToShow: 1, // Show only one slide
            slidesToScroll: 1, // Scroll one slide at a time
            variableWidth: false,
            
          }
        }
      ]
    });
    
    // Custom Dropdown Logic
    const $customSelect = $('#country-select');
    const $selectedDiv = $customSelect.find('.select-selected');
    const $itemsDiv = $customSelect.find('.select-items');

    // Toggle dropdown visibility
    $selectedDiv.on('click', function () {
      $customSelect.toggleClass('open');
    });

    // Handle option selection
    $itemsDiv.on('click', 'div[data-value]', function () {
      const $option = $(this);
      const value = $option.data('value');
      const flagHtml = $option.find('img').prop('outerHTML');
      const countryName = $option.find('span').text();

      // Update the selected display
      $selectedDiv.html(`${flagHtml} <span>${countryName}</span>`);

      // Close dropdown
      $customSelect.removeClass('open');

      // Trigger custom change event
      $customSelect.trigger('change', {
        value
      });
    });

    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
      if (!$customSelect.is(e.target) && $customSelect.has(e.target).length === 0) {
        $customSelect.removeClass('open');
      }
    });

    // Update filtering logic to use the custom dropdown
    $customSelect.on('change', function (e, data) {
      const selectedCountry = data.value;

      // Filter members based on selected country
      $('.member').each(function () {
        const memberCountry = $(this).data('country');

        if (!selectedCountry || memberCountry === selectedCountry) {
          $(this).removeClass('hidden');
        } else {
          $(this).addClass('hidden');
        }
      });

      // Update container visibility
      if ($('.member.hidden').length > 0) {
        $('.members').addClass('hidden_show');
      } else {
        $('.members').removeClass('hidden_show');
      }
    });

    // Additional Filters (Search and Category)
    $('#searchFilter').on('input', function () {
      const searchTerm = $(this).val().toLowerCase();

      $('.member').each(function () {
        const title = $(this).find('.parnet--title').text().toLowerCase();
        if (title.includes(searchTerm)) {
          $(this).removeClass('hidden');
        } else {
          $(this).addClass('hidden');
        }
      });

      if ($('.member.hidden').length > 0) {
        $('.members').addClass('hidden_show');
      } else {
        $('.members').removeClass('hidden_show');
      }
    });

    $('.categoryFilter').on('click', function () {
      $('.categoryFilter').removeClass('active');
      $(this).addClass('active');

      const selectedCategory = $(this).data('category');

      $('.member').each(function () {
        const memberCategory = $(this).data('category');

        if (selectedCategory === 'all' || memberCategory === selectedCategory) {
          $(this).removeClass('hidden');
        } else {
          $(this).addClass('hidden');
        }
      });

      if ($('.member.hidden').length > 0) {
        $('.members').addClass('hidden_show');
      } else {
        $('.members').removeClass('hidden_show');
      }
    });

    // Set default category filter
    $('.categoryFilter[data-category="all"]').addClass('active');
    // 66666666

    // ****************
    // var memberCount = $('.members .member').length;

    // // If more than 7 members, initialize Owl Carousel
    // if (memberCount > 7) {
    //   $('.members').addClass('owl-carousel').owlCarousel({
    //     items: 4, // You can customize the number of items shown here
    //     loop: false,
    //     margin: 10,
    //     nav: true,
    //     dots: false,
    //     autoWidth: true,

    //     responsive: {
    //       0: {
    //         items: 1
    //       },
    //       600: {
    //         items: 2
    //       },
    //       1000: {
    //         items: 4
    //       }
    //     }
    //   });
    // } else {
    //   // If there are 7 or fewer members, remove the owl-carousel class (in case it was applied)
    //   $('.members').removeClass('owl-carousel');
    // }
    // 
    // const $hoverBox = $("#hover-box");
    // let timeout;

    // $(".path-hover").on("mouseenter", function (e) {
    //   clearTimeout(timeout); // Clear timeout to prevent hiding
    //   const country = $(this).data("country");
    //   const factSheet = $(this).data("fact-sheet");

    //   // Position and display the tooltip
    //   $hoverBox.css({
    //     display: "block",
    //     left: e.pageX + 10 + "px",
    //     top: e.pageY + 10 + "px",
    //   });

    //   // Update content dynamically
    //   $hoverBox.find("#country-name").text(country);
    //   $hoverBox.find("#download-link").text(factSheet);
    // });

    // $(".path-hover").on("mousemove", function (e) {
    //   $hoverBox.css({
    //     left: e.pageX + 10 + "px",
    //     top: e.pageY + 10 + "px",
    //   });
    // });

    // $(".path-hover").on("mouseleave", function () {
    //   timeout = setTimeout(() => {
    //     $hoverBox.css("display", "none");
    //   }, 300); // Delay hiding for smoother interaction
    // });

    // $hoverBox.on("mouseenter", function () {
    //   clearTimeout(timeout); // Keep the tooltip visible when mouse enters it
    // });

    // $hoverBox.on("mouseleave", function () {
    //   $hoverBox.css("display", "none");
    // });
    // 
    $(document).ready(function () {
      // Function to show item-info
      function showItemInfo(item, country, factSheet, factSheet_img) {
        // Create the content for item-info
        const content = `
        <div class="item-info-content">
          <div class="flag--element">
            <img src="${factSheet_img}" alt="Fact Sheet Flag">
          </div>
          <div class="wrapper-element-africa">
            <div>${country}</div> 
            <a href="${factSheet}" download>Download country facts sheet</a>
          </div>
        </div>
      `;

        // Find or create the .item-info element and append content
        let itemInfo = $('.item-info');
        if (itemInfo.length === 0) {
          itemInfo = $('<div class="item-info"></div>').appendTo('body');
        }

        itemInfo.html(content).show();

        // Position the .item-info before the path element
        const pathOffset = item.offset();
        itemInfo.css({
          top: pathOffset.top - itemInfo.outerHeight() - 10, // Adjust the positioning above the path
          left: pathOffset.left,
          position: 'absolute',
        });
      }

      // When hovering over the path with class "item-wrap"
      $('.item-wrap').on('mouseenter click', function () {
        const country = $(this).data('country');
        const factSheet = $(this).data('fact-sheet');
        const factSheet_img = $(this).data('fact-img'); // Retrieve the image URL for the fact sheet

        // Pass the factSheet_img along with other data to showItemInfo
        showItemInfo($(this), country, factSheet, factSheet_img);
      });

      // When mouse leaves the path or the .item-info element
      $(document).on('mouseleave', function (event) {
        if (!$(event.target).closest('.item-info, .item-wrap').length) {
          $('.item-info').hide();
        }
      });
    });
    $('a[href*="#"]').on('click', function (event) {
      // Prevent default behavior
      event.preventDefault();

      // Get the target element's ID from the href
      var targetId = this.hash.substring(1); // Remove the `#` character
      var $target = $('#' + targetId);

      if ($target.length) {
        // Scroll to the target element with 101px offset
        $('html, body').animate({
            scrollTop: $target.offset().top - 60 // Adjust by offset
          },
          600 // Duration in milliseconds
        );
      }
    });
  });
  AOS.init({
    duration: 1000, // Animation duration
    once: true,     // Animate only once
  });
})(jQuery);