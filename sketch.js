var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 275;
var pointCheckLine;
var particle;
var score = 0;
var tries = 0;
function setup() {
  createCanvas(750, 750);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 5; k <=width; k = k + 74) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 45; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 40; j <=width-30; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 45; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 40; j <=width-30; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(tries >= 5) {
     textSize(50);
     text("GAME OVER!", width / 3, height / 1.75);

   }
   points();
   //console.log(mouseX + ", " + mouseY)
}
function mousePressed() {
  if(tries < 5) {
    particle = new Particle(mouseX, 10,10);
    particles.push(particle);
    tries++;
  }
  console.log(particles[0].body.position.y);
}
function points() {
  if(particle != null) {
    particle.display();
    if(particle.body.position.y > 475) {
      if(particle.body.position.x < 85 && particle.body.position.x > 0 || particle.body.position.x > 675 && particle.body.position.x < 750) {
        score += 500;
        particle = null;
      }
      else if(particle.body.position.x < 450 && particle.body.position.x > 385) {
        score += 400;
        particle = null;
      }
      else {
        score += 200;
        particle = null;
      }
    }
  }
}
