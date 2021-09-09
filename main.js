function setup(){
    canvas = createCanvas(250,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Y8p7pmLOY/model.json",model_loaded);
}

function model_loaded(){
    console.log("Model Loaded");
}

function draw(){
    image(video,0,0,250,250);
    classify.classify(video,got_result);
}

function got_result(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}