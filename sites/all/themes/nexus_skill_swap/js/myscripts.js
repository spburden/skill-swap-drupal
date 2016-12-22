(function ($, Drupal, window, document) {

    'use strict';

    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function (context, settings) {
            $(document).ready(function() {
                $('#logo img').removeClass('animated flipOutX');
                $('#logo h1').addClass('animated pulse');
                $('#logo img').addClass('animated rollIn');
                $('#main-menu ul').addClass('nav nav-tabs');
            });
            $("a").click(function() {
                $('#logo img').removeClass('animated rollIn');
                $('#logo img').addClass('animated flipOutX');
            });
        }
    };
})(jQuery, Drupal, this, this.document);
