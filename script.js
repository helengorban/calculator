const field1 = document.querySelector("#num-1");
const field2 = document.querySelector("#num-2");

const plusSign = document.querySelector("#plusbtn");
const minussign = document.querySelector(".minus-btn");
const multiplysign = document.querySelector(".multiply-btn");
const dividesign = document.querySelector(".divide-btn");

const displayResult = document.querySelector("#displayresult")

plusSign.addEventListener("click", addition);
minussign.addEventListener("click", substraction)
multiplysign.addEventListener("click", multiplication)
dividesign.addEventListener("click", division)


function addition (){
    let number1 = field1.valueAsNumber;
    let number2 = field2.valueAsNumber;
    displayResult.textContent = number1 + number2;
    // return result
    return result
}

function substraction (){
    let number1 = field1.valueAsNumber;
    let number2 = field2.valueAsNumber;
    displayResult.textContent = number1 - number2;
    // return result
    return result
}

function multiplication (){
    let number1 = field1.valueAsNumber;
    let number2 = field2.valueAsNumber;
    displayResult.textContent = number1 * number2;
    // return result
    return result
}

function division (){
    let number1 = field1.valueAsNumber;
    let number2 = field2.valueAsNumber;
    displayResult.textContent = number1 / number2;
    // return result
    return result
}