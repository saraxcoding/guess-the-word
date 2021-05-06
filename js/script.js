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
    e.preventDefault();
    const guess = userInput.value;
    console.log(guess);
    userInput.value = "";
});