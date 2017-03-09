var tableCreated = false;
var rowsCreated = false;
var dataCounter = 0;
var dataLabel = 0;
var rowCounter = 0;
var indexCounter = 0;

function createQuestions() {
    var inputIdLabels = ["weather",
        "animals",
        "school",
        "adventure",
        "vacation",
        "color"];

    var questions = ["What is the weather like today?",
        "Do you like dogs or cats?",
        "Are you currently in school?",
        "What is an adventure you want to go on?",
        "Where is your favorite place to vacation?",
        "What is your favorite color?"];

    var numberOfRows = questions.length;

    // Create and append table to output div
    if (!tableCreated) {
        // Set the element I want to insert the table into
        var element = document.getElementById('output');

        // Create table element
        var table = document.createElement("table");

        // Set table id
        table.id = "table1";

        // Append table
        element.appendChild(table);

        // Update table creation value
        tableCreated = true;
    }

    // Create rows with questions and input boxes using for & do while loops
    if (!rowsCreated) {
        for (var rows = 0; rows < questions.length; rows++) {
            // Create row and set id
            var row = document.createElement("tr");
            row.id = "row" + rowCounter;

            // Append row
            document.getElementById("table1").appendChild(row);

            // Create data
            do {
                // Create data and set id
                var data = document.createElement("td");
                data.id = "td" + dataLabel;

                // Append data to row
                document.getElementById("row" + rowCounter).appendChild(data);

                // Create text variable
                if (indexCounter < questions.length) {
                    if (dataLabel % 2 == 0) {
                        // Create text node for array
                        var node = document.createTextNode(questions[indexCounter]);

                        // Append text variable to data point
                        document.getElementById(data.id).appendChild(node);

                    }

                    if (dataLabel % 2 == 1) {
                        // Create input boxes and set id
                        var input = document.createElement("input");
                        input.id = inputIdLabels[indexCounter];

                        // Append input box to data poing
                        document.getElementById(data.id).appendChild(input);

                        // Increment index reference
                        indexCounter++;
                    }
                }

                // Increment data label and data counter
                dataLabel++;
                dataCounter++;
            } while (dataCounter < 2)

            // Move to next row
            rowCounter++;
            dataCounter = 0;
        }
        rowsCreated = true;

    }

    // Remove starting buttons
    var child = document.getElementById("yes");
    child.parentNode.removeChild(child);
    child = document.getElementById("no");
    child.parentNode.removeChild(child);

    // Create button to take input and call function
    var button = document.createElement("button");
    var node = document.createTextNode("Click!");
    button.appendChild(node);
    button.addEventListener("click", function () {
        var responses = {
            weather: document.getElementById(inputIdLabels[0]).value,
            animals: document.getElementById(inputIdLabels[1]).value,
            school: document.getElementById(inputIdLabels[2]).value,
            adventure: document.getElementById(inputIdLabels[3]).value,
            vacation: document.getElementById(inputIdLabels[4]).value,
            color: document.getElementById(inputIdLabels[5]).value,
        };

        // Create new div for the answers
        var div = document.createElement("div");
        div.id = "output2";

        // Gather output message
        var message = "<br>The weather today is: " + responses.weather + "<br>"
                + "You prefer: " + responses.animals + "<br>"
                + "Are you in school: " + responses.school + "<br>"
                + "Your ideal adventure: " + responses.adventure + "<br>"
                + "Your favorite vacation spot: " + responses.vacation + "<br>"
                + "Your favorite color: " + responses.color + "<br>";

        // Enter into text node
        var node = document.createTextNode(message);

        // Output the answer in a new div
        document.getElementById("output").appendChild(div);
        document.getElementById("output2").innerHTML = message;
    });

    // Add button to HTML
    document.getElementById("output").appendChild(button);
}

function getHuffy() {
    // Remove all buttons
    var button = document.getElementById("yes");
    button.parentNode.removeChild(button);
    button = document.getElementById("no");
    button.parentNode.removeChild(button);
    
    // Display a witty comment
    document.getElementById("output").innerHTML = "FINE! I didn't want to get to know you either!";
}