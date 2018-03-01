$(document).ready( () => {
  // Scroll Reveal Stuff

  var titleconfig = {
       duration: 1000,
       origin: 'left',
       distance: '70vw',
  };

  window.sr = ScrollReveal({
     reset: true
   });

  sr.reveal('.title-p', titleconfig);

  sr.reveal('.top', {
    duration: 1000
  });

  sr.reveal('.bottom', {
    origin: 'right',
    distance: '300px',
    duration: 2000
  });

  // Nav Open Jquery
  $(".open-menu").on("click", function() {
    $(".overlay").addClass("open");
  });

  $(".close-menu").on("click", function() {
    $(".overlay").removeClass("open");
  });

  $('.home').on("click", function() {
    $(".overlay").removeClass('open');
  });

  $(".logo").on("click",   function() {
    $("#id1").get(0).play();
  });

});
