var array = new Array();

function JSONDemo(){
    // Add item to array
    array.push(document.getElementById('input').value);
    
    // Reset the input box
    document.getElementById('input').value = null;
    
    // Display the array
    document.getElementById('output').innerHTML = array;
    
    // Stringify the array and display
    array = JSON.stringify(array);
    document.getElementById('output2').innerHTML = array;
    
    // Parse the array and display
    array = JSON.parse(array);
    var output = '';
    for (var i = 0 ; i < array.length ; i++){
        output += array[i] + ', ';
    }
    document.getElementById('output3').innerHTML = output;
}