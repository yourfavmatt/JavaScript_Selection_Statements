console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let answer = 30;
let guessNumber = prompt("Guess the number");

if (guessNumber == answer) {
  prompt("Congrats you are correct!");
} else if (guessNumber > answer) {
  prompt("Guess was too high, try again.");
} else if (guessNumber < answer){
  prompt("Guess was too low...try again")
}




let birthMonth = prompt("Please insert your birth month")
 



switch (birthMonth.toLowerCase()) {
  case "december":
  case "january": 
  case "february":
    alert ("Winter");
    break;
 
  case "march": 
  case "april": 
  case "may":
    alert ("Spring");
    break;
 
  case "june": 
  case "july": 
  case "august":
    alert ("Summer");
    break;
  case "september":
  case "october":
  case "november":
    alert ("Fall");
    break;
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01": 
   type = "Tank Top";
   break;
  case "02":
   type = "T-shirt";
   break;
  case "03":
   type = "Long Sleeve";
   break;
  case "04":
   type = "Sweat Shirt"
   break;
  default:
   type = "Other";
}


switch (colorId) {
  case "BLK":
   color = "Black";
   break;
  case "BL":
   color = "Blue";
   break;
  case "RD":  
   color = "Red";
   break;
  case "PU":
   color = "Purple";
   break; 
  case "WH":
   color = "White";
   break;
  default:
   color = "Other"
}
  

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  case "OS":
    size = "One Size Fits All";
    break;
  default:
    size = "Other"
}



console.log(`Product: ${size} ${color} ${type}`);


