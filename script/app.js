const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, description);
}

function writeToLog(
    operationIdentiier, 
    prevResult, 
    operationNumber, 
    newResult
    ) {
        const logEntry = {
            operation: operationIdentiier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult,
        };
        logEntries.push(logEntry);
        console.log(logEntry);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' && 
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MYLTIPLY'&&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MYLTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function myltiply() {
    calculateResult('MYLTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', myltiply);
divideBtn.addEventListener('click', divide);