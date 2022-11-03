prediction_1 = ""
prediction_2 = ""

Webcam.set({
width: 350,
height: 300,
image_format: 'png',
png_quality: 92,
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2hra75b-l/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
} else {
    console.log(results);
    document.getElementById("result_hand_gesture").innerHTML = results[0].label;
    document.getElementById("result_hand_gesture2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
if (results[0].label == "Thumbs Up")
{
    document.getElementById("update_hand_gesture").innerHTML = "download.png;";

}
if (results[0].label == "Good")
{
    document.getElementById("update_hand_gesture").innerHTML = "images.png;";
}
    if (results[0].label == "fist")
{
    document.getElementById("update_hand_gesture").innerHTML = "download-1.png;";
    
}
if (results[0].label == "Peace Sign")
{
    document.getElementById("update_hand_gesture").innerHTML = "download-2.png;";

}

if (results[1].label == "Thumbs Up")
{
    document.getElementById("update_hand_gesture2").innerHTML = "download.png;";

}
if (results[1].label == "Good")
{
    document.getElementById("update_hand_gesture2").innerHTML = "images.png;";
}
    if (results[1].label == "fist")
{
    document.getElementById("update_hand_gesture2").innerHTML = "download-1.png;";
    
}
if (results[1].label == "Peace Sign")
{
    document.getElementById("update_hand_gesture2").innerHTML = "download-2.png;";

}

}
}