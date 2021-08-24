const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let secretNumber = Math.floor(Math.random() * 10) + 1;
takeInput()

function checkGuess(guess) {
    if (guess == secretNumber) {
        console.log(`Correct Number`)
        return readline.close()
    } else {
        if (guess > secretNumber) {
            console.log(`You guessed the wrong number. It's lesser than ${guess}.\n`)
            takeInput()
        } else {
            console.log(`You guessed the wrong number. It's greater than ${guess}.\n`)
            takeInput()
        }
    }
}

function takeInput() {
    readline.question(`Enter your guess: `, guess => {
        checkGuess(guess)
    })
}
