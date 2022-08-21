value = 0;
rightWrist = 0

UsersNameIs = prompt("Dear User, \nI am requesting you to enter your name: ");
alert("Please Move your right hand left or right to increase or decrease the size of the text.")
if(UsersNameIs == null || UsersNameIs == "")
{
    UsersNameIs = "Debjit"
}

function setup()
{

    video = createCapture(VIDEO);
    video.size(350, 350);
    video.position(200, 150);

    canvas = createCanvas(400, 400)
    canvas.position(850, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Something is Initializing...");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        rightWrist = results[0].pose.rightWrist.x;
        console.log(rightWrist);

        v1 = rightWrist - 12
        v2 = rightWrist + 12
        value = floor(rightWrist - ( rightWrist - ( Math.random()  *  (100 - 25) + 25 ) ) );
        document.getElementById("size").innerHTML = value + "px";
        textSize(value)
        
    }
}

function draw()
{
    background('#2596be');
    text(UsersNameIs, 170, 200);
}