$(document).ready(function() {
  $('.trigger-form-button').click(function() {
    switch($(this).attr('data-trigger'))  {
      case "add-to-cart":
        $('.add-to-cart-button[type="submit"]').trigger('click');
      break;
    }
  })
})