$(document).ready(() => {

  // Nav Open Jquery
  $(".open-menu").on("click", function() {
    $(".overlay").addClass("open");
  });

  $(".close-menu").on("click", function() {
    $(".overlay").removeClass("open");
  });

  $('.about').on("click", function() {
    $(".overlay").removeClass('open');
  });
});
