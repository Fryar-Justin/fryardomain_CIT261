<!DOCTYPE html>

<html>
    <head>
        <title>CIT261:03</title>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
        <script>
<?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/javascript_group_objects.js'; ?>
        </script>
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
        </header>
        <main>
            <div class="navigation">
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/navigation.php'; ?>
            </div>
            <div class="rightContent">
                <div>
                    <!--Object Creation Functions, Properties, Methods, Instantiation-->
                    <h1>Object Creation Functions, Properties, Methods, Instantiation</h1><hr>
                    <h2>Lets make a car! Please select the details you'd like below.</h2>
                    <div>
                        <select id='make'>
                            <option>Toyota</option>
                            <option>Honda</option>
                            <option>Dodge</option>
                            <option>Chevy</option>
                            <option>Ford</option>
                        </select>
                        <select id="model">
                            <option>Tacoma</option>
                            <option>Odyssey</option>
                            <option>Durango</option>
                            <option>Malibu</option>
                            <option>F-150</option>
                        </select>
                        <select id='color'>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>White</option>
                            <option>Silver</option>
                            <option>Burnt Orange</option>
                        </select>
                        <button type="button" onclick="makeCar()">Build Car!</button>
                        <h3>Now lets go for a drive!<h3>
                    </div>
                    <div id='greeting'></div>
                    <select id='action'>
                        <option value="startEngine">Start Engine</option>
                        <option value='hitNos'>Hit the Nos!</option>
                        <option value="fillGasTank">Fill Gas Tank</option>
                        <option value="fillNosTank">Fill the Nos Tank</option>
                        <option value='rollWindowsUp'>Roll the Windows Up</option>
                        <option value='rollWindowsDown'>Roll the windows down</option>
                    </select>

                    <button type="button" onclick="makeCar(), main()">Perform Action</button>
                    <button type="button" onclick ="resetAll()">Destroy Car!</button><br>
                    <div id='output1'></div>
                    
                    <!--Inheritance-->
                    <h1>Inheritance</h1><hr>
                    <h2>This program will demonstrate inheritance</h2>
                    <h3>We will cause the dealership to inherit a car object</h3>
                    <div>
                        <button type="button" onclick="inheritance()">
                            Cause the dealership to inherit from the car object</button>
                        <div id="output2"></div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
    </body>
</html>