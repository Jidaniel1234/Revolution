$(document).ready(() => {
  // Scroll Effect
  var defaults = {
    delay: 900,
    duration: 1800,
  };


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
