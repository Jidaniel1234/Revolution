$(document).ready(() => {
  // Scroll Effect
  var defaults = {
    delay: 900,
    duration: 1800,
  };

  $(window).on('scroll', function () {
    var scrolled = $(window).scrollTop(),
        winh = $(window).height();

    if (scrolled > winh * 8 / 9) {
      $('.back').addClass('show');
    } else {
      $('.back').removeClass('show');
    };
  });

  $('.back').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1000);

  });

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

  $(".logo").on("click",   function() {
    $("#id1").get(0).play();
  });

});
