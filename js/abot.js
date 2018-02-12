$(document).ready(() => {

  // Scroll Effect

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

  // Open Info
  $(".ian").on("click", function() {
    $(".abt-overlay1").addClass("show");
  });

  $(".close-info1").on("click", function() {
    $(".abt-overlay1").removeClass("show");
  });

  $(".daniel").on("click", function() {
    $(".abt-overlay2").addClass("show");
  });

  $(".close-info2").on("click", function() {
    $(".abt-overlay2").removeClass("show");
  });

  $(".logo").on("click",   function() {
      $("#id1").get(0).play();
    });

});
