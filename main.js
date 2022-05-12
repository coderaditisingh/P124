function teleport()
{
 window.location = "index.html";
}

noseX = 0;
noseY =0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(300,300);

    canvas = createCanvas(300,300);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded()
{
    console.log('poseNet is initialised');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX ="+ noseX + "noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + lefttWristX + "rightWristX" + "difference =" + difference);

    }
}

function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML="width and height of text will be = "+difference+"px"
}
