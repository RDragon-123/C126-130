shakeItOff = "";
readyForIt = "";
leftWristX=0;

leftWristY=0;

rightWristX=0;

rightWristY=0;

scoreLeftWrist=0;

songStatus1=song_shakeItOff.isPlaying();
songStatus2='';
function preload(){

    song = loadSound("Taylor_Swift_-_Shake_It_Off_[NaijaGreen.Com]_.mp3")
    song = loadSound("Taylor Swift -_Ready For It_(MP3_128K).Irc")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);

    fill("#f57914");
    stroke("#f57914");

    if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        song_readyForIt.stop()
        if(songStatus1 == false){
            shakeItOff.play()
        }
}

}

function modelLoaded(){
    console.log('Posenet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
 
     scoreLeftWrist =  results[0].pose.keypoints[9].score;
     
    }
 }