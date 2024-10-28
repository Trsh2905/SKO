let particles = [];
let angle = 0;
let graphics;
let love;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight,WEBGL);
  canvas.position(0,0); //positioning this on the main html file

  frameRate(120);
}

function draw() {
  background(0);
   push()
  rotateX(mouseX/90);
  rotateY(mouseY/90);
 // if(mouseIsPressed === true){
  stroke('blue');
  fill('black');
  //}
  
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isFinished()) {
      particles.splice(i, 1);
    }
  }
  if (frameCount % 5 === 0) {
    particles.push(new Particle());
  }
   for (let i = 5; i < 7; i++) {
    //draw the cube
    push(); 
    translate(i * 60 - 150, -100, -100); 
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50);
    pop(); 
}

  for (let i = 1; i < 3; i++) {
    //draw the cube
    push(); 
    translate(i * 60 - 150, -50, -50); 
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50);
    pop(); 
}


  
  
  // Loop to draw multiple 3D boxes
  for (let i = 4; i < 5; i++) {
    //draw the cube
    push(); 
    translate(i * 60 - 150, 0, 0); 
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50);
    pop(); 
}


  for (let i = 3; i < 4; i++) {
    //draw the cube
    push(); 
    translate(i * 60 - 150, 50, 50); 
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50);
    pop(); 
}

  for (let i = 0; i < 1; i++) {
   //draw the cube
    push(); 
    translate(i * 60 - 150, 100, 100); 
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50);
    pop(); 
}

 for (let i = 7; i < 8; i++) {
   //draw the cube
    push(); 
    translate(i * 60 - 150, 100, 100); 
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50);
    pop(); 
}

//for (let i = 0; i < 3; i++) {
   // push(); 
   // translate(-30, i * -50); 
  //  rotateX(frameCount * 0.01);
   // rotateY(frameCount * 0.01);
 //   box(50); 
  //  pop();

//}
//for (let i = 0; i < 3; i++) {
   // push(); 
    //translate(30, i * -50); 
   // rotateX(frameCount * 0.01);
  //  rotateY(frameCount * 0.01);
  //  box(50); 
  //  pop();

//}

//for (let i = 0; i < 3; i++) {
   // push(); 
   // translate(90, i * -50); 
  // rotateX(frameCount * 0.01);
  //  rotateY(frameCount * 0.01);
  //  box(50); 
 //   pop();
//
//}

//for (let i = 0; i < 3; i++) {
 //   push(); 
  //  translate(-90, i * -50); 
  // rotateX(frameCount * 0.01);
   // rotateY(frameCount * 0.01);
  //  box(50); 
   // pop();

//}



//for (let i = 0; i < 3; i++) {
  //  push(); 
  //  translate(-150, i * -50); 
  //  rotateX(frameCount * 0.01);
  //  rotateY(frameCount * 0.01);
  //  box(50); 
  //  pop();//
//}



  
  
}

class Particle {
  constructor() {
    this.pos = createVector(0, 0, 0);
    this.vel = createVector(random(-1, 1), random(-1, 1), random(-1, 1));
    this.lifespan = 255;
  }

  update() {
    this.pos.add(this.vel);
    this.lifespan -= 0.50;
  }

  display() {
   // noStroke();
    fill(255, this.lifespan);
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    sphere(2);
    pop();
  }

  isFinished() {
    return this.lifespan < 0;
  }
}

function windowResized(){
resizeCanvas(windowWidth, windowHeight, WEBGL);
}
