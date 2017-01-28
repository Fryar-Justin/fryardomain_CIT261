<!DOCTYPE html>

<html>
    <head>
        <title>CIT261:03</title>
        <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/head.php'; ?>
        <script><?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/javascript_group_loops.js'; ?></script>
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>
        </header>
        <main>
            <div class="navigation">
                <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/navigation.php'; ?>
            </div>
            <div class="rightContent">
                <div>
                    <!--Loops Example-->
                    <!--for loops example-->
                    <h1>Loops</h1>
                    <hr>
                    <h2>for loop:</h2>
                    <h3>This program will count from 0 to whatever number you put in.</h3>
                    
                    <input type="input" id="forLoopInput"><br><br>
                    <button type="button" onclick='forLoop()'>Count</button>
                    <button type='button' onclick='clearIt()'>Reset</button>

                    <div id='forLoopOutput'></div>
                    
                    <!--while loops example-->
                    <h2>while loop:</h2>
                    <h3>This program will count by 3's from your 1st number to your 2nd number</h3>
                    1st number: <input type="input" id='whileLoop1st'>
                    2nd number: <input type="input" id='whileLoop2nd'><br><br>
                    <button type="button" onclick="whileLoop()">Count</button>
                    <button type="button" onclick="clearIt()">Reset</button>
                    
                    <div id='whileLoopOutput'></div>
                    
                    <!--while do loops example-->
                    <h2>while/do loop:</h2>
                    <h3>This program will count by 10's until 200 is reached</h3>
                    <button type="button" onclick="whileDoLoop()">Count</button>
                    <button type="button" onclick="clearIt()">Reset</button>
                    
                    <div id='whileDoLoopOutput'></div>
                    
                </div>
                <div>
                    <!--Conditional Statements Example-->
                    <h1>Conditional Statements</h1>
                    <hr>
                    <h2>This program will give you a response based on what you type in</h2>
                    <div>Please type in one of the following: <br><br> Ryan, Jared, Ben, Megan, Seth, Justin</div>
                    <input id="conditionalInput"><br><br>
                    <button type="button" onclick='runConditionalStatements()'>Get Info</button>
                    <button type='button' onclick='clearIt()'>Reset</button>
                    
                    <div id="conditionalOutput"></div>
                </div>
                <div>
                    <!--Functions Example-->
                    <h1>Functions</h1>
                    <hr>
                    <h2>This program will demonstrate functions</h2>
                    <div>A function is like a miniature program. <br>Each can operate independently or can all be used together</div><br>
                    <button type='button' onclick='functions1()'>Function 1</button>
                    <button type='button' onclick='functions2()'>Function 2</button>
                    <button type='button' onclick='functions3()'>Function 3</button>
                    <button type='button' onclick='functions4()'>Function 4</button>
                    <button type='button' onclick='functionsAll()'>All of them together</button><br><br>
                    <div id ="functionsOutput"></div>
                    <br><button type='button' onclick='clearIt()'>Reset</button>
                </div>
                <div>
                    <!--Parameters Example-->
                    <h1>Parameters</h1>
                    <hr>
                    <h2>This program will demonstrate functions taking parameters</h2>
                    <input id="parameterInput">
                    <button type='button' onclick='getInput()'>>>> Pass into function >>></button><span> println(phrase)</span><br>
                    <div id='parameterOutput'></div><br><br>
                    <button type='button' onclick='clearIt()'>Reset</button>
                </div>
                <div>
                    <!--Arrays examples-->
                    <!--Arrays-->
                    <h1>Arrays</h1>
                    <hr>
                    <h2>arrays:</h2>
                    <h3>Add some numbers to the array</h3>
                    
                    <input type="input"id="arrayInput"><br><br>
                    <button type="button" onclick='array()'>Add to array</button>

                    <div id='arrayOutput'></div>
                    
                    <h3>Multiply the array by a number</h3>
                    
                    <input type="input" id='multiplyArray'><br><br>
                    <button type='button' onclick='multiplyArray()'>Multiply</button>
                    
                    <div id='multiplyArrayOutput'></div>
                    
                    <h3>Count the number of odd numbers in the array</h3>
                    
                    <button type="button" onclick="countOddsArray()">Count Odds</button>
                    <button type='button' onclick='clearArray()'>Reset</button>
                    
                    <div id="countOddsOutput"></div>
                    
                    <!--Associative Array Example-->
                    <h2>associative arrays:</h2>
                    <h3>Would you like to know more about my car? Type in one of the options below to find out more!</h3>
                    
                    <ul>
                        <li>make</li>
                        <li>model</li>
                        <li>liters</li>
                        <li>horsepower</li>
                        <li>seats</li>
                        <li>finish</li>
                    </ul>
                    
                    <input type="input" id='associativeArrayInput'>
                    <button type="button" onclick="associativeArray()">Submit</button>
                    <button type="button" onclick="clearAssociativeArrayEx()">Reset</button>
                    
                    <div id="associativeArrayOutput"></div>
                </div>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>
        </footer>
    </body>
</html>