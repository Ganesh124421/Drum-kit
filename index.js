var a = document.querySelectorAll(".drum");

//button press
for(var i=0;i<a.length;i++)
{
  a[i].addEventListener("click", function(){
    var ele = this.innerHTML;
    switch(ele)
    {
      case "w":var audio = new Audio("sounds/crash.mp3");
              audio.play();
              buttonAnimation(ele);
              break;
      case "a":var audio = new Audio("sounds/kick-bass.mp3");
              audio.play();
              buttonAnimation(ele);
              break;
      case "s": var audio = new Audio("sounds/snare.mp3");
              audio.play();
              buttonAnimation(ele);
              break;
      case "d": var audio = new Audio("sounds/tom-1.mp3");
              audio.play();
              buttonAnimation(ele);
              break;
      case "j": var audio = new Audio("sounds/tom-2.mp3");
              audio.play();
              buttonAnimation(ele);
              break;
      case "k": var audio = new Audio("sounds/tom-3.mp3");
              audio.play();
              buttonAnimation(ele);
              break;
      case "l": var audio = new Audio("sounds/tom-4.mp3");
              audio.play();
              buttonAnimation(ele);
              break;
    }
});
}
//keyboard press
    document.addEventListener("keydown", function(event){
    var arr = event.key;
    switch(arr)
    {
      case "w": var audio = new Audio('sounds/crash.mp3');
              audio.play();
              buttonAnimation(arr);
              break;
      case "a":var audio = new Audio('sounds/kick-bass.mp3');
               audio.play();
               buttonAnimation(arr);
               break;
      case "s": var audio = new Audio('sounds/snare.mp3');
                audio.play();
                buttonAnimation(arr);
                break;
      case "d":var audio = new Audio('sounds/tom-1.mp3');
                              audio.play();
                              buttonAnimation(arr);
                              break;
      case "j":var audio = new Audio('sounds/tom-2.mp3');
               audio.play();
               buttonAnimation(arr);
               break;
      case "k":
              var audio = new Audio('sounds/tom-3.mp3');
              audio.play();
              buttonAnimation(arr);
              break;
      case "l":var audio = new Audio('sounds/tom-4.mp3');
               audio.play();
               buttonAnimation(arr);
               break;
    }
  });
function buttonAnimation(currkey)
{
  var arr = document.querySelector("."+currkey);
  arr.classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currkey).classList.remove("pressed");
  },100);
}
