function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OEzTWY8fd/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
