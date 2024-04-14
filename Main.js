let displayValue = "";

const appendToDisplay = (value) => {
  displayValue += value;
  updateDisplay();
};

const clearDisplay = (value) => {
  displayValue = "";
  updateDisplay();
};

const updateDisplay = (value) => {
  document.getElementById("display").value = displayValue;
};

const calculate = (value) => {
  try {
    let result = eval(
      `(function() { 'use strict'; return ${displayValue}; })()`
    );
    if (isFinite(result)) {
      res = result.toString();
      displayValue = res;
    } else {
      displayValue = "Cannot divide by zero";
    }
    updateDisplay();
  } catch (error) {
    displayValue = "Invalid input";
    updateDisplay();
  }
};

it("CSS Testing passes", () => {
  cy.visit("/");
  cy.get(".calculator-container").should(
    "have.css",
    "box-shadow",
    "rgba(0, 0, 0, 0.1) 0px 0px 10px"
  );
});
