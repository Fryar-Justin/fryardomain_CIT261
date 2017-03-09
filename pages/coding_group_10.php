<!DOCTYPE html>

<html>
    <head>
        <title>CIT261:03</title>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
        <script>
<?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/javascript_group_HTMLTags.js'; ?>
        </script>    
    </head>
    <body onload="main()">
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
        </header>
        <main>
            <div class="navigation">
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/navigation.php'; ?>
            </div>
            <div class="rightContent">
                <h1>HTML5 Tags - Video, Audio, and Canvas</h1>
                <hr>
                
                <!--********video tags********-->
                <h2>Video Tags:</h2>
                <p>This is a game I am really looking forward to</p>
<!--******************************************************************************************************************************************-->
<!--*           <!--Found that using these video tags causes a lot of lag due to the video file needing to be downloaded                     *-->                 
<!--*           <!--<video width="95%" controls>                                                                                             *-->   
<!--*                <source src="/media/StarCitizenTrailer.mp4" type="video/mp4">                                                           *-->
<!--*           </video>                                                                                                                     *-->
<!--******************************************************************************************************************************************-->
                <iframe width="95%" height="480" src="https://www.youtube.com/embed/pFSnSuV9jz8" frameborder="0" allowfullscreen></iframe>
                <!--********audio tags********-->
                <h2>Audio Tags:</h2>
                <h3>Courtesy of "No Copyright Media":</h3>
                <audio controls>
                    <source src="../media/HeroesTonight.m4a" type="audio/mp4">
                    Your browser does not support the audio tag element
                </audio>
                <h3>Greater than us all by Kenneth Cope:</h3>
                <audio controls>
                    <source src="../media/01_Alleluia.m4a" type="audio/mp4">
                    Your browser does not support the audio tag element
                </audio>
                
                <!--********canvas tags********-->
                <h2>Canvas Tags</h2>
                <p>
                    <p>
                        <button type="button" onclick="drawSquares()">Draw Squares</button>
                        <button type="button" onclick="drawCircle()">Draw Circles</button>
                        <button type="button" onclick="drawPerson()">Draw Person</button>
                    </p>
                    
                    <p>
                        
                        
                    <div id="feedback" style="height:135px"></div>
                    <button type="button" onclick="resetEyes(), autoMoveEyes()">Teenage Attitude</button><br>
                    <canvas id="myCanvas" width="420" height="420" style="border:1px solid #000000;">
                        Your browser does not support the HTML5 canvas tag
                    </canvas><br>
                        <button type="button" onclick="move(1)" style="width:150px">UP</button><br>
                        <button type="button" onclick="move(3)" style="width:73px">LEFT</button>
                        <button type="button" onclick="move(4)" style="width:73px">RIGHT</button><br>
                        <button type="button" onclick="move(2)" style="width:150px">DOWN</button>
                    </p>
                </p>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
    </body>
</html>


