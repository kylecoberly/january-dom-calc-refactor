let firstOperand = ""
let secondOperand = ""
let toFirstOperand = true

function mathOperation(operator){
    if (toFirstOperand) {
        firstOperand += operator
        toFirstOperand = false
    } else {
        firstOperand = eval(firstOperand + secondOperand)
        firstOperand += operator
        secondOperand = ""
    }
}

const operations = {
    "C"(screenDiv){
        screenDiv.innerText = ""
        firstOperand = ""
        secondOperand = ""
        toFirstOperand = true
    },
    "+"(screenDiv){
        mathOperation("+")
    },
    "-"(screenDiv){
        mathOperation("-")
    },
    "x"(screenDiv){
        mathOperation("*")
    },
    "÷"(screenDiv){
        mathOperation("/")
    },
    "="(screenDiv){
        firstOperand = eval(firstOperand + secondOperand)
        secondOperand = ""
        toFirstOperand = false
    },
    "number"(screenDiv, number){
        if (toFirstOperand){
            firstOperand += number
        } else {
            secondOperand += number
        }
        screenDiv.innerText = firstOperand + secondOperand
    }
}

function loadCalculator(){
    const screenDiv = document.querySelector("#screen")

    const buttonsDiv = document.querySelector(".buttons")
    buttonsDiv.addEventListener("click", performOperation(screenDiv))
}

function performOperation(screenDiv) {
    return event => {
        operations[event.target.textContent]
            ? operations[event.target.textContent](screenDiv)
            : operations["number"](screenDiv, event.target.textContent)

        screenDiv.innerText = firstOperand + secondOperand
    }
}

document.addEventListener("DOMContentLoaded", loadCalculator)
