import inquirer from "inquirer";
const guessNumber = Math.round(Math.random() * 9) + 1;
console.log(guessNumber);
async function guessGame() {
    const maxAttempts = 5;
    for (let i = 0; i < maxAttempts; i++) {
        const attemptsLeft = maxAttempts - i;
        const numberGuess = await inquirer.prompt({
            name: "yourGuess",
            type: "number",
            message: `Please guess the number (between 1 and 10). You have ${attemptsLeft} attempt(s) left: `,
            validate: (number) => {
                if (number < 1 || number > 10 || isNaN(number)) {
                    return 'Please enter a number between 1 and 10.';
                }
                return true;
            }
        });
        if (numberGuess.yourGuess === guessNumber) {
            console.log("Congratulations! You guessed the right number.");
            return;
        }
        else {
            console.log(`Incorrect guess. You have ${attemptsLeft - 1} attempt(s) left.`);
        }
    }
    console.log("Sorry, you've run out of attempts. Better luck next time!");
}
guessGame();
