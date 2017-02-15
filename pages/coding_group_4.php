<!DOCTYPE html>

<html>
    <head>
        <title>CIT261:03</title>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/javascript_group_AJAX.js'; ?>
        </script>
    </head>
    <body onload="process()">
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
        </header>
        <main>
            <div class="navigation">
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/navigation.php'; ?>
            </div>
            <div class="rightContent">
                <div>
                    <!--Simple AJAX demonstration-->
                    <h1>XMLHTTPRequest to consume a<br>JSON Web Service (AJAX)</h1>
                    <hr>
                    <h2>Example of requesting a resource from the server using AJAX
                    <h3>Please select an object you'd like
                        to retrieve from the server</h3>
                    <select id="objectInput">
                        <option></option>
                        <option value="boat">Boat</option>
                        <option value="car">Car</option>
                        <option value="dog">Dog</option>
                        <option value="stuffedAnimal">Stuffed Animal</option>
                    </select>
                    <button type="button" onclick="getObject()">Request Object</button>
                    <button type="button" onclick="clearObjectOutput()">Clear</button>
                    <div id="objectOutput"></div>
                    <!--More complex AJAX demonstration-->
                    <h2>Example of a dynamic web page using AJAX & PHP</h2>
                    <hr>
                    <h3>Please select an item to see if it is in stock</h3>
                    <!--<input type="text" id="inventoryInput">-->
                    <select id="inventoryInput">
                        <option></option>
                        <option>Xbox One</option>
                        <option>Playstation 4</option>
                        <option>Nintendo Switch</option>
                        <option>PC</option>
                    </select>
                </div>
                <div id="inventoryOutput"></div>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
    </body>
</html>