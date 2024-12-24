(function ($, Drupal, once) {
    Drupal.behaviors.customScriptBehavior = {
        attach: function (context, settings) {
            // Use Drupal's once() function
            once('customScriptBehavior', '[data-once]', context).forEach(function (element) {
                var regionSelect = $('select[name="field_regions_target_id"]');
                var villeSelect = $('select[name="field_villes_target_id"]');
                // Event listener for region change
                regionSelect.on('change', function () {
                    // Reset villeSelect when region changes
                    villeSelect.prop('disabled', true);
                    villeSelect.html('<option value="All" selected="selected">' + Drupal.t('- Select a region first -') + '</option>');
                });
                $(document).ajaxComplete(function(event, xhr, settings) {
                    // Check if this is a Views AJAX response
                    if (settings.url && settings.url.includes('views/ajax')) {
                        var regionSelect = $('select[name="field_regions_target_id"]');
                        var villeSelect = $('select[name="field_villes_target_id"]');
                        var regionId = regionSelect.val();
                        
                        // Identify the content type based on the form ID
                        var formId = regionSelect.closest('form').attr('id');
                        var contentType = '';
                        
                        if (formId === 'views-exposed-form-patrimoine-materiel-page-1') {
                            contentType = 1;
                        } else if (formId === 'views-exposed-form-patrimoine-immateriel-page-1') {
                            contentType = 2;
                        }

                        // Save current ville selection
                        var selectedVille = villeSelect.val();

                        if(!regionId || regionId == 'All') {
                            villeSelect.prop('disabled', true);
                            villeSelect.html('<option value="All" selected="selected">' + Drupal.t('- Select a region first -') + '</option>');
                        } else {
                            $.ajax({
                                url: Drupal.url('/villes-by-region/' + regionId),
                                type: 'GET',
                                dataType: 'json',
                                data: {
                                    content_type: contentType,
                                },
                                success: function (villes) {
                                    var options = '<option value="All">' + Drupal.t('- Select a province -') + '</option>';

                                    if (Array.isArray(villes) && villes.length > 0) {
                                        villes.forEach(function(ville) {
                                            options += '<option value="' + ville.id + '">' + ville.name + '</option>';
                                        });
                                        villeSelect.prop('disabled', false);
                                        
                                        villeSelect.html(options);
                                        
                                        // Restore previous selection if valid
                                        if (villes.some(v => v.id == selectedVille)) {
                                            villeSelect.val(selectedVille);
                                        }
                                    } else {
                                        villeSelect.prop('disabled', true);
                                        villeSelect.html(options);
                                    }
                                },
                                error: function (xhr, status, error) {
                                    console.error('AJAX error:', error);
                                    villeSelect.prop('disabled', true)
                                        .html('<option value="All">' + Drupal.t('Error loading provinces') + '</option>');
                                }
                            });
                        }
                    }
                });
            });
        }
    };
})(jQuery, Drupal, once);