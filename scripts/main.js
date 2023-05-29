
const disappearBtn = document.querySelector('button.image-disappear');
const appearBtn = document.querySelector('button.image-appear');
const changeColorBtn = document.querySelector('button.image-change-color');
const xRayBtn = document.querySelector('button.image-invert');
const resetBtn = document.querySelector('button.image-reset');

let dollImg = document.querySelector('img');
const blurCounter = 5;
let counter = 0;
let invertCounter = 0;
let hueCounter = 0;

// Image blur effect
function blurImage() {
  counter++;
  dollImg.setAttribute('style', 'filter: blur(' + blurCounter * counter + 'px);')
}

// Image unblur effect
function unblurImage() {
  if (counter <= 0) {
    dollImg.setAttribute('style', 'filter: blur(0px);')
  } else {
    counter--;
    dollImg.setAttribute('style', 'filter: blur(' + blurCounter * counter + 'px);')
  }
}

// Image hue effect
function changeColor() {
  if (hueCounter >= 360) {
    hueCounter = 0;
  } else {
    hueCounter = hueCounter + 45;
  }
  dollImg.setAttribute('style', 'filter: hue-rotate(' + (hueCounter) + 'deg);')

}

// Image invert effect
function xRayImage() {
  if (invertCounter) {
    invertCounter = 0;
    dollImg.setAttribute('style', 'filter: invert(' + invertCounter + ');')
  } else {
    invertCounter = 1;
    dollImg.setAttribute('style', 'filter: invert(' + invertCounter + ');')
  }
}

// Reset all image inline styles
function resetImageInlineStyles() {
  dollImg.removeAttribute('style');
}

//Event listeners
disappearBtn.onclick = function () {
  blurImage();
}
appearBtn.onclick = function () {
  unblurImage();
}
changeColorBtn.onclick = function () {
  changeColor();
}
xRayBtn.onclick = function () {
  xRayImage();
}
resetBtn.onclick = function () {
  resetImageInlineStyles();
}