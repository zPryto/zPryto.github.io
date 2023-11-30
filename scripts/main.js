var topbutton = document.getElementById('top');

window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.opacity = 1;
        topbutton.style.cursor = 'pointer';
    } else {
        topbutton.style.opacity = 0;
        topbutton.style.cursor = 'unset';
    }
};

function toTop() {
    window.scrollTo(0, 0);
}

var audioarray = document.getElementsByTagName('audio')
var cleaningfrenzystarted = false

$(".pbutton").mouseenter(function() {
    audioarray[0].play();
});

$(".pbutton").click(function() {
    audioarray[1].play();
});

function cleaningfrenzy() {
    if (cleaningfrenzystarted == true) {
        cleaningfrenzystarted = false
        document.getElementById("cleaningfrenzygame").src = "html/Cleaning_Frenzy_Empty.html"
        document.getElementById("cleaningfrenzyplay").textContent = "Start Game"
    } else {
        cleaningfrenzystarted = true
        document.getElementById("cleaningfrenzygame").src = "html/Cleaning_Frenzy.html"
        document.getElementById("cleaningfrenzyplay").textContent = "Stop Game"
    }
}

function cleaningfrenzyfullscreen() {
    document.getElementById("cleaningfrenzygame").requestFullscreen()
}