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
              .html('delievery is Available!');
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

  }
})