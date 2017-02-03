//Clears all inputs and outputs in the document
function clearIt() {
    document.getElementById("arrayInput").value = "";
    document.getElementById("arrayOutput").innerHTML = "";
    document.getElementById("whileDoLoopOutput").innerHTML = "";
    document.getElementById("whileLoop2nd").value = "";
    document.getElementById("whileLoop1st").value = "";
    document.getElementById("whileLoopOutput").innerHTML = "";
    document.getElementById("forLoopInput").value = "";
    document.getElementById("forLoopOutput").innerHTML = "";
    document.getElementById("conditionalInput").value = "";
    document.getElementById("conditionalOutput").innerHTML = "";
    document.getElementById("functionsOutput").innerHTML = "";
    document.getElementById("parameterInput").value = "";
    document.getElementById("parameterOutput").innerHTML = "";
}

//Loops Example
function forLoop() {
    var input = parseFloat(document.getElementById('forLoopInput').value);
    var startNumber = 0;
    document.getElementById("forLoopOutput").innerHTML = 0;

    for(var i = 0 ; i < input ; i++) {
            startNumber++;
            document.getElementById("forLoopOutput").innerHTML += ", " + startNumber;
    }
}

function whileLoop(){
    var whileLoop1st = parseFloat(document.getElementById('whileLoop1st').value);
    var whileLoop2nd = parseFloat(document.getElementById('whileLoop2nd').value);
    var output = "";
    
    while(whileLoop1st < whileLoop2nd) {
        if(whileLoop1st + 3 >= whileLoop2nd) {
            break;
        }
        else {
            whileLoop1st += 3;
            output += whileLoop1st + " ";
        }
    }
    
    document.getElementById("whileLoopOutput").innerHTML = output;
}

function whileDoLoop(){
    var output = "";
    var start = 0;
    var end = 200;
    
    do {
        output = output + start + " ";
        start += 10;
    } while (start <= end)
    
    document.getElementById("whileDoLoopOutput").innerHTML = output;
}

//Conditional statements Example
function runConditionalStatements() {
    var familyMembers = {
        ryan:"Ryan is the oldest brother in my family and \n\
              is a Arts Professor in Pennsylvania",
        jared:"Jared is the second oldest in my family and\n\
               is a Mechanical Engineer",
        ben:"Ben is the third oldest in my family and is a\n\
             curriculum developer at BYUI",
        megan:"Megan is the fourth oldest in my family and\n\
               is a Clinical Psychologist",
        seth:"Seth is the fifth oldest in my family and is\n\
              a certified CPA",
        justin:"I am the youngest in my family and will\n\
                graduate in 1 year as a Software Engineer"
    };
    var input = document.getElementById("conditionalInput").value;
    var output;
    
    if(input == "Ryan" || input == "ryan") {
        output = familyMembers.ryan;
    }
    else if(input == "Jared" || input == "jared") {
        output = familyMembers.jared;
    }
    else if(input == "Ben" || input == "ben") {
        output = familyMembers.ben;
    }
    else if(input == "Megan" || input == "megan") {
        output = familyMembers.megan;
    }
    else if(input == "Seth" || input == "seth") {
        output = familyMembers.seth;
    }
    else if(input == "Justin" || input == "justin") {
        output = familyMembers.justin;
    }
    else output = "That is not in the list, please try again!";
    
    document.getElementById("conditionalOutput").innerHTML = "<br>" + output;
    
}

//Functions Example
function functions1() {
    document.getElementById("functionsOutput").innerHTML += "This sentence ";
}

function functions2() {
    document.getElementById("functionsOutput").innerHTML += "is incomplete ";
}

function functions3() {
    document.getElementById("functionsOutput").innerHTML += "without all ";
}

function functions4() {
    document.getElementById("functionsOutput").innerHTML += "four functions being used together";
}

function functionsAll() {
    document.getElementById("functionsOutput").innerHTML += "";
    
    functions1();
    functions2();
    functions3();
    functions4();
}

//Parameters Example
function getInput() {
    var input = document.getElementById("parameterInput").value;
    var input = "<br>Your entered " + input;
    println(input);
}

function println(phrase) {
    document.getElementById("parameterOutput").innerHTML = phrase;
}

//Arrays example
var list = new Array();

function array() {
    //take input
    var input = document.getElementById("arrayInput").value;
    
    //insert into array
    list.push(input);//push into the array
    document.getElementById("arrayInput").value = "";
    
    //output the array contents
    document.getElementById("arrayOutput").innerHTML = list;
}

function multiplyArray() {
    var multiplier = document.getElementById('multiplyArray').value; //get multiplier
    
    for(var i = 0 ; i < list.length ; i++) { //modify array using multiplier
        list[i] *= multiplier;
    }
    
    document.getElementById('multiplyArrayOutput').innerHTML = list; //output the array result
}

function countOddsArray() {
    var counter = 0;
    
    for(var i = 0 ; i < list.length ; i++) {
        if(list[i] % 2 != 0) {
            counter++;
        }
    }
    
    document.getElementById('countOddsOutput').innerHTML = "There are " + counter + " odd numbers in the Array";
}

function clearArray() {
    list = [];
    document.getElementById("arrayOutput").innerHTML = '';
    document.getElementById('multiplyArrayOutput').innerHTML = '';
    document.getElementById('multiplyArray').value = '';
    document.getElementById('countOddsOutput').innerHTML = '';
}

function associativeArray() {
    
    var input = document.getElementById('associativeArrayInput').value;
    
    var durango = {
        make:"Dodge",
        model:"Durango",
        liters:"5.7 Liter",
        horsepower:"330 Horsepower",
        seats:"7",
        finish:"Leather",
    }
    
    document.getElementById('associativeArrayOutput').innerHTML = durango[input];
}

function clearAssociativeArrayEx() {
    document.getElementById('associativeArrayInput').value = '';
    document.getElementById('associativeArrayOutput').innerHTML = '';
}

