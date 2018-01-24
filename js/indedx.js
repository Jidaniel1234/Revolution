$(document).ready( () => {

  // To make a bunch of jumbled letters
  function makeId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789     ";

  for (var i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    text += " ";
  }
  return text;
  };

  //Create randomWordArray and HTML

  var randomWordArray = [];

  for (var j = 0; j < 30; j++) {
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
    divs.hide().eq(h).fadeIn(20)
              .delay(10)
              .fadeOut(20, cycle);

               if (h < 30) {
                 h = ++h;
               };
})();

});
