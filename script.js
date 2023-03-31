// check the link in Console in Chrome Dev Tools
// console.log("Hello World");
// Cael's Cat variable
let cat = "^=";

// Guess That Number
// Message to be used throughout the project
const enterNumText = 'Please enter a number greater than zero to find the cat;';

// For restarting the game
let restartGame = true;

// For Storing the range of the number to be guessed
let rangeNum;

// For storing the number of attempts the user has left
let lives;

// storing the user's guess
let guess;

// For storing te user's response to play again ot not play again
let playAgain;

// Starting alert message
alert('Welcome to "Schrodingers Cat!" Please click "OK" to start the game');


// Game restarts as long as restartGame has a value of true
while (restartGame) {

    // Ask the user to enter a number to set the upper bound for the random number that will be created.
    rangeNum = prompt('Please enter a maximum number for the range to find the cat');
    console.log(rangeNum);

    // Using parseInt to attempt to convert the user's response into a number value

    rangeNum = parseInt(rangeNum)

    // Verifies the user's entry for a range number is a number greater than zero
    // Note: All numbers, positive or negative, have a default boolean value of true, EXCEPT for zero, which has a default boolean value of false
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Create the random number using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;
    console.log(randomNum);

    // Prompts user to enter a number of attempts (lives) allowed 
    lives = parseInt(prompt('Please enter a number of attempts allowed:'));
    console.log(lives);

    // Verifying the user's entry for a numbers of attempts allowed is a number greater than zero and equal to or less than the range they set
    while (!lives || lives < 1 || lives > rangeNum) {
        lives = parseInt(prompt('Please enter a number of attempts allowed:'));
    }

    // Ask user to enter a guess in the range they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum} To find the cat. You have ${lives} live(s) left.`);

    // Continue looping until the user guesses the correct number or runs out of attempts. NOTE: as loop is set up, the "BREAK" keyword is run
    while (true) {

        // Displays the number when a code word is entered
        if (guess === 'pickle') {
            alert(`Psst... the number is ${randomNum}`)
            guess = prompt(`Please enter a guess from 1 to ${rangeNum} To find the cat. You have ${lives} live(s) left.`);
        }

        // tries to covert the users guess into a number
        guess = parseInt(guess);

        // Verify user guess is a number greater than zero abd less than or equal to the range they set
        while (!guess || guess < 1 || guess > rangeNum) {
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`))
        }

        // remove a life from each guess
        lives--;

        // if else

        if (guess === randomNum) {
            alert(`CONGRATS YOU FOUND THE CAT ALIVE AND WELL: ${rangeNum}`);
            break;

            // Check if the user has any lives left.

        } else if (lives === 0) {
            alert(`Sorry but you have a run out of lives to find the cat. You still hear purring try again. The number was ${randomNum}`)
            break;

        } else if (guess == cat) {
            guess = 1
            lives += 2;
            guess = prompt(`You found Cael's cat. you gained an extra life, You have ${lives} live(s) left.`)

        } else if (guess < randomNum) {
            guess = prompt(`Too Low! You hear Meowing in the Distance. You have ${lives} live(s) left.`);

        } else {
            guess = prompt(`Too High! You hear Meowing closer, Maybe? You have ${lives} live(s) left.`);
        }
    }

        playAgain = prompt(`Would you like to play again? Y for YES. N for NO.`);

        // loop continue until user submits a valid response
        while (true) {
            if (playAgain === 'N') {
                
                alert('Thanks for playing');
                
                restartGame = false;
               
                break;
            } else if (playAgain.toUpperCase() === 'Y') {
               
                break;

            } else {
                playAgain = prompt('Please enter Y or N ');
            }
        }

};