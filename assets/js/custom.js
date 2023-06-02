// Video jS

$(function () {
  var $refreshButton = $("#refresh");
  var $results = $("#css_result");

  function refresh() {
    var css = $("style.cp-pen-styles").text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);

  // Select all the contents when clicked
  $results.click(function () {
    $(this).select();
  });
});



    /*--
        Bootstrap dropdown
    -----------------------------------*/
    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

