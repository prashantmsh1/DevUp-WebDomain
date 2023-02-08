for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;           //It's text
makeSound(buttonInnerHtml)
addAnimation(buttonInnerHtml)                 //click with mouse
    
  });
}

document.addEventListener("keypress", function (e) {
  makeSound(e.key)                   ///property
  addAnimation(e.key)                   ///click with keyboard
});



function makeSound(key){

    if (key === "w") {
        var tom1 = new Audio(`./sounds/tom-1.mp3`);            ///construction function
        tom1.play();                               //play the sound
      } else if (key === "a") {
        var tom2 = new Audio(`./sounds/tom-2.mp3`);
        tom2.play();
      } else if (key === "s") {
        var tom3 = new Audio(`./sounds/tom-3.mp3`);
        tom3.play();
      } else if (key === "d") {
        var tom4 = new Audio(`./sounds/tom-4.mp3`);
        tom4.play();
      } else if (key === "j") {
        var snare = new Audio(`./sounds/snare.mp3`);
        snare.play();
      } else if (key === "k") {
        var crash = new Audio(`./sounds/crash.mp3`);
        crash.play();
      } else {
        var kickbass = new Audio(`./sounds/kick-bass.mp3`);
        kickbass.play();
      }

}

function addAnimation(currentKey){
    var activeButton = document.querySelector(`.${currentKey}`)
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
        
    }, 100);
}