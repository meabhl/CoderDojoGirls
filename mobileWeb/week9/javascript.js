onload = function () {
    sapling.style.display = "none";
};

var increaseBy = 30;
var counter = 0;
var twig;

function grow() {
    counter = counter + 1;
    if (counter < 3) {
        increaseWidth();
        increaseHeight();
    }
}

function increaseWidth() {
    twig = document.getElementById("twig");
    var width = parseInt(twig.offsetWidth);

    width = width + increaseBy;
    twig.style.width = width + "px";
}

function increaseHeight() {
    twig = document.getElementById("twig");

    var height = parseInt(twig.offsetHeight);
    height = height + increaseBy;

    twig.style.height = height + "px";
}

//Change the style of the bird image to hide the picture
function hideBird() {
    bird.style.display = "none";
}

//Change the style of the bird to show the picture
function showBird() {
    bird.style.display = "block";
}


