function preload()
{
mustache=loadImage("https://i.postimg.cc/SQ148nPn/mustach-removebg-preview.png")
}

function setup()
{
  canvas=  createCanvas(400,400);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  posenet=ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotPoses); 
}

function take_snapshot()
{
  save("uhok.jpg");
}


function modelLoaded()
{
  console.log("PoseNet has been intiallized.");
}

function draw()
{
    image(video,0,0,400,400);
     /*fill(255,0,0);
  stroke(255,0,0);
  circle(noseX,noseY,20);*/
  image(mustache,noseX,noseY,50,50)

}
noseX=0;
noseY=0;

function gotPoses(results)
{
  if(results.length>0)
  {
    noseX=results[0].pose.nose.x-140;
    noseY=results[0].pose.nose.y-50;
    console.log(results);
    console.log("nose x=" + noseX);
    console.log("nose y=" + noseY);
  }
}