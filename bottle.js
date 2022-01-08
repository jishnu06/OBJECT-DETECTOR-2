img = "";
status = "";


function preload(){
    img = loadImage("BOTTLE.jfif");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : object detecting";
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#4805FF");
    text("BOTTLE", 200, 50);
    noFill();
    stroke("#4805FF");
    rect(200, 0, 250, 420);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}