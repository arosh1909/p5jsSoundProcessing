var sound;
var sliderRate;
var sliderPan;
var sliderValue;
var button;

var amp;
function setup(){
  createCanvas(500,500);
  sound = loadSound("file3.mp3", loaded); // Callback
  // sound.setVolume(0.5);
  sliderRate = createSlider(0.25, 2, 1, 0.25)
  // sliderPan = createSlider(-1, 1, 0, 0.01)
  
  // jump = createButton("Jump");
  // jump.mousePressed(jumpSong);
  amp = new p5.Amplitude();
}

function loaded(){
  button = createButton("Play");
  button.mousePressed(togglePlaying);
  //sound.play();
}

// function jumpSong(){
//   len = sound.duration();
//   sound.jump(random(len));
// }

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
  vol = amp.getLevel();
  diam = map(vol, 0,1,50,300);
  ellipse(width/2, height/2, diam, diam);
  // sound.setVolume(slider.value()); 
  sound.rate(sliderRate.value());
  // sound.pan(sliderPan.value());
}

