// Global Variables
//.................................................................

// Planet Variables
var planet = {
    blue:
    {
        name: "Blue",
        value: 0
    },

    green:
    {
        name: "Green",
        value: 0
    },

    red:
    {
        name: "Red",
        value: 0
    },

    purple:
    {
        name: "Purple",
        value: 0
    }
};

// Scores (Current & Target)
var currentScore = 0;
var targetScore = 0;

// Wins & Losses
var winCount = 0;
var lossCount = 0;

// Functions
//.................................................................

// Helper Function to get Random Numbers
var getRandom = function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts & Restarts the Game
var startGame = function() {
    
//Reset the Current Score
var currentScore = 0;

//Set a new Target Score (between 19 and 120)
targetScore = getRandom(19, 120);

//Set different values for each of the crystals (between 1 and 12)
planet.blue.value = getRandom(1,12);
planet.green.value = getRandom(1,12);
planet.red.value = getRandom(1,12);
planet.purple.value = getRandom(1,12);

//change the HTML to reflect all of these changes
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);


// Testing Console
console.log("...................................")
console.log("Target Score: " + targetScore);
console.log("Blue: " + planet.blue.value + " | Red: " + planet.red.value + " | Green: " + planet.green.value + " |  Purple: " + planet.purple.value)
console.log("...................................")

}

// Respond to click on the planets
var addValues = function(planet) {

// Change Current Score
currentScore = currentScore + planet.value;

// Change the HTML to reflect changes in currentScore
$("#yourScore").html(currentScore);

//Call the checkWin Function
checkWin();

// Testing Console
console.log("Your Score: " + currentScore);
}

// Check if User Won or Lost and Reset the Game
var checkWin = function() {

    // Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("You Lost, better luck next time")
        console.log("You Lost");

        //Add to Loss Counter
        lossCount++;

        // Change Loss Count HTML
        $("#lossCount").html(lossCount);
    }

    else if (currentScore == targetScore) {
        alert("Nicely done, You Won!")
        console.log("You Won!");

        //Add to Win Counter
        winCount++;

        // Change Win Count HTML
        $("#winCount").html(winCount);
    }
}

// Main Process
//.................................................................

// Starts the Game for the First Time
startGame();

$("#blue").click(function() {
    addValues(planet.blue);
});

$("#red").click(function() {
    addValues(planet.red);
});

$("#green").click(function() {
    addValues(planet.green);
});

$("#purple").click(function() {
    addValues(planet.purple);
});