const wordList = ["APPLE", "BERRY", "CHERRY"]; // Replace with your own list of 5-letter words

const secretWord = wordList[Math.floor(Math.random() * wordList.length)];
let attempts = 6;

const guessInput = document.getElementById("guess-input");
const submitGuess = document.getElementById("submit-guess");
const feedback = document.getElementById("feedback");
const attemptsRemaining = document.getElementById("attempts");

submitGuess.addEventListener("click", () => {
    const guessedWord = guessInput.value.toUpperCase();

    if (guessedWord.length !== 5) {
        alert("Your guess must be a 5-letter word. Try again.");
        return;
    }

    if (guessedWord === secretWord) {
        feedback.innerHTML = "Congratulations, you guessed the secret word!";
        submitGuess.disabled = true;
    } else {
        const feedbackText = getFeedback(secretWord, guessedWord);
        attempts--;
        feedback.innerHTML = `Feedback: ${feedbackText}`;
        attemptsRemaining.textContent = attempts;

        if (attempts === 0) {
            feedback.innerHTML = `Sorry, you ran out of attempts. The secret word was ${secretWord}.`;
            submitGuess.disabled = true;
        }
    }
});

function getFeedback(secretWord, guessedWord) {
    let feedback = [];

    for (let i = 0; i < guessedWord.length; i++) {
        if (guessedWord[i] === secretWord[i]) {
            feedback.push("█");
        } else if (secretWord.includes(guessedWord[i])) {
            feedback.push("░");
        } else {
            feedback.push("·");
        }
    }

    return feedback.join(" ");
}
