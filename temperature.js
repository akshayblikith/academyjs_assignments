const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function fahrenheitToCelcius(temp) {
    return (temp - 32) * 5 / 9;
}

function celciusToFahrenheit(temp) {
    return (temp * 9) / 5 + 32;
}

readline.question(`Enter the choice\n 1. Fahrenheit to Celcius \n 2. Celcius to Fahrenheit\n`, selection => {
    if (selection == 1) {
        readline.question(`Enter the temperature in Fahrenheit\n`, temperature => {
            let result = fahrenheitToCelcius(temperature)
            console.log(`Temperature in Celcius: ${result}`)
            readline.close()
        })
    } else if (selection == 2) {
        readline.question(`Enter the temperature in Celcius\n`, temperature => {
            let result = celciusToFahrenheit(temperature)
            console.log(`Temperature in Fahrenheit: ${result}`)
            readline.close()
        })
    } else {
        console.log('Your choice is invalid. Please try again')
        readline.close()
    }
})
