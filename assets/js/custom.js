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



// Sidebar popup


// document.querySelector('.mobile-menu-button').addEventListener('click', function() {
//   var menuItems = document.querySelector('.mobile-menu-items');
//   if (menuItems.style.display === 'none') {
//       menuItems.style.display = 'block';
//   } else {
//       menuItems.style.display = 'none';
//   }
// });
