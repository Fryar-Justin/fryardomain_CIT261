// Create new AJAX object
var xhttp = new XMLHttpRequest();


function getObject(){
// Simple AJAX implementation (getObject & handleManualObjectResponse functions)
// Create new xmlhttp request object
    var xmlhttp = new XMLHttpRequest();
// Define what to do with a successfull response from server
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var response = JSON.parse(this.responseText);
            handleManualObjectResponse(response);
        }
    }
    
// Gather resource response based on selection chosen by users
    var input = document.getElementById('objectInput').value;
    
// Define connection method, directory, and asynchronous properties
    xmlhttp.open("GET", "/modules/javascript/object_strings/" + 
            input + ".txt", true);
// Perform attempted connection with server
    xmlhttp.send();
}

function handleManualObjectResponse(response){
// Create output variable
    var output = "";
    
    for (var i = 0 ; i < response.length ; i++){
        output += response[i] + "<br>";
    }
// Display retrieved resource to the webpage
    document.getElementById('objectOutput').innerHTML = output;
}

function process(){
// Dynamic example using AJAX (process & handleServerResponse)
// If connection status is "ready" attempt connection
    if (xhttp.readyState == 0 || xhttp.readyState == 4){
    // Encode the user input into valid PHP syntax
        console = encodeURIComponent(document.getElementById('inventoryInput').value);
        
    // Set connection properties for connection, directory, asynchrounous
        xhttp.open("GET", "/modules/XML/consoles.php?console=" + console, true);
        
    // Set action to be performed when the connection is ready
        xhttp.onreadystatechange = handleServerResponse;
    // Attempt connection with server
        xhttp.send();
    } else {
    // Repeat connection attempt every second
        setTimeout('process()', 1000);
    }
}

function handleServerResponse(){
    // If connection is ready
    if (xhttp.readyState == 4 && xhttp.status == 200){
        // Take response from server in XML format
            xmlResponse = xhttp.responseXML;
        // Take response HTML element from server response
            xmlDocumentElement = xmlResponse.documentElement;
        // Take the data from the server response
            message = xmlDocumentElement.firstChild.data;
        // Output the message from the server to the web page
            document.getElementById('inventoryOutput').innerHTML = '<br><span \n\
                style="color:blue">' + message + "</span";
        // Repeat every second
        setTimeout('process()', 1000);
    }
}

function clearObjectOutput(){
    document.getElementById('objectOutput').innerHTML = null;
}
