//clicking button and playing sound
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //here this is difining the current elemnt which is used by event listener
    var textInnerHtml = this.innerHTML;
    makeSound(textInnerHtml);
  });
}

//detecting keyborad input and playing sound
addEventListener("keypress", function(event) {
  makeSound(event.key);
});

//function for choosing sound
function makeSound(key) {

  switch (key) {
    case "w": {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    }
    break;
    case "a": {
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    }
    break;
    case "s": {
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    }
    break;
    case "d": {
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    }
    break;
    case "j": {
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    }
    break;
    case "k": {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    break;
    case "l": {
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    }
    break;
  }
}
