var sound;
var sliderRate;
var sliderPan;
var sliderValue;
var button;

function setup(){
  createCanvas(200,200);
  sound = loadSound("file3.mp3", loaded); // Callback
  // sound.setVolume(0.5);
  // sliderRate = createSlider(0, 1.5, 1, 0.01)
  // sliderPan = createSlider(-1, 1, 0, 0.01)
  button = createButton("Play");
  button.mousePressed(togglePlaying);
}

function loaded(){
  //sound.play();
}

function togglePlaying(){
  if(!sound.isPlaying()){
    sound.play();
    sound.setVolume(0.5);
    button.html("pause"); 
  }else{
    sound.pause();
    button.html("play");
  }
  // sound.play();
}

function draw(){
  background(220);
  // sound.setVolume(slider.value()); 
  // sound.rate(sliderRate.value());
  // sound.pan(sliderPan.value());
}

