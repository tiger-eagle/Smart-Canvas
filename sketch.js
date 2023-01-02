var number = 10
var theColor = '255, 255, 255'

var prevX
var prevY
document.getElementById('numberInput').addEventListener('change', function() {
    number = document.getElementById('numberInput').value;
  });
colorInput.addEventListener('theColor', (event) => {
  const colorpicked = event.target.value;
});
document.getElementById('clear').addEventListener('click', function() {
  clear()
  createCanvas(windowWidth - 50, windowHeight - 30);
  background(255, 254, 252);
  frameRate(600)
  fill(theColor)
});

document.getElementById('save').addEventListener('click', function() {
  saveCanvas(canvas, 'myOrange', 'png');
});

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 30);
  background(255, 254, 252);
  frameRate(600)
  fill(theColor)
}

function draw() {
  strokeWeight(number);
  fill(theColor)
  if (mouseIsPressed){
    line(prevX, prevY, mouseX, mouseY);
  }
  prevX = mouseX
  prevY = mouseY
}
