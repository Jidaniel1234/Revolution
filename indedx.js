$(document).ready(() => {

  // To print a bunch of jumbled letters
  function makeId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789          ";

  for (var i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    text += " ";
  }
  return text;
  };

  // Print a bunch of bunch of jumbled letter and set last to the company name
  var j = 0;
  var madeIdArray =  [];
  madeIdArray[15] = "R E V O L U T I O N";

  while (j < 15) {
    madeIdArray[j] = makeId();
    i++;
  };

  //Display them
  var divs = $('div[id^="content-"]').hide(),
    i = 0;

    (function cycle() {

    divs.eq(i).fadeIn(4)
              .delay(100)
              .fadeOut(4, cycle);

    i = ++i % divs.length;

})();
});
