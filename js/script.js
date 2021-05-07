// the ul where the player's guessed letters will appear
const usersGuessedLetters = document.querySelector(".guessed-letters");
// the "Guess!" button
const guessButton = document.querySelector(".guess");
// the text input where the player will guess a letter
const userInput = document.querySelector(".letter");
// the empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
// the paragraph where the remaining guesses will display
const remainingGuesses = document.querySelector(".remaining");
// the span inside the paragraph where the remaining guesses will display
const spanGuesses = document.querySelector(".remaining span");
// the empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
// the hidden button that will appear prompting the player to play again
const playAgainButton = document.querySelector(".play-again");

// starting word to test out game initially
const word = "magnolia";
// contains player's guesses
const guessedLetters = []; 

// displays circle symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    const placeholderLetters = [];

    for (const letter of word) {
        //console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault(); //prevents having to reload the page to empty submission form

    message.innerText = ""; //empty message paragraph

    const guess = userInput.value; //captures player's letter input
    const bestGuess = validateInput(guess); //validate player's letter input
    console.log(bestGuess);

    if (bestGuess) {
        makeGuess(guess);
    }

    userInput.value = ""; //empty player's letter input
});

//checks that players' input is a letter from the alphabet
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/; //ensures the player inputs a letter
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter."
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z."
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that letter, please try again with a different letter :)"
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

const showGuessedLetters = function () {
    usersGuessedLetters.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        usersGuessedLetters.append(li);
    }
};

// update the word in progress with guesses
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase(); // chosen word appears in upper case
    const wordArray = wordUpper.split(""); // upper cased chosen word is spaced out
    //console.log(wordArray);

    // reveals the chosen word if guesses match the letters from the chosen word; otherwise, keeps the circle symbol
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●")
        }
    }
    wordInProgress.innerText = revealWord.join("");
    
    checkIfWin();
};

const checkIfWin = function () {
    if (wordUpper === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
}