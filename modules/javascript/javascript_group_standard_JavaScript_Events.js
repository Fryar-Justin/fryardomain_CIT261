var counter = 0;

function onloadEvent(tag) {
    // Define where to place the new element
    var insertInto = document.getElementById(tag)

    // Define the new element including text and id
    var div = document.createElement("div");
    var text = document.createTextNode("This div was created automatically \n\
        when the page loaded! All of this text did not exist in the original \n\
        html file!")
    div.id = "onloadDiv";
    div.appendChild(text);

    // Attach the new elements
    insertInto.appendChild(div);
}

function alertPrompt2(message) {
    // Declare html tag to modify
    var element = document.getElementById("onmouseEnter");
    
    // Set tag styles
    element.style.font = "italic bold 20px arial, serif";
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.verticalAlign="bottom";
    
    // Set tag message
    element.innerHTML = message;
}

function alertPrompt(message) {
    alert(message);
}

function clicked(tag) {
    var randNum = Math.floor(Math.random() * 10);
    var element = document.getElementById(tag);
    var color;
    
    switch (randNum) {
        case 1:
            color = "red";
            break;
        case 2:
            color = "blue";
            break;
        case 3:
            color = "lightblue";
            break;
        case 4:
            color = "green";
            break;
        case 5:
            color = "yellow";
            break;
        case 6:
            color = "teal";
            break;
        case 7:
            color = "pink";
            break;
        case 8:
            color = "purple";
            break;
        case 9:
            color = "orange";
            break;
        case 10:
            color = "black";
            break;
    }
    
    element.style.transition = "background .25s linear 0s";
    element.style.background = color;
}

function touched(id) {
    var randNum = Math.floor(Math.random() * 10);
    var element = document.getElementById(id);
    var width;
    var height;
    
    switch (randNum) {
        case 1:
            width = "50px";
            height = "20px";
            break;
        case 2:
            width = "100px";
            height = "40px";
            break;
        case 3:
            width = "150px";
            height = "60px";
            break;
        case 4:
            width = "200px";
            height = "80px";
            break;
        case 5:
            width = "250px";
            height = "100px";
            break;
        case 6:
            width = "300px";
            height = "120px";
            break;
        case 7:
            width = "350px";
            height = "140px";
            break;
        case 8:
            width = "400px";
            height = "160px";
            break;
        case 9:
            width = "450px";
            height = "180px";
            break;
        case 10:
            width = "500px";
            height = "200px";
            break;
    }
    
    element.style.transition = "width .5s linear 0s, height .5s linear 0s";
    element.style.width = width;
    element.style.height = height;
    element.style.background = "teal";
}