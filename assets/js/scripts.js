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
          autoHeight: true,

        },
        600: {
          items: 1,
          stagePadding: null,
          autoHeight: true,
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
    // **************** 6666666
    // $('.members').slick({
    //   dots: true,
    //   infinite: false,
    //   speed: 300,
    //   slidesToShow: 7,
    //   slidesToScroll: 7,
    //   variableWidth: true,
    //   responsive: [{
    //     breakpoint: 768, // Define the breakpoint for smaller screens (e.g., tablets and phones)
    //     settings: {
    //       slidesToShow: 1, // Show only one slide
    //       slidesToScroll: 1, // Scroll one slide at a time
    //       variableWidth: false,

    //     }
    //   }]
    // });

    // // Custom Dropdown Logic
    // const $customSelect = $('#country-select');
    // const $selectedDiv = $customSelect.find('.select-selected');
    // const $itemsDiv = $customSelect.find('.select-items');

    // // Toggle dropdown visibility
    // $selectedDiv.on('click', function () {
    //   $customSelect.toggleClass('open');
    // });

    // // Handle option selection
    // $itemsDiv.on('click', 'div[data-value]', function () {
    //   const $option = $(this);
    //   const value = $option.data('value');
    //   const flagHtml = $option.find('img').prop('outerHTML');
    //   const countryName = $option.find('span').text();

    //   // Update the selected display
    //   $selectedDiv.html(`${flagHtml} <span>${countryName}</span>`);

    //   // Close dropdown
    //   $customSelect.removeClass('open');

    //   // Trigger custom change event
    //   $customSelect.trigger('change', {
    //     value
    //   });
    // });

    // // Close dropdown when clicking outside
    // $(document).on('click', function (e) {
    //   if (!$customSelect.is(e.target) && $customSelect.has(e.target).length === 0) {
    //     $customSelect.removeClass('open');
    //   }
    // });

    // // Update filtering logic to use the custom dropdown
    // $customSelect.on('change', function (e, data) {
    //   const selectedCountry = data.value;

    //   // Filter members based on selected country
    //   $('.member').each(function () {
    //     const memberCountry = $(this).data('country');

    //     if (!selectedCountry || memberCountry === selectedCountry) {
    //       $(this).removeClass('hidden');
    //     } else {
    //       $(this).addClass('hidden');
    //     }
    //   });

    //   // Update container visibility
    //   if ($('.member.hidden').length > 0) {
    //     $('.members').addClass('hidden_show');
    //   } else {
    //     $('.members').removeClass('hidden_show');
    //   }
    // });

    // // Additional Filters (Search and Category)
    // $('#searchFilter').on('input', function () {
    //   const searchTerm = $(this).val().toLowerCase();

    //   $('.member').each(function () {
    //     const title = $(this).find('.parnet--title').text().toLowerCase();
    //     if (title.includes(searchTerm)) {
    //       $(this).removeClass('hidden');
    //     } else {
    //       $(this).addClass('hidden');
    //     }
    //   });

    //   if ($('.member.hidden').length > 0) {
    //     $('.members').addClass('hidden_show');
    //   } else {
    //     $('.members').removeClass('hidden_show');
    //   }
    // });

    // $('.categoryFilter').on('click', function () {
    //   $('.categoryFilter').removeClass('active');
    //   $(this).addClass('active');

    //   const selectedCategory = $(this).data('category');

    //   $('.member').each(function () {
    //     const memberCategory = $(this).data('category');

    //     if (selectedCategory === 'all' || memberCategory === selectedCategory) {
    //       $(this).removeClass('hidden');
    //     } else {
    //       $(this).addClass('hidden');
    //     }
    //   });

    //   if ($('.member.hidden').length > 0) {
    //     $('.members').addClass('hidden_show');
    //   } else {
    //     $('.members').removeClass('hidden_show');
    //   }
    // });

    // // Set default category filter
    // $('.categoryFilter[data-category="all"]').addClass('active');
    // // 66666666
// Slick Carousel Initialization
// Initialize Slick Carousel
$('.members').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  variableWidth: true,
  appendDots: $('.slick-dots-container'),
  appendArrows: $('.slider-navigation'),
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next'),
  responsive: [{
    breakpoint: 768, // Define the breakpoint for smaller screens
    settings: {
      slidesToShow: 1, // Show only one slide
      slidesToScroll: 1, // Scroll one slide at a time
      variableWidth: false,
    }
  }]
});

// Unified Filter Function
function applyFilters() {
  const selectedCountry = $countrySelect.find('.select-selected').data('value');
  const selectedCategory = $industrySelect.find('.select-selected').data('category');
  const searchTerm = $('#searchFilter').val().toLowerCase();

  var count = 0;
$('.member').each(function () {
  const memberCountry = $(this).data('country');
  const memberCategory = $(this).data('category');
  const title = $(this).find('.parnet--title').text().toLowerCase();

  const matchesCountry = !selectedCountry || selectedCountry === 'all' || memberCountry === selectedCountry;
  const matchesCategory = !selectedCategory || selectedCategory === 'all' || memberCategory === selectedCategory;
  const matchesSearch = !searchTerm || title.includes(searchTerm);

  // Reset count class
  $(this).removeClass(function (index, className) {
    return (className.match(/(^|\s)count-\S+/g) || []).join(' ');
  });

  // If "All" is selected for country or category, remove `count-*` and show all members
  if (selectedCountry === 'all' || selectedCategory === 'all') {
    $(this).removeClass('hidden');
  } else {
    // Show only if all conditions match
    if (matchesCountry && matchesCategory && matchesSearch) {
      count++;
      $(this).removeClass('hidden');
      $(this).addClass('count-' + count);
    } else {
      $(this).addClass('hidden');
    }
  }
});

  // Update container visibility
  if ($('.member:not(.hidden)').length === 0) {
    $('.members').addClass('hidden_show');
  } else {
    $('.members').removeClass('hidden_show');
  }

  $('.members').slick('slickGoTo', 0); // Navigate to the first slide (index 0)
}

// Custom Dropdown Logic for "country-select"
const $countrySelect = $('#country-select');
const $countrySelectedDiv = $countrySelect.find('.select-selected');
const $countryItemsDiv = $countrySelect.find('.select-items');

// Toggle dropdown visibility
$countrySelectedDiv.on('click', function () {
  $countrySelect.toggleClass('open');
});

// Handle option selection
$countryItemsDiv.on('click', 'div[data-value]', function () {
  const $option = $(this);
  const value = $option.data('value');
  const flagHtml = $option.find('img').prop('outerHTML');
  const countryName = $option.find('span').text();

  // Update the selected display
  $countrySelectedDiv.html(`${flagHtml} <span>${countryName}</span>`).data('value', value);

  // Close dropdown
  $countrySelect.removeClass('open');

  // Trigger filtering
  applyFilters();
});

// Close dropdown when clicking outside
$(document).on('click', function (e) {
  if (!$countrySelect.is(e.target) && $countrySelect.has(e.target).length === 0) {
    $countrySelect.removeClass('open');
  }
});

// Custom Dropdown Logic for "industry-select"
const $industrySelect = $('#industry-select');
const $industrySelectedDiv = $industrySelect.find('.select-selected');
const $industryItemsDiv = $industrySelect.find('.select-items');

// Toggle dropdown visibility
$industrySelectedDiv.on('click', function () {
  $industrySelect.toggleClass('open');
});

// Handle option selection
$industryItemsDiv.on('click', 'div[data-category]', function () {
  const $option = $(this);
  const category = $option.data('category');
  const categoryName = $option.find('span').text();

  // Update the selected display
  $industrySelectedDiv.html(`<span>${categoryName}</span>`).data('category', category);

  // Close dropdown
  $industrySelect.removeClass('open');

  // Trigger filtering
  applyFilters();
});

// Close dropdown when clicking outside
$(document).on('click', function (e) {
  if (!$industrySelect.is(e.target) && $industrySelect.has(e.target).length === 0) {
    $industrySelect.removeClass('open');
  }
});

// Search Filter Logic
$('#searchFilter').on('input', function () {
  applyFilters();
});

// Set default category filter
$industryItemsDiv.find('div[data-category="all"]').addClass('active');

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
    // ************* Start MAPS


    // Function to show item-info
    function showItemInfo(item, country, factSheet, factSheet_img) {
      // Create the content for the .item-info modal
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
  
      // Find or create the .item-info modal
      let itemInfo = $('.item-info');
      if (itemInfo.length === 0) {
        itemInfo = $('<div class="item-info"></div>').appendTo('body');
      }
  
      itemInfo.html(content).show();
  
      // Get the position of the item relative to the document
      const pathOffset = item.offset();
      const windowWidth = $(window).width();
      const itemInfoWidth = itemInfo.outerWidth();
      const itemInfoHeight = itemInfo.outerHeight();
  
      // Position the modal above the item
      itemInfo.css({
        top: pathOffset.top - itemInfoHeight - 10, // Position above the item
        left: pathOffset.left,
        position: 'absolute',
      });
  
      // Check if the modal is off-screen on the left or right and adjust its position
      if (itemInfo.offset().left < 0) {
        itemInfo.css('left', 10); // Adjust to the left side of the viewport
      } else if (itemInfo.offset().left + itemInfoWidth > windowWidth) {
        itemInfo.css('left', windowWidth - itemInfoWidth - 10); // Adjust to the right side of the viewport
      }
    }
  
    // Handle hover or click on .item-wrap elements
    $('.item-wrap').on('mouseenter click', function () {
      const country = $(this).data('country');
      const factSheet = $(this).data('fact-sheet');
      const factSheet_img = $(this).data('fact-img'); // Retrieve the fact sheet image link
  
      showItemInfo($(this), country, factSheet, factSheet_img);
    });
  
    // Handle the select dropdown interaction
    $('#country-select .select-items div').on('click', function () {
      const country = $(this).data('country');
  
      // Find the corresponding SVG path for the selected country
      const path = $(`.map-container [data-country="${country}"]`);
  
      if (path.length) {
        // Extract data from the SVG path
        const factSheet = path.data('fact-sheet'); // Get the fact sheet link from the path
        const factSheet_img = path.data('fact-img'); // Get the flag image link from the path
  
        // Show the modal positioned relative to the path
        showItemInfo(path, country, factSheet, factSheet_img);
      }
  
      // Update the selected item display
      const selectedHtml = $(this).html(); // Get the HTML of the clicked item
      $('#country-select .select-selected').html(selectedHtml);
    });
  
    // Hide modal on mouse leave
    $(document).on('mouseleave', '.map-container, .item-info', function (event) {
      if (
        !$(event.relatedTarget).closest('.item-info').length &&
        !$(event.relatedTarget).closest('.map-container').length
      ) {
        $('.item-info').hide();
      }
    });



    // ************* END MAPS
    // ************* Start MAPS 2
    // Function to show item-info
    function showItemInfo_1(item, factSheet_img_1) {
      // Create the content for the item-info modal
      const content = 
          `<div class="item-info-content" id="about_maps_1">
              <div class="flag--element">
                  <img src="${factSheet_img_1}" alt="Fact Sheet Flag">
              </div>
              <div class="wrapper-element-africa">
                  <div>To get in touch with this promotion agency, please enter your email address</div> 
                  <form class="d-flex mt-3">
                      <input type="email" class="form-control rounded-pill" placeholder="Email.." required="">
                      <button type="submit" class="form--news">Subscribe <i class="fas fa-arrow-right ms-2"></i></button>
                  </form>
              </div>
          </div>`;
  
      // Find or create the .item-info modal
      let itemInfo = $('.item-info');
      if (itemInfo.length === 0) {
          itemInfo = $('<div class="item-info about_maps_1"></div>').appendTo('body');
      }
  
      itemInfo.html(content).show();
  
      // Get the position of the item relative to the document
      const pathOffset = item.offset();
      const windowWidth = $(window).width();
      const itemInfoWidth = itemInfo.outerWidth();
      const itemInfoHeight = itemInfo.outerHeight();
  
      // Position the modal above the item
      itemInfo.css({
          top: pathOffset.top - itemInfoHeight - 10, // Position above the item
          left: pathOffset.left,
          position: 'absolute',
      });
  
      // Check if the modal is off-screen on the left or right side and adjust position if necessary
      if (itemInfo.offset().left < 0) {
          itemInfo.css('left', 10); // Adjust to the left side of the viewport
      } else if ((itemInfo.offset().left + itemInfoWidth) > windowWidth) {
          itemInfo.css('left', windowWidth - itemInfoWidth - 10); // Adjust to the right side of the viewport
      }
  }
  
  // When the user hovers over the item with the class "item-wrap-1"
  $('.img-1-maps .item-wrap-1').on('mouseenter click', function () {
      const factSheet_img_1 = $(this).data('logo'); // Retrieve the fact sheet image link
      // Pass the data to the showItemInfo_1 function
      showItemInfo_1($(this), factSheet_img_1);
  });
  
  // When the mouse leaves the .map-container or .item-info, hide the modal
  $(document).on('mouseleave', '.map-container, .item-info', function (event) {
      // Check if the mouse has really left the map-container or item-info
      if (!$(event.relatedTarget).closest('.item-info').length && !$(event.relatedTarget).closest('.map-container').length) {
          $('.item-info').hide(); // Hide the item-info modal
      }
  });
  
  });
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Animate only once
  });

  // 
  const modal = $("#videoModal");
  const closeBtn = $(".close");
  const videoContainer = $("#videoContainer");

  // Handle click on video box
  $(".video-box").on("click", function () {
    const iframeUrl = $(this).data("iframe");

    // Create iframe dynamically and append it to the modal content
    const iframe = $('<iframe></iframe>', {
      src: iframeUrl,
      width: '100%',
      height: '400',
      frameborder: '0',
      allowfullscreen: true
    });

    videoContainer.empty().append(iframe); // Clear and append the iframe

    // Show the modal with display flex
    modal.css('display', 'flex'); // Show modal using flexbox display
  });

  // Close modal on clicking close button
  closeBtn.on("click", function () {
    modal.css('display', 'none'); // Hide modal
    videoContainer.empty(); // Remove iframe from modal
  });

  // Close modal when clicking outside modal content
  $(window).on("click", function (e) {
    if ($(e.target).is(modal)) {
      modal.css('display', 'none'); // Hide modal
      videoContainer.empty(); // Remove iframe from modal
    }
  });
  // 
  $('.emblemes .element-sc').first().addClass('active');
  $('.emblemes .tabs--item button').first().addClass('active'); // Add active class to the first tab
  let initialBackgroundImage = $('.emblemes .element-sc.active').data('img');
  $('.emblemes .informations_pratiques').css('background-image', 'url(' + initialBackgroundImage + ')');

  // Function to handle tab activation based on ID
  function activateTabById(id) {
    // Remove active class from all tabs and elements
    $('.emblemes .tabs--item button').removeClass('active');
    $('.emblemes .element-sc').removeClass('active');

    // Add active class to the corresponding tab and content element
    $('#' + id).addClass('active');
    $('.emblemes .element-sc').eq($('#' + id).index()).addClass('active');


  }

  // Handle clicks on tabs
  $('.emblemes .tabs--item button').click(function () {
    var id = $(this).attr('id');
    activateTabById(id);
  });
})(jQuery);