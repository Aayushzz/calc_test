let previousNum = "";
let currentNum = "";
let operator = "";

const previousDisplayNumber = document.querySelector(".previousNumber");
const currentDisplayNumber = document.querySelector(".currentNumber");
const clear = document.querySelector(".clear");
clear.addEventListener('click', () => { clearCalculator() });
const del = document.querySelector(".delete");
del.addEventListener('click', delNumber);

const numbers = document.querySelectorAll(".no");
const operators = document.querySelectorAll(".op");
const deci = document.querySelector(".decimal");
deci.addEventListener('click', addDecimal);
const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    if (currentNum !== "" && previousNum !== "") {
        calculate();
    }
})

numbers.forEach(no => {
    no.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

operators.forEach(op => {
    op.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleNumber(num) {
    if (currentNum.length <= 9) {
        currentNum += num;
        currentDisplayNumber.textContent = currentNum;
    }
}

function handleOperator(op) {
    if (previousNum === "") {
        previousNum = currentNum;
        operator = op;
        previousDisplayNumber.textContent = previousNum + " " + operator;
        currentNum = "";
    } else if (currentNum === "") {
        operator = op;
        operatorCheck(); // Call operatorCheck function to update the display
    } else {
        calculate();
        operator = op;
        currentDisplayNumber.textContent = "";
        previousDisplayNumber.textContent = previousNum + " " + operator;
    }
}

function operatorCheck() {
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentNum = "";
    currentDisplayNumber.textContent = "";
}

function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    if (operator === "+") {
        previousNum = previousNum + currentNum;
    } else if (operator === "-") {
        previousNum = previousNum - currentNum;
    } else if (operator === "*") {
        previousNum = previousNum * currentNum;
    } else if (operator === "/") {
        previousNum = previousNum / currentNum;
    }
    previousNum = previousNum.toString();
    displayResult();
}

function displayResult() {
    previousDisplayNumber.textContent = "";
    operator = "";
    if (previousNum.length <= 9) { // Check the length of previousNum
        currentDisplayNumber.textContent = previousNum;
    } else {
        currentDisplayNumber.textContent = previousNum.slice(0, 9);
    }
    currentNum = "";
}

function clearCalculator() {
    currentNum = "";
    currentDisplayNumber.textContent = currentNum;
    previousNum = "";
    previousDisplayNumber.textContent = previousNum;
    operator = "";
}
function addDecimal(){
    if (!currentNum.includes('.')){
        currentNum += ".";
        currentDisplayNumber.textContent = currentNum
    }
}
function delNumber() {
    currentNum = currentNum.slice(0, -1);
    currentDisplayNumber.textContent = currentNum;
}

this is test
asdfasdfasdfa