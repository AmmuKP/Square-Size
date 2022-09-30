noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Model is Loaded");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX = " + noseX + "NoseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log("LeftWristX = " + leftWristX + "RightWristX = " + rightWristX + "Difference between the two = " + difference);
    }
}
function draw() {
    background("lightblue");
    document.getElementById("square_sides").innerHTML = "Width and Height of the Square will be - " + difference + "pixels";
    fill("green");
    stroke("darkgreen");
    square(noseX, noseY, difference);
}