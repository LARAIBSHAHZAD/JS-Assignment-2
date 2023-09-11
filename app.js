// Chapter 6

// Question 1 

var x = 1;
var res = ++x;

console.log(res)

// Question 2 

var x = 100;
var res2 = --x;

console.log(res2)

// Question 3 

var x = 50;
var y = x++;

console.log(y)
// The value of y is 50.

// Question 4 

var y = 50;
var z = --y;

console.log(z)
// The value of z is 49.

// Question 5 

var num = 6;
var num2 = --num;
var newNum = num2;

console.log(newNum)

// Question 6 

var addNum = 1 + 1;
var result = addNum; 

console.log(result)

// Question 7 

var numberValue = 7;
var result2 = ++numberValue;

alert(result2)

// End of chp 6 

// Chapter 7 

// Question 1 

var calculatedNum = 2 + (2 * 6);

console.log(calculatedNum)
// The value of calculatedNum is 14.

// Question 2 

var calculatedNum2 = (2 + 2) * 6;

console.log(calculatedNum2)
// The value of calculatedNum2 is 24. 

// Question 3 

var calculatedNum3 = (2 + 2) * (4 + 2);

console.log(calculatedNum3)
// The value of calculatedNum3 is 24.

// Question 4 

var calculatedNum4 = ((2 + 2) * 4) + 2;

console.log(calculatedNum4)
// The value of calculatedNum4 is 18. 

// Question 5 

var cost = ((2 + 2) * (4 + 10));

console.log(cost)

// Question 6 

var units = 2 + (2 * 4) + 10;

console.log(units)

// Question 7 

var pressure = 4 / (2 * 4);

console.log(pressure)

// End of chp 7

// Chapter 8

// Question 1

var num = "2" + "2";

console.log(num)
// The value of num is 22. 

// Question 2 

message = ("Hello," + "Dolly");

alert(message)
// The value of message is Hello,Dolly. 

// Question 3 

alert("33" + 3);
// The message displays in alert box is 333. 

// Question 4 

var firstString = "Pakistan";
var SecondString = "Zindabad";

var resultString = firstString + " " + SecondString;

alert(resultString);

// Question 5 

var string = "A string with a";

var number = 45;

var resulted = string + " " + number;

console.log(resulted)

// Question 6 

var string2 = "Hello";

var string3 = "<br>How are you";

var stringresult = string2 + " " + string3;

var stringresult2 = stringresult;

document.write(stringresult2)

// End of chp 8

// Chapter 9 

// Question 1 

var firstName = prompt("Enter First Name")

if(firstName === "Laraib Shahzad")
{
    alert("Welcome...")
}

// Question 2 

var Country = prompt("Country Name")

if(Country === "China")
{
    alert("Nice...")
}

// Question 3 

var yourName = prompt("Enter Your Name");
// Corrected

// Question 4 

var message1 = "Hello this is for you..";
var defaultInput = "Laraib Shahzad";
var resultedInput = prompt(message1, defaultInput);

if(resultedInput !== null)
{
    alert("Welcome" + " " + resultedInput);
}

// Question 5

var message = "Please enter your name:";
var defaultResponse = "John Doe";
var userInput = prompt(message, defaultResponse);

if (userInput !== null) 
{
  alert("Hello, " + userInput + "!");
} 
else
{
  alert("You did not enter a name.");
}

// Question 6 

var userMessage = "In which class do you study";
var defaultResponse1 = "Matric";
var userResponse = prompt(userMessage, defaultResponse1);

if(userResponse === "Matric")
{
  alert("Great keep it up");
}

// End of chp 9 

// Chapter 10 

// Question 1 

var city = "Karachi";

if (city = "Karachi") 
{
  console.log("The City OF Lights");
}
// Corrected

// Question 2 

var x = "What is the value of Z";
var y = 74;
var Z = prompt(x, y);

if (Z === "74") 
{
  alert("Correct");
}

// Question 3 

var ZipCode = prompt("Enter code");

if(ZipCode === "10010")
{
  alert("Karachi")
}
else
{
  alert ("Please write correct city")
}

// Question 4 

var x = 1;

if (x === 1) 
{
  x = 4;
}

console.log(x); 

// End of chp 10 

// Chapter 11 

// Question 1

// if (variable1 !== variable2){}

// Question 2 

// if (variable1 >= variable2){}

// Question 3 

var myVariable = 10;

var particularNumber = 5;

if (myVariable !== particularNumber) 
{
  myVariable = 9;
}

console.log(myVariable);

// Question 4 

var number = 15;
var differentNumber = 25;

if (number !== differentNumber)
{
  alert("Congratulations..")
}

// Question 5

var firstname = prompt("Enter First Name");
var anotherName = "Laraib";

if (firstname !== anotherName)
{
  alert("No Match");
}

// End of chp 11