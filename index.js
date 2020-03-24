// document.querySelector("button").addEventListener("click", handClick);
// function handClick() {
//   alert("I got clicked");
// }

// document.getElementsByTagName("button")[0].addEventListener("click", handClick);
// document.getElementsByTagName("button")[1].addEventListener("click", handClick);
// document.getElementsByTagName("button")[2].addEventListener("click", handClick);
// document.getElementsByTagName("button")[3].addEventListener("click", handClick);
// document.getElementsByTagName("button")[4].addEventListener("click", handClick);
// document.getElementsByTagName("button")[5].addEventListener("click", handClick);
// document.getElementsByTagName("button")[6].addEventListener("click", handClick);

// var numOfDrumBtns = document.querySelectorAll(".drum").length;
// for (var i=0; i<numOfDrumBtns; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", handClick);
// }

var tom1Sound = new Audio("sounds\\tom-1.mp3");
function playTom1() {
  tom1Sound.play();
}



var drumButtonsArray = document.querySelectorAll(".drum");
var numberOfDrums = document.querySelectorAll(".drum").length;

// Detecting button pressed

for (var i=0; i<numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    checkCharForSound(this.innerHTML);
    drumBtnClickAnimation(this.innerHTML);
  });
}

// Detecting keyboard pressed

document.addEventListener("keydown", function(event) {
  checkCharForSound(event.key);
  drumBtnClickAnimation(event.key);
});

function checkCharForSound(character) {

  switch (character) {
    case "w":
      var tom1 = new Audio("sounds\\tom-1.mp3");
      tom1 = tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds\\tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds\\tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds\\tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds\\snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds\\crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds\\kick-bass.mp3");
      kick.play();
      break;

    default: console.log(character);
  }
}

function drumBtnClickAnimation(characterChosen) {

  // highlight drum button on press
  var buttonClassChosen = document.querySelector("." + characterChosen);
  buttonClassChosen.classList.add("pressed");
  setTimeout(function () {
    buttonClassChosen.classList.remove("pressed");
  }, 200);

}
