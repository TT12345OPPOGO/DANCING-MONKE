function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('', modelReady);

}

function modelReady()
{
    console.log("Model Is Ready😎😎")
}