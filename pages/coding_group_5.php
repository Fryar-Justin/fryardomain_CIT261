<!DOCTYPE html>

<html>
    <head>
        <title>CIT261:03</title>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
        <script>
        <?php include $_SERVER['DOCUMENT_ROOT'] .
        '/modules/javascript/javascript_group_localStorage.js';?>
        </script>
    </head>
    <body">
        <header>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
        </header>
        <main>
            <div class="navigation">
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/navigation.php'; ?>
            </div>
            <div class="rightContent">
                <h1>Local Storage API</h1>
                <hr>
                <h2>Uh oh! You've been asked to go grocery shopping!</h2>
                <div>
                    Your spouse has asked you to go to the grocery store and 
                    pick up a few things, you were given a list but you are 
                    worried that you will lose it. Instead of tracking this tiny 
                    slip of paper you decide to put it into your computer system. 
                    Don't worry, it won't forget!
                </div>
                <div id="loadOutput"></div><br>
                <input type="text" id="input1" placeholder="Grocery Item"><br>
                <input type="text" id="input2" placeholder="Grocery Item"><br>
                <input type="text" id="input3" placeholder="Grocery Item"><br>
                <input type="text" id="input4" placeholder="Grocery Item"><br>
                <input type="text" id="input5" placeholder="Grocery Item"><br><br>
                <button type="button" onclick="setListInput()">
                    Predefined List</button>
                <h2>
                    Perhaps you should write some notes about what you should 
                    be buying, it's better to be safe than sorry!
                </h2>
                <textarea id="textArea" placeholder="Please enter some notes..."> </textarea>
                <button type="button" onclick="setTextInput()">Predefined Notes</button>
                <div><br>Are you done? Be sure and save!</div><br>
                <button type="button" onclick="saveShoppingList()">Save</button><br><br>
                <div><br>
                    Uh oh! Your spouse calls you while you are at the store and 
                    adds a few items to the list! Act fast and put it in the 
                    computer before the timer runs out and you forget! You'll 
                    surely be in the dog house then!
                </div><br>
                <button type="button" onclick="addToList()">Add item to list</button>
                <input type="text" id="addToList" placeholder="Grocery Item"><br><br>
                <hr>
                <h3>Even if you reload the page, I'll remember!</h3>
                <button type="button" onclick="showList()">Show List</button>
                <button type="button" onclick="deleteSave()">Delete List</button>
                <div id="output"></div>
            </div>
        </main>
        <footer>
            <!--This is a test-->
<?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
    </body>
</html>
