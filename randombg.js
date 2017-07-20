var randomColor = "";
function makeRandomColor() {
  var c = "";
  while (c.length < 6) {
    c += Math.random().toString(16).substr(-6).substr(-1);
  }
  randomColor = "#" + c;
  document.getElementById("hex_color").value = randomColor;
  return document.body.style.backgroundColor = randomColor;
};
