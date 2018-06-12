setTimeout(function() {
  alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
}, 10000);

// var colors = ["magenta", "white"],
//     index = 0;
//
// document.getElementById("psyche").onclick = function() {
//   document.body.style.background = colors[index];
//   index = (index + 1) % colors.length;
// } -> permet de faire revenir à la normal après 2 cliks (que background)


function changeColorAndFont() {
  document.body.style.background = 'magenta';
  var x = document.getElementsByClassName("greencolor");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.color = "green";
      x[i].style.fontFamily = "Comic Sans Ms";
      }
  var y = document.getElementsByClassName("bluecolor");
  for (i = 0; i < y.length; i++) {
      y[i].style.color = "blue";
      y[i].style.fontFamily = "papyrus";
      }
}
