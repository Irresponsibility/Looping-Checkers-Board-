// sketch.js
function setup() {
  createCanvas(500,400);
}

function draw() {
  var x = 0;
  var y = 0
  var count = 0
  background(100);
  fill(250);
  
  while (count <= 63){
    x += 40
    count = count + 1
    
    if (count % 2 === 0){
      fill(0)
    } else if (count % 2 === 1){
      fill(250)
    }
    
    if (x > 360) {
      x = 0 + 40
      y = y + 40
    }
    rect(x, y, 40, 40);    
  }
  

}


