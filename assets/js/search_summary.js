(function ($, Drupal) {
    Drupal.behaviors.dynamicSearchSummary = {
        attach: function (context, settings) {
            // Configuration object
            const config = {
                formSelector: '.filter--search--box', // Selector for the forms to enhance
                summaryContainerId: 'search-summary', // ID of the container for filter summaries
                clearAllButtonText: Drupal.t('Tout effacer'), // Use Drupal translation function for text
                clearAllButtonClass: 'btn btn-secondary clear-all-filters', // Classes for the clear all button
                filterAttrClass: 'a-filter-attr', // Class for individual filter spans
                filterSelectionClass: 'a-filter-selection' // Class for the filter selection container
            };

            // Initialize each form
            once('dynamic-search-summary', config.formSelector, context).forEach(function (form) {
                const $form = $(form);
                const formId = $form.attr('id');
                const $summary = $('#' + config.summaryContainerId);

                // Create clear all button
                const $clearAllButton = $('<a>', {
                    text: config.clearAllButtonText,
                    class: config.clearAllButtonClass,
                    href: '#',
                    css: { display: 'none' }
                });

                // Generate summary on page load
                generateSummary();

                function generateSummary() {
                    let summaryItems = [];

                    $('[data-summary-field]', $form).each(function () {
                        const $field = $(this);
                        const fieldType = $field.data('summary-field');
                        let value = $field.val();
                        let label = '';

                        if ((fieldType === 'select' && value && value !== 'All') ||
                            (fieldType === 'text' && value) ||
                            (fieldType === 'date' && value)) { // Handle date fields
                            if (fieldType === 'select') {
                                label = $field.find('option:selected').text();
                            } else if (fieldType === 'date') {
                                label = new Date(value).toLocaleDateString(); // Format date
                            } else {
                                label = value;
                            }

                            summaryItems.push(`
                                <span href="#" class="${config.filterAttrClass} mt-2" data-form-id="${formId}" data-value="${$field.attr('id')}" data-id="${value}">
                                    <span>${label}</span>
                                    <i class="fa fa-close"></i>
                                </span>
                            `);
                        }
                    });

                    if (summaryItems.length > 0) {
                        // Create the filter selection container
                        const filterSelectionHtml = '<div class="' + config.filterSelectionClass + '">' + summaryItems.join('') + '</div>';
                        
                        // Add the clear all button inside the filter selection container
                        $summary.html(filterSelectionHtml);
                        $summary.find('.' + config.filterSelectionClass).append($clearAllButton); // Append the button inside the div
                        $clearAllButton.show();
                    } else {
                        $summary.empty();
                        $clearAllButton.hide();
                    }
                }
            });

            // Handle filter removal (using event delegation)
            $('#' + config.summaryContainerId).on('click', '.' + config.filterAttrClass + ' .fa-close', function (e) {
                e.preventDefault();
                const $filterAttr = $(this).closest('.' + config.filterAttrClass);
                const formId = $filterAttr.data('form-id');
                const $form = $('#' + formId);
                const idInput = $filterAttr.data('value');
                const $input = $('#' + idInput);
                const tagInput = $input.prop('tagName');

                $filterAttr.fadeOut(300, function () {
                    $(this).remove();
                    updateClearAllButton();
                });

                if (tagInput === 'SELECT') {
                    $input.val('All').trigger('change');
                } else {
                    $input.val('');
                }

                if (formId === 'views-exposed-form-patrimoine-materiel-page-1' || formId === 'views-exposed-form-patrimoine-immateriel-page-1' || formId === 'views-exposed-form-histoire-page-1' || formId === "views-exposed-form-digital-services-page-1" || "views-exposed-form-digital-services-page-2" || "views-exposed-form-digital-services-page-3" || formId == 'views-exposed-form-actualites-page-1') {
                    // Submit ajax form
                    $form.find('input[type="submit"]').click();
                } else {
                    $form.submit();
                }
            });

            // Handle clear all button click
            $('.' + config.clearAllButtonClass.replace(/ /g, '.')).on('click', function (e) {
                e.preventDefault();
                const $summary = $('#' + config.summaryContainerId);
                const $filterAttrs = $summary.find('.' + config.filterAttrClass);
                const formId = $filterAttrs.data('form-id');
                const $form = $('#' + formId);

                $filterAttrs.each(function () {
                    const $filterAttr = $(this);
                    const idInput = $filterAttr.data('value');
                    const $input = $('#' + idInput);

                    if ($input.prop('tagName') === 'SELECT') {
                        $input.val('All').trigger('change');
                    } else {
                        $input.val('');
                    }
                });

                $summary.empty();
                $(this).hide();

                if (formId === 'views-exposed-form-patrimoine-materiel-page-1' || formId === 'views-exposed-form-patrimoine-immateriel-page-1' || formId === 'views-exposed-form-histoire-page-1' || formId === "views-exposed-form-digital-services-page-1" || "views-exposed-form-digital-services-page-2" || "views-exposed-form-digital-services-page-3" || formId == 'views-exposed-form-actualites-page-1') {
                    // Submit ajax form
                    $form.find('input[type="submit"]').click();
                } else {
                    // Submit all forms
                    $(config.formSelector).submit();
                }
            });

            function updateClearAllButton() {
                const $summary = $('#' + config.summaryContainerId);
                const $clearAllButton = $('.' + config.clearAllButtonClass.replace(/ /g, '.'));
                if ($summary.find('.' + config.filterAttrClass).length > 0) {
                    $clearAllButton.show();
                } else {
                    $clearAllButton.hide();
                }
            }
        }
    };
})(jQuery, Drupal);
