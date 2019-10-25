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

// Testing Console
console.log("...................................")
console.log("Target Score: " + targetScore);
console.log("Blue: " + planet.blue.value + " | Green: " + planet.green.value + " | Red: " + planet.red.value + " | Purple: " + planet.purple.value)
console.log("...................................")

}

// Main Process
//.................................................................

// Starts the Game the First Time
startGame();

$("#blue").click(function() {
    alert("test");
});

$("#green").click(function() {
    alert("test");
});

$("#red").click(function() {
    alert("test");
});

$("#purple").click(function() {
    alert("test");
});