<!DOCTYPE HTML>
<html lang="en-us">
<head>
<meta charset="utf-8">
<title>Test Your Math Skills!</title>

<script>
/*Input: 		take 4 inputs from the user, a number, an operator, a number, and an answer
 *Processing: 	convert necessary inputs into numbers and assign values and if statements
 *Output:		tell the user if his answer was correct				
 */
    function program() {
            //input
            var a = parseFloat(document.getElementById("a").value);
            var b = document.getElementById("b").value;
            var c = parseFloat(document.getElementById("c").value);
            var d = parseFloat(document.getElementById("d").value);

            //processing
            var correct = "What the heck!"
            var incorrect = "Incorrect!"

            var checkAdd, checkSubtract, checkMultiply, checkDivide, answer;

                    if (b == "+") {
                            if (a + c == d)
                            answer = "Correct!";
                            else answer = "Incorrect!";
                            }
                    else if (b == "-") {
                            if (a - c == d)
                            answer = "Correct!";
                            else answer = "Incorrect!";
                            }
                    else if (b == "*") {
                            if (a * c == d)
                            answer = "Correct!";
                            else answer = "Incorrect!";
                            }
                    else if (b == "/") {
                            if (a / c == d)
                            answer = "Correct!";
                            else answer = "Incorrect!";
                            }
                    else answer = "Not a valid input";
            //output
            document.getElementById("response").innerHTML = answer;
}
</script>	
</head>
<body>
<h1>Can you Math? WHAT THE HECK</h1>
<div>In the 2nd input box put either + , - , * , or /</div>
<input type='number' id='a' value=5>
<input type='text' id='b' value="+">
<input type='number' id='c' value="5">=
<input type='number' id='d' value ="10"><br>

<button type='button' onclick='program()'>Check</button>
<div id='response'></div>

                    
</body>            
</html>