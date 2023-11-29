var buttn = document.getElementById('top');

window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttn.style.opacity = 1;
        buttn.style.cursor = 'pointer';
    } else {
        buttn.style.opacity = 0;
        buttn.style.cursor = 'unset';
    }
};

function toTop() {
    window.scrollTo(0, 0);
}

let audioarray = document.getElementsByTagName('audio')
var cleaningfrenzystarted = false

$(".soundbutton").mouseenter(function() {
    audioarray[0].play();
});

$(".soundbutton").click(function() {
    audioarray[1].play();
});

function cleaningfrenzy() {
    if (cleaningfrenzystarted == true) {
        cleaningfrenzystarted = false
        document.getElementById("cleaningfrenzygame").src = "html/Cleaning_Frenzy_Empty.html"
        document.getElementById("cleaningfrenzybutton").textContent = "Start Game"
    } else {
        cleaningfrenzystarted = true
        document.getElementById("cleaningfrenzygame").src = "html/Cleaning_Frenzy.html"
        document.getElementById("cleaningfrenzybutton").textContent = "Stop Game"
    }
}

function cleaningfrenzyfullscreen() {
    document.getElementById("cleaningfrenzygame").requestFullscreen()
}