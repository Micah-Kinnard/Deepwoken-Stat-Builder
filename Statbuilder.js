const raceList = document.getElementById("race-list");
const Etrean = document.getElementById("race1");
const Celtor = document.getElementById("race2");
const Adret = document.getElementById("race3");
const Canor = document.getElementById("race4");
const Gremor = document.getElementById("race5");
const Vesperian = document.getElementById("race6");
const Khan = document.getElementById("race7");
const Felinor = document.getElementById("race8");
const Chrysid = document.getElementById("race9");
const Tiran = document.getElementById("race10");
const Ganymede = document.getElementById("race11");
const Capra = document.getElementById("race12");
const raceChoice = document.getElementById("race-list");

const statMaker = document.getElementById("stat-build-container");
const lP = document.getElementById("gifs");

let Strength = document.getElementById("Strength");
let Fortitude = document.getElementById("Fortitude");
let Agility = document.getElementById("Agility");
let Intelligence = document.getElementById("Intelligence");
let Willpower = document.getElementById("Willpower");
let Charisma = document.getElementById("Charisma");
let temp;
raceChoice.addEventListener("change", (e) => {
    let choice = e.target.value;

    console.log(choice);

    switch (choice) {
        case "race0":
            Strength.value = 0;
            Fortitude.value = 0;
            Agility.value = 0;
            Intelligence.value = 0;
            Willpower.value = 0;
            Charisma.value = 0;
            break;
        case "race1":
            temp = parseInt(Agility.value);
            Agility.value = temp+2;
            temp = parseInt(Intelligence.value);
            Intelligence.value = temp+2
            break;
        case "race2":
            temp = parseInt(Intelligence.value);
            Intelligence.value = temp+2;
            temp = parseInt(Charisma.value);
            Charisma.value = temp+2;
            break;
        case "race3":
            temp = parseInt(Willpower.value);
            Willpower.value = temp+2;
            temp = parseInt(Charisma.value);
            Charisma.value = temp+2;
            break;
        case "race4":
            temp = parseInt(Strength.value);
            Strength.value = temp+2;
            temp = parseInt(Charisma.value);
            Charisma.value = temp+2;
            break;
        case "race5":
            temp = parseInt(Strength.value);
            Strength.value = temp+2;
            temp = parseInt(Fortitude.value);
            Fortitude.value = temp+2;
            break;
        case "race6":
            temp = parseInt(Fortitude.value);
            Fortitude.value = temp+2;
            temp = parseInt(Willpower.value);
            Willpower.value = temp+2;
            break;
        case "race7":
            temp = parseInt(Strength.value);
            Strength.value = temp+2;
            temp = parseInt(Agility.value);
            Agility.value = temp+2;
            break;
        case "race8":
            temp = parseInt(Charisma.value);
            Charisma.value = temp+2;
            temp = parseInt(Agility.value);
            Agility.value = temp+2;
            break;
        case "race9":
            temp = parseInt(Agility.value);
            Agility.value = temp+2;
            temp = parseInt(Charisma.value);
            Charisma.value = temp+2
            break;
        case "race10":
            temp = parseInt(Agility.value);
            Agility.value = temp+2;
            temp = parseInt(Willpower.value);
            Willpower.value = temp+2;
            break;
        case "race11":
            temp = parseInt(Intelligence.value);
            Intelligence.value = temp+2;
            temp = parseInt(Willpower.value);
            Willpower.value = temp+2;
            break;
        case "race12":
            temp = parseInt(Intelligence.value);
            Intelligence.value = temp+2;
            temp = parseInt(Willpower.value);
            Willpower.value = temp+2;
            break;
    }
});

///////////////////////////////////////////////////////calculator

const calculator = document.getElementById("calculator");
const resultDisplay = document.getElementById("display");
const buttons1 = document.getElementById("buttons1");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const addButton = document.getElementById("add");
const minusButton = document.getElementById("subtract");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
let maxLength = resultDisplay.getAttribute("maxLength");
resultDisplay.value = "327";

let tempNumber = null;
let firstNumber = null;
let secondNumber = null;
let operation = null;
let result = null;

for (let i = 0; i < 10; i++) {
  // console.log(i);
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("number-button");
  button.classList.add("input-button");
  button.textContent = i;
  button.setAttribute("data-value", i);
  // console.log(button);
  if (i === 0) {
    button.style.order = 1;
  }
  buttons1.appendChild(button);
}
const numberButtons = document.querySelectorAll(".number-button");
console.log(numberButtons);

numberButtons.forEach((button) => {
  let dataValue = parseInt(button.getAttribute("data-value"));
  console.log(dataValue);

  button.addEventListener("click", function (event) {
    if (resultDisplay.value.length < maxLength) {
      if (operation === null) {
        if (firstNumber === null || firstNumber === 0) {
          firstNumber = dataValue;
        } else {
          firstNumber = parseInt(firstNumber.toString().concat(dataValue));
        }
        resultDisplay.value = firstNumber.toString();
      } else {
        if (secondNumber === null || secondNumber === 0) {
          secondNumber = dataValue;
        } else {
          secondNumber = parseInt(secondNumber.toString().concat(dataValue));
        }
        resultDisplay.value = secondNumber.toString();
      }
    }
  });
  // take each button, add an eventListener with a 'click' event, pass an anonymous function that console.logs tempNumber
});

function clearValues() {
  tempNumber = null;
  firstNumber = null;
  secondNumber = null;
  operation = null;
  result = null;
  resultDisplay.value = 0;
}
clearButton.addEventListener("click", function () {
  clearValues();
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", function (event) {
    // console.log(event);
    const thisOperation = event.target.id;
    console.log(thisOperation);
    if (firstNumber !== null && secondNumber === null) {
      switch (thisOperation) {
        case "add":
          operation = "+";
          break;
        case "subtract":
          operation = "-";
          break;
        case "multiply":
          operation = "*";
          break;
        case "divide":
          operation = "/";
          break;
      }
      resultDisplay.value = operation;
    }
  });
});

equalButton.addEventListener("click", function (event) {
  if (secondNumber !== null) {
    switch (operation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
    }
    resultDisplay.value = result;
  }
});

//////////////////////// login page

statMaker.style.display = "none";

function startBuilding() {
  lP.style.display = "none";
  statMaker.style.display = "block";
}