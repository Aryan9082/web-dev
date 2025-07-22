
    let display = document.getElementById('display');
    let currentInput = '0';

    function updateDisplay() {
      display.innerText = currentInput;
    }

    function appendNumber(num) {
      if (currentInput === '0') {
        currentInput = num;
      } else {
        currentInput += num;
      }
      updateDisplay();
    }

    function appendOperator(op) {
      const lastChar = currentInput[currentInput.length - 1];
      if ("+-*/".includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
      } else {
        currentInput += op;
      }
      updateDisplay();
    }

    function appendDot() {
      const parts = currentInput.split(/[\+\-\*\/]/);
      if (!parts[parts.length - 1].includes('.')) {
        currentInput += '.';
        updateDisplay();
      }
    }

    function clearDisplay() {
      currentInput = '0';
      updateDisplay();
    }

    function calculate() {
      try {
        currentInput = eval(currentInput).toString();
      } catch (e) {
        currentInput = 'Error';
      }
      updateDisplay();
    }
