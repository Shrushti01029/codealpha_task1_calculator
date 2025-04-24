let currentInput = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }
    currentInput += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').innerText = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput.replace('X', '*'));
        resultDisplayed = true;
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}