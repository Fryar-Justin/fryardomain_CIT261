var run = false;

function transition(element, color, width, height){
    element = document.getElementById(element);
    element.style.transition = "width 1s linear 0s, \n\
                                height 1s linear 0s, \n\
                                background 1s linear 0s";
    element.style.width = width;
    element.style.height = height;
    element.style.background = color;
}

function infiniteTransition(run) {

    if (run == true) {
        document.styleSheets[0].addRule("#infiniteLoopDiv", "animation-iteration-count: infinite;");
    } else {
        document.styleSheets[0].addRule("#infiniteLoopDiv", "animation-iteration-count: 0;");
    }
}

function createAnimation() {
    // create new instance of a div tag
    var element = document.createElement("div");
    
    // set new div style properties
    element.id = "newDiv";
    element.style.height = "100px";
    element.style.width = "100px";
    element.style.borderRadius = "5px";
    
    // create new div in HTML doc
    var insertionPoint = document.getElementById("newObjectContainer");
    insertionPoint.appendChild(element);
    
    // set new div animations
    var newElement = document.getElementById("newDiv");
    newElement.style.transition = "width 1s linear 0s, \n\
                                height 1s linear 0s, \n\
                                background 1s linear 0s";
    newElement.style.width = "600px";
    newElement.style.height = "200px";

    // begin animations
    document.styleSheets[0].addRule("#newDiv", "animation-iteration-count: infinite;");
}