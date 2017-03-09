function drawSquares() {
    // Declare canvas contents and variables
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
    
    // Clear previous draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
     
    // Draw squares
        // 1st square
    ctx.fillStyle = 'rgb(0,0,255)'; 
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2*Math.PI);
    ctx.fillRect(30,30,300,300);    
    
        // 2nd square       
    ctx.fillStyle = 'rgba(0,255,0,0.5)';  
    ctx.fillRect(60,60,300,300);    
    
        // 3rd square
    ctx.fillStyle = 'rgba(255,0,0,0.25)';  
    ctx.fillRect(90,90,300,300); 
}

function drawCircle(){
    // Declare canvas contents and variables
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
    
    // Clear previous draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
     
    // Draw squares
        // 1st Circle 
    ctx.beginPath();
    ctx.arc(180, 180, 150, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = 'rgb(0,0,255)';
    ctx.fill();  
    
        // 2nd Circle       
    ctx.beginPath();
    ctx.arc(210, 210, 150, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(0,255,0,0.5)';  
    ctx.fill();  

    
        // 3rd Circle
    ctx.beginPath();
    ctx.arc(240, 240, 150, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,0,0,0.25)';  
    ctx.fill(); 

}




//******************************** The Person ********************************
var xLE = 192.5;
var xRE = 222.5;
var y = 107.5;

var incrementor = 3;
var counter = 0;
var limit = 200;
var looked = false;

	function autoMoveEyes(){
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, 420, 420)
		
        // Move eyes
        if (counter <= 501){
            // if eyes in center
            if (y >= 107.5 && y < 110.5 && xLE <= 192.5 && xLE > 189.5){
                y++;
                xLE--;
                xRE--;
            }
            // if eyes in bottom left
            else if (y <= 110.5 && y > 104.5 && xLE == 189.5){
                y--;
            }
            // if eyes in top left
            else if (y == 104.5 && xLE >= 189.5 && xLE < 195.5){
                xLE++;
                xRE++;
            }
            // if eyes in top right
            else if (xLE == 195.5 && y >= 104.5 && y < 110.5){
                y++;
            }
            // if eyes in bottom right
            else if (y == 110.5 && xLE <= 195.5 && xLE > 189.5){
                xLE--;
                xRE--;
            }
            // Stop code repetition after certain number of frames
            if (counter == limit){
                counter = 0;
                drawPerson();
                return;
            }
        }

        counter++;      // Increment counter
        displayData();  // Display current eye coordinates
		drawPerson();   // Redraw the person with new coordinates

        // Create some attitude
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Oh no you didn't!", canvas.width * .235, canvas.width * .98);

        setTimeout('autoMoveEyes()', 25);

	}

    function move(num){

        // Move eyes up
        if (num == 1 && y != 104.5){
            y -= incrementor;
        }
        // Move eyes down
        else if (num == 2 && y != 110.5){
            y += incrementor;
        }
        // Move eyes left
        else if (num == 3 && xLE != 189.5){
            xLE -= incrementor;
            xRE -= incrementor;
        }
        // Move eyes right
        else if (num == 4 && xLE != 195.5){
            xLE += incrementor;
            xRE += incrementor;
        }

        drawPerson();   // Draw person with new coordinates
        displayData();  // Display positional data on screen
        

        if (xLE == 195.5 && y == 104.5){
            document.getElementById("feedback").innerHTML += "<br><br>" + 
                    "<b>Hey don't look over there! It's a secret!</b>";
            looked = true;
        }
    }

    function displayData(){
        if (!looked){
            document.getElementById("feedback").innerHTML = 
                               "Left-Eye-Coordinates: "  + xLE + " x " + y
                    + "<br>" + "Right-Eye-Coordinates: " + xRE + " x " + y
                    + "<br>" + "Frame: " + counter + " of " + limit;
        } else {
            document.getElementById("feedback").innerHTML = 
                               "Left-Eye-Coordinates: "  + xLE + " x " + y
                    + "<br>" + "Right-Eye-Coordinates: " + xRE + " x " + y
                    + "<br>" + "Frame: " + counter + " of " + limit
                    + "<br><br>" + "<b>You might not get anything for Christmas now :(</b>";
        }
    }


	function drawPerson(){
    // Declare canvas contents and variables
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var blue = 'rgb(0,0,255)';
    
    // Clear the previous draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw person
        // Draw head
        ctx.beginPath();
              // X            Y         radius  start angle  end angle      counterclockwise
        ctx.arc(210, canvas.width * 0.25 + 20, 40,      0,      Math.PI * 2,        false);
        ctx.closePath();
        ctx.fillStyle = blue;
        ctx.fill();  
        
        // Draw neck & torso
        ctx.fillRect(205, (canvas.height * 0.25) + 60, 10, 150);
        
        // Draw left arm
        ctx.rotate(45 * Math.PI / 180);
        ctx.fillRect(295, 0, 10, 90);
        
        // Draw right arm
        ctx.rotate(-90 * Math.PI / 180);
        ctx.fillRect(-8, 298, 10, 90);

        // Draw left leg
        ctx.rotate(90 * Math.PI / 180);
        ctx.fillRect(365, 70, 10, 90);
        
        // Draw right leg
        ctx.rotate(-90 * Math.PI / 180);
        ctx.fillRect(-78, 368, 10, 90);

        // Draw eyes
        ctx.fillStyle = "white";
        ctx.rotate(45 * Math.PI / 180);
        ctx.fillRect(canvas.width / 2 - 20, canvas.height * 0.25, 10, 10);
        ctx.fillRect(canvas.width / 2 + 10, canvas.height * 0.25, 10, 10);

        // Draw eyrises
        ctx.fillStyle = "black";
            // Left eyrise
        ctx.fillRect(xLE, y, 5, 5);
            // Right eyrise
        ctx.fillRect(xRE, y, 5, 5);
}

function resetEyes(){
    xLE = 192.5;
    xRE = 222.5;
    y = 107.5;
}

function main(){
    drawPerson();
    displayData();
    alert('Whatever you do, DON\'T LOOK IN THE TOP RIGHT CORNER!!!')
}