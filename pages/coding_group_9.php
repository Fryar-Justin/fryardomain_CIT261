<!DOCTYPE html>

<html>
    <head>
        <title>CIT261:03</title>
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/javascript_group_standard_JavaScript_Events.js'; ?>
        </script>
        <style>
            #ontouchDiv {
                width: 300px;
                height: 300px;
                background: lightblue;
                float: left;
            }
        </style>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
    </head>
    <body onload='onloadEvent("onloadEvent")'>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
        </header>
        <main>
            <div class="navigation">
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/navigation.php'; ?>
            </div>
            <div class="rightContent">
                <h1>Standard JavaScript Events including those for Mobile Devices (Ex. onTouchBegin, onLoad, etc.) and Animation and Transition Events</h1>
                <hr>
                <p>
                    <!--******onclick events******-->
                    <h2>onload events:</h2>
                    
                    <p id='onloadEvent'></p>
                    
                    <!--******onclick events******-->
                    <h2>onclick events:</h2>
                    
                    <p>You can click a button:</p>
                    <button type="button" onclick='alertPrompt("You clicked the button!")' style="width:600px;">Click!</button>
                    
                    <p>You can click boxes:</p>
                    <div onclick='alertPrompt("You clicked a div element!")' style="width:600px; height:75px; background:grey; border-radius:15px;"></div><br><br>

                    <!--******onmouseover events******-->
                    <h2>onmouseover/onmouseleave events:</h2>
                    
                    <p>All you have to do is move your mouse over the green box to execute the javascript code</p>
                    
                    <div id="onmouseEnter" style="width:600px; height:75px; background:green; border-radius:15px;"
                         onmouseover='alertPrompt2("You moved your mouse over the green box!")' 
                         onmouseout='alertPrompt2("You moved your mouse outside of the green box!")'></div>
                    </div
                    <!--******ontouch events******-->
                    <h2>ontouchstart events:</h2>
                    
                    <p>If you <u><b>touch</b></u> the box using a tablet or phone it will change shape!<br>
                       Clicking it with a mouse won't do anything!</p>
                    <div id="ontouchDiv" ontouchstart='touched("ontouchDiv")'></div>
                </p>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
    </body>
</html>