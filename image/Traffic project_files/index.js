let xCordinate = 80;
let yCordinate = 80;
let x1Cordinate = 30;
let y1Cordinate = 30;
let Xwindow1 = 10;
let Ywindow1 = 20;
let Xwindow2 = 10;
let Ywindow2 = 10;
let eyeSize = 10;
let mouthSize = 20;
let faceSize = 60;

var xSpeed =10;
var ySpeed = 300;

function setup() {
    createCanvas(2300,1000);
}; 


function draw() {
    // we remove the stroke using nostroke.
    noStroke();
    background(0)
    fill(255,255,255);
    
    textSize(40);
    text("Traffic Signal",24,70);
    textSize(20)
    text("<------------------Bangalore to Pune------------------>",1300,390);
    text("<----------------Go slow------------------->",300,630);
    
    // this is our two ways.
    fill(255,255,255);
    // Horizaltal way.
    rect (1,400,2500,200);
    // vertical way.
    rect (1000,70,180,3500)
    // this is for filling the empty  space. 
    rect(1000,10,180,170);

    // for dividing one way to two way.
    fill(0);
    rect(5,500,2000,10);
    rect(500,200,60,70);
    fill(0);
    rect(1080,10,10,2000);
    
    // red car's body.
    fill (255,0,0);
    rect(xSpeed+75,400,xCordinate,yCordinate);
    rect (xSpeed+40,430,150,50)
    // Window of the car.
    fill (0);
    rect (xSpeed+130,410,Xwindow1,Ywindow1);
    // Wheels of the car.
    fill (0);
    ellipse(xSpeed+80, 490, x1Cordinate, y1Cordinate);
    ellipse(xSpeed+150, 490, x1Cordinate, y1Cordinate);
     xSpeed+=2;
    
    // pole of the lights.
    fill (255,255,255);
    rect(900,300,40,100);
    
    // this is for lights.
    // Red light.
    textSize(20);
    text("signal lights",800,140);
    fill(255,0,0);
    circle(920,280,55)
    // Yellow light.
    fill(250,250,0);
    circle(920,230,55)
    // Green light.
    fill(random(25),random(205),random(120));
    circle(920,180,55);

    // this is extra light attraction.
    circle(random(400),random(200),random(40));

    // this is second car body.
    fill (250,250,0);
    rect(ySpeed+685,520,60,70)
    rect (ySpeed+650,540,150,50)
    // second car window.
    fill (0);
    rect (ySpeed+695,530,Xwindow2,Ywindow2);
    // wheels of 2nd car.
    fill (0);
    ellipse(ySpeed+700, 590, x1Cordinate, y1Cordinate);
    ellipse(ySpeed+750, 590, x1Cordinate, y1Cordinate);
    ySpeed-=2

    // this is for man.
    fill(255,255,255);
    ellipse(225,320,faceSize,faceSize);
    rect(220,350,13,50);
    // right hand
    rect(200,360,30,30);
    // Left hand
    rect(230,360,20,30);
    
    fill(255,255,255);
    textSize(20);
    text("I am traffic police!",200,270);
    fill(0);
    ellipse(210,310,eyeSize,eyeSize);
    ellipse(240,310,eyeSize,eyeSize);
    ellipse(220,330,mouthSize,mouthSize);
};