/*************************************************************************
 * Object Creation Functions, Properties, Methods, Instantiation
 *************************************************************************/
function car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.speed = 0;
    this.gasTank = 100;
    this.gasFillCounter = 0;
    this.nosTank = 100;
    this.nosFillCounter = 0
    this.windows = 'up';
    this.startEngine = function () {
        if (this.gasTank >= 5) {
            this.gasTank -= 5;
            this.counter++
            this.displayStatus();
        }
    }
    this.fillGasTank = function () {
        this.gasTank = 100;
        this.gasFillCounter++;
        this.displayStatus();
    }
    this.hitNos = function () {
        if (this.nosTank >= 25) {
            this.nosTank -= 25;
            this.speed += 50;
            this.displayStatus();
        }
    }
    this.fillNosTank = function () {
        this.nosTank = 100;
        this.nosFillCounter++;
        this.displayStatus();
    }
    this.rollWindowsUp = function () {
        this.windows = 'up';
        this.displayStatus();
    }
    this.rollWindowsDown = function () {
        this.windows = 'down';
        this.displayStatus();
    }
    this.displayStatus = function () {
        document.getElementById('output1').innerHTML =
                'Make: ' + this.make + '<br>'
                + 'Model: ' + this.model + '<br>'
                + 'Color: ' + this.color + '<br>'
                + 'Gas Tank: ' + this.gasTank + '%<br>'
                + 'Nos Tank: ' + this.nosTank + '%<br>'
                + 'You have filled the tank: ' + this.gasFillCounter + ' times<br>'
                + 'You have filled the NOS tank: ' + this.nosFillCounter + ' times<br>'
                + 'The windows are currently: ' + this.windows + '<br>'
                + 'You are traveling at: ' + this.speed + ' MPH!';
    }
}

function makeCar() {

    var make = document.getElementById('make').value;
    var model = document.getElementById('model').value;
    var color = document.getElementById('color').value;

    myCar = new car(make, model, color);

    myCar.displayStatus();
}

function resetAll() {
    myCar = null;
    document.getElementById('output1').innerHTML = null;
}

function main() {
    var action = document.getElementById('action').value;

    if (action == 'startEngine') {
        myCar.startEngine();
    } else if (action == 'fillGasTank') {
        myCar.fillGasTank();
    } else if (action == 'hitNos') {
        myCar.hitNos();
    } else if (action == 'fillNosTank') {
        myCar.fillNosTank();
    } else if (action == 'rollWindowsUp') {
        myCar.rollWindowsUp();
    } else if (action == 'rollWindowsDown') {
        myCar.rollWindowsDown();
    }

}

/*************************************************************************
 * Inheritance using "prototype"
 *************************************************************************/
function dealership() {
    this.name = 'Pontiac of the Rockies';
    this.location = 'Austin Bluffs Pkwy';
    this.numEmployees = 47;
}

function inheritance() {
    dealership.prototype = new car('Chevy', 'Tahoe', 'Red');

    var newInstance = new dealership();

    // override car object to output to appropriate div tag
    newInstance.displayStatus = function() {
        document.getElementById('output2').innerHTML =
                  'Make: '  + this.make + '<br>'
                + 'Model: ' + this.model + '<br>'
                + 'Color: ' + this.color + '<br>'
                + 'Gas Tank: ' + this.gasTank + '%<br>'
                + 'Nos Tank: ' + this.nosTank + '%<br>'
                + 'You have filled the tank: '     + this.gasFillCounter + ' times<br>'
                + 'You have filled the NOS tank: ' + this.nosFillCounter + ' times<br>'
                + 'The windows are currently: '    + this.windows + '<br>'
                + 'You are traveling at: ' + this.speed + ' MPH!';
    }
    newInstance.displayStatus()
    document.getElementById('output2').innerHTML +=
            '<br><br>' + newInstance.make + '<br>' + newInstance.model;
}