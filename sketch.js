function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("red");
    
    fill("blue");
    noStroke()
    square(10, 20, 50);
    
    fill("white");
    circle(100, 40, 50);
    
    fill("pink");
    triangle(50, 150, 100, 60, 150, 150);
    
    stroke("black");
    line(0, 400, 400, 0);
  }