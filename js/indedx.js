$(document).ready( () => {
  // Underline title on load
  $(".title-last").hide();
  $(".title-last").show(1000);

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
                .delay(15)
                .fadeOut(25, cycle);

                 if (h < 10) {
                   h = ++h;
                 };
  })();

});
