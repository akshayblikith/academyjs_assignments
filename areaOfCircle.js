const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function calculateArea(r) {
    return 3.14 * r * r;
}

function calculateCircumference(r) {
    return 2 * 3.14 * r;
}

readline.question(`Enter the choice\n 1. Area \n 2. Circumference\n`, selection => {
    if (selection == 1) {
        readline.question(`Enter the radius\n`, radius => {
            if (radius < 0) {
                console.log('Your radius is invalid. Please try again')
            } else {
                let result = calculateArea(radius)
                console.log(`Area of the circle ${result}`)
            }
            readline.close()
        })
    } else if (selection == 2) {
        readline.question(`Enter the radius\n`, radius => {
            if (radius < 0) {
                console.log('Your radius is invalid. Please try again')
            } else {
                let result = calculateCircumference(radius)
                console.log(`Area of the circle ${result}`)
            }
            readline.close()
        })
    } else {
        console.log('Your choice is invalid. Please try again')
        readline.close()
    }
})
