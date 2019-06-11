class CalcButton {
    constructor(button) {
      this.button = button;
      this.button.addEventListener('click', () => this.testLog());
    }
    testLog() {
      editScreen(this.button.textContent);
    }
  }
  
  // edit the calculator output
  const screen = document.querySelector('#calc-screen');
  screen.textContent = "0";
  const editScreen = function(input) {
    const lastChar = screen.textContent.substr(screen.textContent.length - 1);
    // check if inputting a number
    if(input < 10 || input > -1) {
      // deny adding more than 14 characters to screen
      if(screen.textContent.length < 14) {
        // replace default 0
        if(screen.textContent === "0") {
          screen.textContent = input;
        } else {
          screen.textContent = screen.textContent + input;
        }
      } else {
        errorMessage("MAX input reached!");
      }
    // check if trying to delete last character
    } else if (input === `⌫`) {
      // if last character is default 0 then leave it
      if(screen.textContent === "0") {
        screen.textContent = "0";
      } else {
        screen.textContent = screen.textContent.slice(0, -1);
        if(screen.textContent === "") {
          screen.textContent = "0";
        }
      }
    // check if trying to clear to default
    } else if (input === 'C' || input === 'CE') {
      screen.textContent = "0";
    // check if input is an operation
    } else if (input === '÷' || input === '×' || input === '−' || input === '+') {
  /*    // don't allow double operational symbol
      if(lastChar === '÷' || lastChar === '×' || lastChar === '−' || lastChar === '+') {
        errorMessage("Can't use double operational symbols.");
      } else {
        screen.textContent = screen.textContent + input;
      } */
      // don't allow more than one operational symbol
      if(screen.textContent.includes("÷") || screen.textContent.includes("×") || screen.textContent.includes("−") || screen.textContent.includes("+")) {
        errorMessage("Can't use more than one operational symbol.");
      } else {
        screen.textContent = screen.textContent + input;
      }
    // check if time to solve equation
    } else if (input === '=') {
      // nothing to solve if default 0
      if(screen.textContent === "0") {
        errorMessage("Enter an equation");
      // can't solve if ends with operational symbol
      } else if (lastChar === '÷' || lastChar === '×' || lastChar === '−' || lastChar === '+') {
        errorMessage("The equation can't end with an operational symbol.");
      // solve the equation
      } else {
        // console.log("let's solve!");
        screen.textContent = solveEquation(screen.textContent);
      }
    }
  }
  
  // solve the equation
  const solveEquation = function(input) {
    // check if dividing
    if (input.includes('÷')) {
      const numbers = input.split('÷');
      return numbers[0]/numbers[1];
    // check if multiplying
    } else if (input.includes('×')) {
      const numbers = input.split('×');
      return numbers[0]*numbers[1];
    // check if subtracting
    } else if (input.includes('−')) {
      const numbers = input.split('−');
      return numbers[0]-numbers[1];
    // check if adding
    } else if (input.includes('+')) {
      const numbers = input.split('+');
      console.log(numbers);
      return Number(numbers[0])+Number(numbers[1]);
    // check if false equals press
    } else {
      return input;
    }
  }
  
  // display an error message for 3 seconds
  const errorMessage = function(message) {
    const error = document.getElementById('error');
    const errorBox = document.querySelector('.error-box');
    errorBox.style.display = 'block';
    error.textContent = message;
    setTimeout(function() {
      errorBox.style.display = 'none';
      error.textContent = "";
    }, 3000)
  }
  
  // select the calculator element
  const allButtons = document.querySelectorAll('.button');
  
  // loop to return the new Class 
  allButtons.forEach(function(button) {
    return new CalcButton(button);
  });