// Function to add two numbers
function add(number1, number2) {
  return number1 + number2;
}

// Function to subtract two numbers
function subtract(number1, number2) {
  return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
  return number1 * number2;
}

// Function to divide two numbers
function divide(number1, number2) {
  if (number2 === 0) {
    return "Cannot divide by zero";
  }
  return number1 / number2;
}

// Attach event listeners to buttons
document.getElementById("add").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = add(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("subtract").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = subtract(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("multiply").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = multiply(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("divide").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = divide(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
