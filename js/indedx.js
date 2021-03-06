$(document).ready( () => {
  // Scroll Reveal Commands/Defaults

  ScrollReveal().reveal('.b0', {
    origin: 'right',
    distance: '70%',
    delay: 100,
    duration: 1000,
    reset: true,
    easing: 'ease'
  });
  ScrollReveal().reveal('.b1', {
    origin: 'left',
    distance: '70%',
    delay: 100,
    duration: 1000,
    reset: true,
    easing: 'ease'
  });

  // Underline title on load
  $(".title-last").hide();
  $(".title-last").show(1200);

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

  // To make a bunch of jumbled letters
  function makeId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    text += " ";
  }
  return text;
  };

  //Create randomWordArray and HTML
  var randomWordArray = [];

  for (var j = 0; j < 10; j++) {
    randomWordArray[j] = makeId();
  };

  // Output letters
  randomWordArray.forEach(function jumboWordDisplay(element, index) {

        var dispIndex = index + 1;
        $(".header").append("<div id='title-" + dispIndex + "' class='title'>" + element + "</div>");
  });


    var divs = $('div[id^="title-"]'),
      h = 0;

  (function cycle() {
      divs.hide().eq(h).fadeIn(25)
                .delay(20)
                .fadeOut(30, cycle);

                 if (h < 10) {
                   h = ++h;
                 };
  })();

  // Cool Particle effect - Learn Node.js first
  /*
  particlesJS.load('particles.js-master/particles-js', 'particles.js-master/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  */
});
