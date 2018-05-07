$(document).ready(() => {
  // Scroll Effect
  var defaults = {
    delay: 900,
    duration: 1800,
  };
  $('.data').hide();

  // Nav Open Jquery
  $(".open-menu").on("click", function() {
    $(".overlay").addClass("open");
  });

  $(".close-menu").on("click", function() {
    $(".overlay").removeClass("open");
  });

  $(".home").on("click", function() {
    $(".overlay").removeClass("open");
  });

  $(".logo").on("click", function() {
    $("#id1").get(0).play();
  });

  // arrows
  $('.ddub').on('click', function(event) {
       $('.datab').toggle('show');
  });

  $('.ddua').on('click', function(event) {
       $('.dataa').toggle('show');
  });

  $('.dduc').on('click', function(event) {
    $('.datac').toggle('show');
  })
});
