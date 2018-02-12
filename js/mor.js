$(document).ready(() => {

  // Scroll Effect

  // Nav Open Jquery
  $(".open-menu").on("click", function() {
    $(".overlay").addClass("open");
  });

  $(".close-menu").on("click", function() {
    $(".overlay").removeClass("open");
  });

  $('.om').on("click", function() {
    $(".overlay").removeClass('open');
  });

  $(".logo").on("click",   function() {
    $("#id1").get(0).play();
  });

});
