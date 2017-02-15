<!DOCTYPE html>

<html>
    <head>
        <title>CIT261:03</title>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/javascript_group_JSON.js'; ?>
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
                <h1>JSON Parse and Stringify</h1>
                <hr>
                <h2>Let's start by creating an array of whatever you would like</h2>
                <input type="text" id="input" placeholder="Put in something">
                <button onclick="JSONDemo()">Create Array</button>
                <h3>This is what you have put in:</h3>
                <div id="output"></div>
                <h3>Stringify:</h3>
                <div id="output2"></div>
                <h3>Parse:</h3>
                <div id="output3"></div>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
    </body>
</html>