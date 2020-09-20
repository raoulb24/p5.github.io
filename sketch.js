// Raoul Berger 5h4
// project: galaxy!
// start de muziek met je muisklik


// variable aanmaken voor afbeeldingen
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let audio;


// het voorladen van de afbeeldingen
function preload(){
img1 = loadImage('aarde.jpg');
img2 = loadImage('zon.jpg');
img3 = loadImage('mars.jpg');
img4 = loadImage('venus.jpg');
img5 = loadImage('planeet.jpg');
img6 = loadImage('wit.jpg'); 
audio = createAudio('pokoe.mp3');
}


// het canvas grootte aanmaken en aangeven van webgl + framerate instellen
function setup() {
  createCanvas(600, 600, WEBGL);
  frameRate(35);

}

// het "tekenen" van de planeten in dit geval en de background op zwart zetten en alles laten draaien en zorgen dat de audio niet atomatisch aangaat om bugs te voorkomen
function draw() {
  rotateY(frameCount / -180); 
  audio.autoplay(false);
  background(0,0,0); 
  // functies inzetten
  stars()
  planeet()
  aarde()
  venus()
  mars()
  sun()    

  
}
// als muis word geklikt start de muziek
function mouseClicked() {
  audio.volume(0.2);
  audio.play();
}
// functies van alle planeten instellen van textures de positie bepalen en hoe groot de planeten moeten zijn
function sun(){
  texture(img2);

  translate(0, 0);
  sphere(100, 24, 20);
   
}
function mars(){
  push();
  rotateY(frameCount / -120); 
  texture(img3);
  translate(250, 0);
  sphere(20, 10, 20); 
  pop();
}
function venus(){
push();
  rotateY(frameCount / -80); 
  texture(img4);

  translate(200, 0);
  sphere(25, 10, 20);
  pop();  
  
}
function aarde(){
  push();
  texture(img1);
  rotateY(frameCount / -200); 

  translate(-150, 0);
  sphere(25, 10, 20);
  pop();
}
function planeet(){
  push();
  rotateY(frameCount / -150); 
  texture(img5);

  translate(-280, 0);
  sphere(20, 10, 20);
  pop();

}
function stars(){
  var ster = { 
  locationX : random(-500, 500),
  locationY : random(-500, 500),
  size : random(2,8)
}
  texture(img6);
  ellipse(ster.locationX ,ster.locationY, ster.size, ster.size);
}