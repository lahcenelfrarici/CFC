(function ($, Drupal) {
    Drupal.behaviors.manageDateAndDynamicFields = {
        attach: function (context, settings) {
            const formId = '#views-exposed-form-actualites-page-1'; // The form ID selector

            // Reference the fields
            const $keyWord = $(formId + ' input[name="key_word"]', context);
            const $dynamicYear = $(formId + ' select[name="year_filter"]', context);
            const $dynamicMonth = $(formId + ' select[name="month_filter"]', context);
            const $date = $(formId + ' input[name="date"]', context);

            // Handle date selection
            $date.on('change', function () {
                if ($(this).val()) {
                    // If a date is selected, clear the dynamic year and month
                    $dynamicYear.val('All').trigger('change');
                    $dynamicMonth.val('All').trigger('change');
                }
            });

            // Handle dynamic year selection
            $dynamicYear.on('change', function () {
                if ($(this).val() && $(this).val() !== 'All') {
                    // If a dynamic year is selected, clear the date
                    $date.val('');
                }
            });

            // Handle dynamic month selection
            $dynamicMonth.on('change', function () {
                if ($(this).val() && $(this).val() !== 'All') {
                    // If a dynamic month is selected, clear the date
                    $date.val('');
                }
            });
        }
    };
})(jQuery, Drupal);
