Webcam.set({
    width:300,height:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_photo(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="cool_pic" src="'+data_uri+'"/>';
})
};
console.log('ml5 version',ml5.version); 
classifier=ml5.imageClassifier("hhttps://teachablemachine.withgoogle.com/models/PcRxQoSPQ/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function check(){
 img=document.getElementById('cool_pic');
 classifier.classify(img, gotResult)

}
function gotResult(error,result){
  if (error){
    console.error(error);
  } else{
    console.log(result);
    document.getElementById("object_value").innerHTML= result[0].label;
    document.getElementById("accuracy_value").innerHTML=result[0].confidence.toFixed(3);
  }
}