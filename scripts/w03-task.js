/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const sub = function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers () {
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = () => {
    let num1 = Number(document.querySelector('#factor1').value);
    let num2 = Number(document.querySelector('#factor2').value);
    let product = num1 * num2;

    document.querySelector('#product').value = product;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiply);


/* Open Function Use - Divide Numbers */

const division = () => {
    var num1 = Number(document.querySelector('#dividend').value);
    var num2 = Number(document.querySelector('#divisor').value);
    var quotient = num1 / num2;

    document.querySelector('#quotient').value = quotient;
}

document.querySelector('#divideNumbers').addEventListener('click', division);


/* Decision Structure */

number = Number(document.querySelector('#subtotal').value);

// if checkbox

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

numbersArray = document.querySelector('#array').value;

document.querySelector('#evens').innerHTML = numbers.filter(number)

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
