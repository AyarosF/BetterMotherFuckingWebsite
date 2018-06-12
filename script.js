// setTimeout(function() {
//   alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
// }, 10000);

var colors = ["magenta", "white"],
    index = 0;

document.getElementById("psyche").onclick = function() {
  document.body.style.background = colors[index];
  index = (index + 1) % colors.length;
}
