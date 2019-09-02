$(document).ready(function() {
  const $calcWrapper = $('.deliver-calc');
  const $delieveryResult = $('.deliever-calc--result');
  if ($calcWrapper.length > 0) {

    /*Submit Button*/
      var $checkBtn = $calcWrapper.find('.deliver-form--submit');
      $checkBtn.click(function(e) {
        e.preventDefault();

        // remove All Class
        $delieveryResult
          .removeClass('hidden')
          .removeClass('success')
          .removeClass('failure');

        // Inputed value
        var inputedValue = $calcWrapper.find('.deliver-form--input').val();

        // Check if the postal code is avaliable.
        if (inputedValue.length > 0) {
          if (inputedValue.length>=4) {
            $delieveryResult
              .addClass('success')
              .html('delivery is Available!');
          } else {
            $delieveryResult
              .addClass('failure')
              .html('Sorry, delievery is not available to your location');
          }
        } else {
          $delieveryResult
            .addClass('failure')
            .html('Please input your Postal Code');
        }
      });

    /* View Map Button */
      var $viewMapBtn = $calcWrapper.find('.deliver-form--view_map').find('a');
      $viewMapBtn.click(function(e) {
        e.preventDefault();
      });

    /* Calculator Link in description */
      var $calcLink = $calcWrapper.find('.deliver-calc--note').find('a[data-scrolldown]');
      var $headerWrapper = $('.header[data-main-header="header"]');
      var toElem="", headerHeight=0, elemTop=0;
      $calcLink.click(function(e) {
        e.preventDefault();
        if (typeof $(this).attr('data-scrolldown') != 'undefined') {
          if ($($(this).attr('data-scrolldown')).length > 0) {
            toElem = $(this).attr('data-scrolldown');
            if ($(window).width() > 720) {
              headerHeight = $headerWrapper.outerHeight(true);
            } else {
              headerHeight = 0;
            }
            elemTop = $(toElem).offset().top - parseInt($(toElem).css('margin-top'));

            $("html, body").animate({
              scrollTop: (elemTop - headerHeight) 
            }, 600);
          }
        }
      });

  }
})