setTimeout(function() {
  alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
}, 10000);



var click = 0;

function onClick() {

if (click == 0) {

  document.body.style.background = "magenta";
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

  click++;
}

else if (click == 1) {

  document.body.style.backgroundColor = "white";
  var x = document.getElementsByClassName("greencolor");
  var i;
  for (i = 0; i < x.length; i++) {
        x[i].style.color = "#444";
        x[i].style.fontFamily = "serif";
        }
  var y = document.getElementsByClassName("bluecolor");
  for (i = 0; i < y.length; i++) {
        y[i].style.color = "#444";
        y[i].style.fontFamily = "serif";
        }

  click--;
}
}
