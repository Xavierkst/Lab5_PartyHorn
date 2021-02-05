// main.js

// TODO
var volNum = document.getElementById("volume-number");
var volSlider = document.getElementById("volume-slider");
var volImage = document.getElementById("volume-image");

function setVolume(vol) {
    changeVolImg(vol);

    return function() {
      vol.value = this.value.toString();
    }
}

function changeVolImg() {
  // else {
  //   volImage.src = "./assets/media/icons/volume-level-0.svg";
  // }
  if (this.value >= 67 && this.value <= 100) {
    volImage.src = "./assets/media/icons/volume-level-3.svg";
  }
  else if (this.value >= 34 && this.value <= 66) {
    volImage.src = "./assets/media/icons/volume-level-2.svg";
  }
  else if (this.value >= 0 && this.Value <= 33) {
    volImage.src = "./assets/media/icons/volume-level-1.svg";
  }
  else if (this.value == 0) {
    volImage.src = "./assets/media/icons/volume-level-0.svg";
  }
}

volSlider.addEventListener("change", setVolume(volNum));
volNum.addEventListener("change", setVolume(volSlider));
volSlider.addEventListener("change", changeVolImg);
volNum.addEventListener("change", changeVolImg);
