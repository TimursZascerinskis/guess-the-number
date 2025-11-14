let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.getElementById('guessInput');
const btn = document.getElementById('guessBtn');
const message = document.getElementById('message');

    btn.addEventListener('click', function () {
        const value = input.value;
        const guess = parseInt(value, 10);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = "Please enter a valid number between 1 and 100.";
        return;
        }

        attempts++;

        if (guess === secretNumber) {
            message.textContent = "Congratulations! You guessed the number in " + attempts + " attempts";

        } else if (guess > secretNumber) {
            message.textContent = "Too high! Try again.";
        } else {
            message.textContent = "Too low! Try ahain.";
        }
});