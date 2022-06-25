const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    computerChoice = generateComputerChoice()
    getResult(computerChoice, userChoice)
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    else if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    else if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice

    return computerChoice
}

function getResult() {
    if (computerChoice === 'rock') {
        if (userChoice === 'paper') {
            resultDisplay.innerHTML = "Won!"
        }
        else if (userChoice === 'scissors') {
            resultDisplay.innerHTML = "Lose!"
        }
        else {
            resultDisplay.innerHTML = "Draw!"
        }
    }
    if (computerChoice === 'paper') {
        if (userChoice === 'scissors') {
            resultDisplay.innerHTML = "Won!"
        }
        else if (userChoice === 'rock') {
            resultDisplay.innerHTML = "Lose!"
        }
        else {
            resultDisplay.innerHTML = "Draw!"
        }
    }
    if (computerChoice === 'scissors') {
        if (userChoice === 'rock') {
            resultDisplay.innerHTML = "Won!"
        }
        else if (userChoice === 'paper') {
            resultDisplay.innerHTML = "Lose!"
        }
        else {
            resultDisplay.innerHTML = "Draw!"
        }
    }
}