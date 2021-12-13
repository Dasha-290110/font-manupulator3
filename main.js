difference=0;
rightwristx=0;
leftwristx=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(330,330);
    video.position(100,200);
    canvas=createCanvas(330,330);
    canvas.position(600,250);
    Posenet=ml5.poseNet(video,modalLoaded);
    Posenet.on('pose',gotPoses);

}

function modalLoaded(){
    console.log("posenet modal is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightwristx=results[0].pose.rightWrist.x;
        leftwristx=results[0].pose.leftWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("left wrist x ="+ leftwristx +"right wrist x"+ rightwristx +"Difference"+ difference);
 
     }
}

function draw(){
    background('#A020F0');
    document.getElementById('spantag').innerHTML="width and height of the text is :- " + difference +"px";
    textSize(difference);
    text('Dasha',30,150);
    fill("#000000");
}
