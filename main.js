Webcam.set({
width:600,
height:400,
image_format: 'png',
png_quality:90
});

Webcam.attach(document.getElementById("TurnOnWebcam"));

function capture(){
    Webcam.snap(function(data_url) {
document.getElementById("TurnOnPicture").innerHTML = '<img id = "img1" src = "'+ data_uri +'"/>';

    });
}
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JW4HXEcEo/model.json", modelLoaded);