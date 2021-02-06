// main.js

// TODO
var volNum = document.getElementById("volume-number");
var volSlider = document.getElementById("volume-slider");
var volImage = document.getElementById("volume-image");
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");
var honkBtn = document.getElementById("honk-btn");
var audio = document.getElementById("horn-sound");
var hornForm = document.getElementById("party-horn-form");

airHorn.addEventListener("click", (e) => {
  audio.src = "./assets/media/audio/air-horn.mp3";
})

carHorn.addEventListener("click", (e) => {
  audio.src = "./assets/media/audio/car-horn.mp3";
});

partyHorn.addEventListener("click", (e) => {
  audio.src = "./assets/media/audio/party-horn.mp3";
});

hornForm.addEventListener("submit", function(e) {
  e.preventDefault();
  audio.play();
});

volSlider.addEventListener("click", (e) => {
  volNum.value = e.target.value;
  audio.volume = e.target.value / 100;

  if (e.target.value >= 67 && e.target.value <= 100) {
    volImage.src = "./assets/media/icons/volume-level-3.svg";
  }
  else if (e.target.value >= 34 && e.target.value <= 66) {
    volImage.src = "./assets/media/icons/volume-level-2.svg";
  }
  else if (e.target.value > 0 && e.target.value < 34) {
    volImage.src = "./assets/media/icons/volume-level-1.svg";
  }
  else if (e.target.value == 0) {
    volImage.src = "./assets/media/icons/volume-level-0.svg";
  }

});

volNum.addEventListener("click", (e) => {
  volSlider.value = e.target.value;
  audio.volume = e.target.value / 100;

  if (e.target.value >= 67 && e.target.value <= 100) {
    volImage.src = "./assets/media/icons/volume-level-3.svg";
  }
  else if (e.target.value >= 34 && e.target.value <= 66) {
    volImage.src = "./assets/media/icons/volume-level-2.svg";
  }
  else if (e.target.value > 0 && e.target.Value < 34) {
    volImage.src = "./assets/media/icons/volume-level-1.svg";
  }
  else if (e.target.value == 0) {
    volImage.src = "./assets/media/icons/volume-level-0.svg";
  }
});
