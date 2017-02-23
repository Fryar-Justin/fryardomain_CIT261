var index = 0;
var colors = ["red", "blue", "green", "purple", "orange"];

function modifyAppearance() {
    document.getElementById("id1").style.color = "blue";
    document.getElementById("id2").style.fontFamily = "Arial";
    document.getElementById("p1").style.fontStyle = "italic";

    var x = document.createElement("STYLE");
    var y = document.createTextNode("body {background-color: green;} h2 {color: white;}");

    x.appendChild(y);

    document.head.appendChild(x);
}

function headingColor() {
    var element = document.getElementById("h1").style;

    element.color = colors[index];

    if (index == 4)
        index = 0;
    else
        index++;
}

function subHeadingColor() {
    var element = document.getElementById("h2").style;

    element.color = colors[index];

    if (index == 4)
        index = 0;
    else
        index++;
}

function subHeadingItalics() {
    var element = document.getElementById("h2").style;

    element.fontStyle = "italic";
}

function cornersRound() {
    var element = document.getElementById("box").style;

    element.borderRadius = "25px";
}

function cornersSquare() {
    var element = document.getElementById("box").style;
    
    element.borderRadius = "0px";
}

function boxWidthPlus() {
    var element = document.getElementById("box").style;

    var currentWidth = parseFloat(element.width[0] + element.width[1] + element.width[2]);

    element.width = (currentWidth + 20) + "px";

}

function boxWidthMinus() {
    var element = document.getElementById("box").style;

    var currentWidth = parseFloat(element.width[0] + element.width[1] + element.width[2]);

    element.width = (currentWidth - 20) + "px";
}

function boxHeightPlus() {
    var element = document.getElementById("box").style;

    var currentWidth = parseFloat(element.height[0] + element.height[1] + element.height[2]);

    element.height = (currentWidth + 20) + "px";
}

function boxHeightMinus() {
    var element = document.getElementById("box").style;

    var currentWidth = parseFloat(element.height[0] + element.height[1] + element.height[2]);

    element.height = (currentWidth - 20) + "px";
}