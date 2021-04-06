console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const num = 16;

let userInput = window.prompt("Guess a number between 1 and 100:");

if (userInput < num) {
  alert("Too low");
} else if (userInput > num) {
  alert("Too high");
} else {
  alert("Congratulations. You guessed correctly!");
}

// Exercise 2
let birthMonth = window
  .prompt('Enter your birth month (e.g. "December"):')
  .toLowerCase();

switch (birthMonth) {
  case "december":
  case "january":
  case "february":
  case "march":
    alert("You were born in Winter.");
    break;
  case "april":
  case "may":
    alert("You were born in Spring.");
    break;
  case "june":
  case "july":
  case "august":
  case "september":
    alert("You were born in Summer.");
    break;
  case "october":
  case "november":
    alert("You were born in Fall.");
    break;
  default:
    alert("You entered a invalid month.");
}
