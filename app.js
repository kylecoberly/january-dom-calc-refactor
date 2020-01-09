let firstOperand = ""
let secondOperand = ""
let toFirstOperand = true

document.addEventListener("DOMContentLoaded", () => {

    const screenDiv = document.getElementById("screen")
    const buttonsDiv = document.querySelector(".buttons")
    const operatorButtons = document.getElementsByClassName("operator")
    const zeroButton = document.getElementById("zero")
    const clearButton = document.getElementById("clear")


    buttonsDiv.addEventListener("click", (event) => {
        console.log(event.target.textContent)
        if (!isNaN(event.target.textContent)) {
            numberClicked(event)
        } else {
            operatorClicked(event)
        }
    })

    function numberClicked(event) {
        if (toFirstOperand){
            firstOperand += event.target.textContent
        } else {
            secondOperand += event.target.textContent
        }
        screenDiv.innerText = firstOperand + secondOperand
    }

    function operatorClicked(event) {
        switch (event.target.textContent) {
            case "C":
                screenDiv.innerText = ""
                firstOperand = ""
                secondOperand = ""
                toFirstOperand = true
                break
            case "+":
                if (toFirstOperand) {
                    firstOperand += "+"
                    toFirstOperand = false
                } else {
                    firstOperand = eval(firstOperand + secondOperand)
                    firstOperand += "+"
                    secondOperand = ""
                }
                break
            case "-":
                if (toFirstOperand) {
                    firstOperand += "-"
                    toFirstOperand = false
                } else {
                    firstOperand = eval(firstOperand + secondOperand)
                    firstOperand += "-"
                    secondOperand = ""
                }
                break
            case "x":
                if (toFirstOperand) {
                    firstOperand += "*"
                    toFirstOperand = false
                } else {
                    firstOperand = eval(firstOperand + secondOperand)
                    firstOperand += "*"
                    secondOperand = ""
                }
                break
            case "÷":
                if (toFirstOperand) {
                    firstOperand += "/"
                    toFirstOperand = false
                } else {
                    firstOperand = eval(firstOperand + secondOperand)
                    firstOperand += "/"
                    secondOperand = ""
                }
                break
            case "=":
                firstOperand = eval(firstOperand + secondOperand)
                secondOperand = ""
                toFirstOperand = false
                break
            default:
                break
        }
        screenDiv.innerText = firstOperand + secondOperand
    }
})
