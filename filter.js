console.log("Opening webpage")
function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
    console.log("Creating canvas")
    console.log("Setting up webcam")
}
function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    console.log("Function draw in canvas")
}
function take_snapshot(){
    save('Project')
    console.log("Saving your snapshot in dowmloads")
}
