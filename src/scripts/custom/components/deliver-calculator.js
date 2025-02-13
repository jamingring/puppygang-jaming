$(document).ready(function() {
  const $calcWrapper = $('.deliver-calc');
  const $delieveryResult = $('.deliever-calc--result');
  const postalCodesString = $calcWrapper.attr('data-postal-codes');
  var postalCodes = postalCodesString.split(',');
  var tempTest = false;
  for (var i=0; i<postalCodes.length; i++) {
    postalCodes[i] = postalCodes[i].trim().toLowerCase().replace(" ", "");
  }

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
          inputedValue = inputedValue.toLowerCase().replace(" ", "");
          if (inputedValue.length>=3) {
            tempTest = false;
            for (var i=0; i<postalCodes.length; i++) {
              if (inputedValue.indexOf(postalCodes[i]) != -1) {
                tempTest = true;
              }
            }
            if (tempTest) {
              $delieveryResult
                .addClass('success')
                .html('delivery is Available!');
            } else {
              $delieveryResult
                .addClass('failure')
                .html('Sorry delivery is not available in your area. Check back soon!');
            }
          } else {

            $delieveryResult
              .addClass('failure')
              .html('Invalid entry. Please enter a valid postal code.');
          }
        } else {
          $delieveryResult
            .addClass('failure')
            .html('Please input your Postal Code');
        }
      });

      $calcWrapper.find('.deliver-form--input').on('keypress',function(e) {
          if(e.which == 13) {
              e.preventDefault();
              $checkBtn.trigger('click');
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