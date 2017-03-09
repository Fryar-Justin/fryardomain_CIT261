<!DOCTYPE html>

<html>
    <head>
        <title>CIT261:03</title>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/javascript_group_CSSclassproperties.js'; ?>
        </script>
        <style type="text/css">
            button {
                width: 200px;
            }

            #boxButtons {
                width: 410px;
                margin-left: auto;
                margin-right: auto;
            }
        </style>
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
                <h1 id="h1">Manipulating CSS Class Properties Using JavaScript</h1>
                <hr>
                <h2 id="h2">Lets try changing some of the styles on this page!</h2>

                <div id="buttons" style="width:200px;height:auto;margin-left:auto;margin-right:auto;">
                    <button type="button" onclick="headingColor()">Change Heading Color</button>
                    <button type="button" onclick="subHeadingColor()">Change sub-heading Color</button>
                    <button type="button" onclick="subHeadingItalics()">Make Sub Heading Italics</button><br>
                </div><br>
                <div id="boxButtons">
                    <button type="button" onclick="boxWidthPlus()">Increase Width of Box</button>
                    <button type="button" onclick="boxWidthMinus()">Decrease Width of Box</button><br>
                    <button type="button" onclick="boxHeightPlus()">Increase Height of Box</button>
                    <button type="button" onclick="boxHeightMinus()">Decrease Height of Box</button>
                    <div style="width:404px;">
                        <button style="width:404px"type="button" onclick="cornersRound()">Make box corners rounded</button>
                        <button style="width:404px"type="button" onclick="cornersSquare()">Make box corners square</button>
                    </div>
                </div><br><br>

                <div id="box" style="background-color:blue;width:300px;height:300px;margin-left:auto;margin-right:auto;">
                </div>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
    </body>
</html>