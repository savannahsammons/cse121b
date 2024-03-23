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

// if checkbox

function ifCheckbox (subtotal) {
    let checkbox = document.querySelector('#member').checked;
    let newSubtotal = subtotal;
    if (checkbox == true) {
        newSubtotal = subtotal * 0.80;
    }
    else {
        newSubtotal = subtotal;
    }
    return newSubtotal.toFixed(2);
}

function getSubtotal () {
    let subtotal = Number(document.querySelector('#subtotal').value);
    // ifCheckbox(subtotal);

    const totalElement = document.getElementById('total');
    totalElement.innerHTML = `$ ${ifCheckbox(subtotal).toFixed(2)}`;
}

document.querySelector('#getTotal').addEventListener('click', getSubtotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const sourceArray = document.querySelector('#array');

sourceArray.innerHTML = `${numbersArray}`;

/* Output Odds Only Array */

const odds = numbersArray.filter(getOdds);

function getOdds (oddNumber) {
    if (oddNumber % 2 == 1) {
        return oddNumber;
    };
}

const oddNumbers = document.querySelector('#odds');

oddNumbers.innerHTML = `${odds}`;

/* Output Evens Only Array */

const evens = numbersArray.filter(getEvens);

function getEvens (evenNumber) {
    if (evenNumber % 2 == 0) {
        return evenNumber;
    };
}

const evenNumbers = document.querySelector('#evens');

evenNumbers.innerHTML = `${evens}`;

/* Output Sum of Org. Array */

const sumOfNumbers = numbersArray.reduce((sum, number) => sum + number)

const sumArray = document.querySelector('#sumOfArray');

sumArray.innerHTML = `${sumOfNumbers}`;

/* Output Multiplied by 2 Array */

const productOfNumbers = numbersArray.map((x) => x * 2);

const productArray = document.querySelector('#multiplied');

productArray.innerHTML = `${productOfNumbers}`;

/* Output Sum of Multiplied by 2 Array */

const sumOfProduct = productOfNumbers.reduce((sum, number) => sum + number)

const productSumArray = document.querySelector('#sumOfMultiplied');

productSumArray.innerHTML = `${sumOfProduct}`;