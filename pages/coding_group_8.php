<!DOCTYPE html>

<html>
    <head>
        <title>CIT261:03</title>
        
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/javascript_group_CSS_Transitions_Animations.js'; ?>
        </script>
        <style>
            button {
                width: 100px;
            }
            
            #buttons {
                margin: 20px auto;
                width: 206px;
            }
            
            .box {
                width: 100px;
                height: 100px;
                border-radius: 5px;
                margin: 20px 0px 20px 0px;
            }
            
            #infiniteLoopDiv {
                animation-name: change;
                animation-duration: 3s;
                animation-iteration-count: 0;
                animation-direction: alternate;
            }
            
            @keyframes change {
                0%   {background:    teal;
                      border-radius: 5px;}
                50%  {background:    green;
                      width:         600px;}
                100% {background:    blue;
                      width:         100px;
                      height:	     200px;
                      border-radius: 50px;}
            }
            
            #newDiv {
                animation-name: newAnimation;
                animation-duration: 3s;
                animation-iteration-count: 0;
                animation-direction: alternate;
                -webkit-animation-duration: 3s;
                -webkit-animation-iteration-count: 0;
                -webkit-animation-iteration-duration: 3s;
            }
            
            @keyframes newAnimation {
                0%  {width:         100px;
                     height:        100px;
                     background:    white;
                     border-radius: 5px;}
                50% {width:         600px;}
                100%{background:    grey;
                     height:        200px;
                     border-radius: 20px;}
            }
        </style>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
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
                <h1>Manipulating CSS Class Properties Using JavaScript</h1>
                <hr>
                <h2>Transitions:</h2>
                <div class="box"id="transitionDiv" style="background: grey;"></div>
                <button type="button" onclick="transition('transitionDiv', 'green', '600px', '100px')">Animate</button>
                <button type="button" onclick="transition('transitionDiv', 'grey', '100px', '100px')">Reverse</button>
                <h2>Integrating JavaScript events</h2>
                <h3>onMouseOver/onMouseLeave:</h3>
                <div class="box" id="mouseOverDiv"
                     style="background:red;"
                     onmouseover="transition('mouseOverDiv', 'grey', '600px', '100px')"
                     onmouseout="transition('mouseOverDiv', 'red', '100px', '100px')"></div>
                <h3>Infinite Loop:</h3>
                <div style="height:220px;">
                    <div class="box" id="infiniteLoopDiv" style="background: teal;"></div>
                </div>
                <button type="button" onclick='infiniteTransition(true)'>Animate</button>
                <button type="button" onclick='infiniteTransition(false)'>Stop</button>
                <h2>Create a new animated object:</h2>
                <div id="newObjectContainer" style="height:220px;">
                    <!--New element goes here-->
                </div>
                <button type="button" onclick="createAnimation()">Create</button>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
    </body>
</html>