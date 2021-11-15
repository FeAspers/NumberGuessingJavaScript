// NOW IN JAVASCRIPT MODE
	var myMessage = "Hi Console!";
	var getName = "name";
	var getNumber = 0;
	var gameNumber = 6;
	var resultMsg = "Waiting to play";
	
	console.log(myMessage);
	myMessage = "Guessing numbers between 1 and 5.";
	document.write(myMessage);
	
// Function to play gameNumber
	function play() {
		getName = prompt("Please enter your name :)", "name");
		document.write("Hello, " + getName + "!<br><br>");
		
		gameNumber = Math.floor(Math.random() * 5) + 1;
		console.log("Computer has chosen number: ", gameNumber);
		document.write("Think of a number from 1 to 5.<br><br>");
		
		getNumber = prompt("Enter a number between 1 and 5.");
		console.log(getName, "picked number: ", getNumber);
		document.write("You picked number: " + String(getNumber) + " and Computer picked number: " + String(gameNumber));
		
		if(getNumber != gameNumber) {
			resultMsg = " You guessed wrong!"
		} else {
			resultMsg = " WOW! You guessed the number!";
		}
		document.write(resultMsg)
		}
		
// NOW OUT OF JAVASCRIPT MODE
