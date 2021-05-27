var btns = document.querySelectorAll(".drum");
var len = btns.length;

for (var i = 0; i < len; i++) {

    btns[i].addEventListener("click", function () {
        var whichbtn = this.innerHTML;
        selection(whichbtn);
        animate(whichbtn);
    });

}

document.addEventListener("keydown", function (event) {
    var whichkey = event.key;
    console.log(event.key);
    selection(whichkey);
    animate(whichkey);
});

function selection(btn) {
    switch (btn) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("no such key present!");
    }
}

function animate(btn) {
    var keybtn = document.querySelector("." + btn);
    keybtn.classList.add("pressed");
    setTimeout(function () {
        keybtn.classList.remove("pressed");
    }, 100);
}
