var PR=""
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelLoad)
}
function draw (){
  image(video,0,0,300,300)
  classifier.classify(video,got_results)
}
function modelLoad(){
console.log("modelo cargado bruh")
}
function got_results(error,results){
 if(error) {
  console.error(error)
 }else{
  console.log(results)
  if((
    results[0].confidence>0.5
  )&&(PR  != results[0].label))
  {
    PR=results[0].label;
var cint=window.speechSynthesis;
speakdata="el objeto detectado es"+results[0].label;
var other_this=new SpeechSynthesisUtterance(speakdata);
cint.speak (other_this);
    document.getElementById("qwerty").innerHTML=results[0].label;
    document.getElementById("W").innerHTML=results[0].confidence.toFixed(2);
  }
 }
}
