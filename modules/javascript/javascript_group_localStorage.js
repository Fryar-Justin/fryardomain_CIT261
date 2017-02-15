var shoppingList = {
    list: [],
    items: 0,
    notes: ''
};

function saveShoppingList() {
    // Get input from input boxes and assign to values
    for (var i = 0; i < 5; i++) {
        if (document.getElementById('input' + (i + 1)).value != '') {
            shoppingList.list.push(document.getElementById('input' + (i + 1)).value);
            shoppingList.items++;
            document.getElementById('input' + (i + 1)).value = '';
        }
    }
    // Get input from the notes area
    shoppingList.notes = document.getElementById('textArea').value;
    
    // Reset the notes area
    document.getElementById('textArea').value = '';

    // Stringify the shoppingList array
    shoppingList = JSON.stringify(shoppingList);

    // Save the shoppingList to the local storage
    localStorage.setItem('userList', shoppingList);
    
    // Display the updated list
    loadShoppingList();
    showList();
}

function loadShoppingList() {
    // Load the array from local storage
    shoppingList = localStorage.getItem('userList');

    // Parse the string back into a javascript object
    shoppingList = JSON.parse(shoppingList);
}

function addToList() {
    // Load the currently saved shopping list
    loadShoppingList();

    // Add the item to be added to the array and add 1 to the items in cart
    // Only if there is an item entered
    var item = document.getElementById('addToList').value;
    if (item !== '') {
        shoppingList.list.push(item);
        shoppingList.items++;
    }
    
    // Turn array into a string in preparation for saving to local storage
    shoppingList = JSON.stringify(shoppingList);
    
    // Save the string to local storage
    localStorage.setItem('userList', shoppingList);
    
    // Reset the text area and add to list boxes
    document.getElementById('textArea').value = '';
    document.getElementById('addToList').value = '';
    
    // Load the current updated save
    loadShoppingList();
    
    // Display the updated list
    showList();
}

function showList() {
    // Load the currently saved list
    loadShoppingList();
    
    // Display all the lists, items, and notes in the array
    document.getElementById('output').innerHTML = 
        "<br>Your shopping list: " + shoppingList.list + "<br><br>"
        + "You have " + shoppingList.items + " items in your list." + "<br><br>"
        + "Notes: " + shoppingList.notes + "<br><br><br>You can add to this list "
        + "if you want. Just be sure to save it.";
}
//s
function deleteSave(){
    // Remove values from the array
    shoppingList.items = 0;
    shoppingList.list = [];
    shoppingList.notes = '';
    
    // Turn the bland properties into a string
    shoppingList = JSON.stringify(shoppingList);
    
    // Save the blank list to local storage
    localStorage.setItem('userList', shoppingList)
    
    // Display the updated list
    showList();
}

function setListInput() {
    // Preloaded grocery list for convenience
    var groceryList = ['Milk', 'Cereal', 'Pizza', 'Chips', 'Yogurt'];
    for (var i = 0; i < 5; i++) {
        document.getElementById('input' + (i + 1)).value = groceryList[i];
        document.getElementById('input' + (i + 1)).placeholder = '';
    }
}

function setTextInput() {
    // Preloaded notes for convenience
    var message = 'Make sure you get 2%  milk.\n\Buy Honey Bunches of Oats. \n\Get the smallest pizza they have.I\'d prefer Pringles. \n\Get the kind of yogurt that has nuts in it.';

    document.getElementById('textArea').value = message;
}