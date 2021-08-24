const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function factorial(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}

readline.question(`Enter a positive number\n`, number => {
    if (number >= 0) {
        const result = factorial(number)
        console.log(`Factorial of ${number} is ${result}`)
    } else {
        console.log('Please enter a positive number and try again')
    }
    readline.close()
})
