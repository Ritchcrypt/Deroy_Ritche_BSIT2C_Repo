var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (!isSunk) {
    guess = prompt("Ready, Aim, Fire! (Enter a number between 0-6):");

    // Validate input
    if (guess < 0 || guess > 6 || isNaN(guess)) {
        alert("Please enter a valid number between 0 and 6.");
    } else {
        guesses++;

        // Check if the guess is a hit
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!");
            hits++;

            // Check if all parts of the ship are hit
            if (hits === 3) {
                isSunk = true;
                alert("Congratulations! You sank the battleship!");
            }
        } else {
            alert("Miss!");
        }
    }
}

// Calculate accuracy
var accuracy = (hits / guesses) * 100;
var stats = "You took " + guesses + " guesses to sink the battleship.\n" +
            "Accuracy: " + accuracy.toFixed(2) + "%";

// Display final stats
alert(stats);
