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

// $('[data-toggle="offcanvas"]').on('click', function () {
//   $('#sidebar').toggleClass('show');
// });


// $(document).ready(function () {
//   // Toggle between col-lg-9 and col-lg-3 on button click
//   $(".btn-primary").click(function () {
//     $("#togglingColumn").toggleClass("col-lg-9 col-lg-12");
//   });
// });


// $(document).ready(function() {
//   $("button").click(function() {
//       $("#myCol").toggleClass("col-lg-9 col-lg-12");
//   });
// });


// $(document).ready(function () {
//   $("#sidebar").mCustomScrollbar({
//       theme: "minimal"
//   });

//   $('#sidebarCollapse').on('click', function () {
//       $('#sidebar, #content').toggleClass('active');
//       $('.collapse.in').toggleClass('in');
//       $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//   });
// });
