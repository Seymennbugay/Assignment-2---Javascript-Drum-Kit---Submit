
/*we describe our css       */
function addTemporaryShadowEffect(element) {
    element.classList.add('shadow-effect');
    setTimeout(function() {
        element.classList.remove('shadow-effect');
    }, 500); 
}

/*   image clicking event    */
document.getElementById('drumImage').addEventListener('click', function() {
    boomSound.play();
    addTemporaryShadowEffect(this);
});


var clapSound = new Audio('sounds/clap.wav');
document.getElementById('clapImage').addEventListener('click', function() {
    clapSound.play();
    addTemporaryShadowEffect(this);
});

/*   describe variables  */
var clapSound = new Audio('sounds/clap.wav');
var boomSound = new Audio('sounds/boom.wav');
var hihatSound = new Audio('sounds/hihat.wav');
var kickSound = new Audio('sounds/kick.wav');
var openhatSound = new Audio('sounds/openhat.wav');
var rideSound = new Audio('sounds/ride.wav');
var snareSound = new Audio('sounds/snare.wav');
var tinkSound = new Audio('sounds/tink.wav');
var tomSound = new Audio('sounds/tom.wav');


document.getElementById('hihatImage').addEventListener('click', function() {
    hihatSound.play();
    addTemporaryShadowEffect(this);
});
document.getElementById('kickImage').addEventListener('click', function() {
    kickSound.play();
    addTemporaryShadowEffect(this);
});
document.getElementById('openhatImage').addEventListener('click', function() {
    openhatSound.play();
    addTemporaryShadowEffect(this);
});
document.getElementById('rideImage').addEventListener('click', function() {
    rideSound.play();
    addTemporaryShadowEffect(this);
});
document.getElementById('snareImage').addEventListener('click', function() {
    snareSound.play();
    addTemporaryShadowEffect(this);
});
document.getElementById('tinkImage').addEventListener('click', function() {
    tinkSound.play();
    addTemporaryShadowEffect(this);
});
document.getElementById('tomImage').addEventListener('click', function() {
    tomSound.play();
    addTemporaryShadowEffect(this);
});
var clapSound = new Audio('sounds/clap.wav');
document.getElementById('clapImage').addEventListener('click', function() {
    clapSound.play();
    addTemporaryShadowEffect(this);
});

