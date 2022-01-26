var x = document.querySelectorAll(".drum").length;
var audio = new Audio('sounds/tom-1.mp3');
document.addEventListener("keypress", function (e) {
    addanim(e.key);
    switch (e.key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        default:
            break;
    }

}
);

for (var i = 0; i < x; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var index = this.innerHTML;
        addanim(index);
        switch (index) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                break;
            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                break;
            case "j":
                var audio = new Audio('sounds/snare.mp3');
                break;
            case "k":
                var audio = new Audio('sounds/kick-bass.mp3');
                break;
            case "l":
                var audio = new Audio('sounds/crash.mp3');
                break;
            default:
                break;
        }
        audio.play();
    }
    );
}

function addanim(keyused) {
    var button = document.querySelector("." + keyused);
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100)
}