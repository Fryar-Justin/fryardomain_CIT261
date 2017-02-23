<!DOCTYPE html>

<html>
    <head>
        <title>CIT261:03</title>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/javascript_group_DOMmanipulation.js'; ?>
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
            <div id="rightContent" class="rightContent">
                <h1>DOM Manipulation</h1>
                <hr>
                <h2>Hey! Do you think you could answer some questions for me?</h2>
                <button type="button" id="yes" onclick="createQuestions()">Yes</button>
                <button type="button" id="no" onclick="getHuffy()">No</button>
                <div id="output" />
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
    </body>
</html>