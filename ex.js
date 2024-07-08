//1--named multiply that takes two numbers as parameters and returns their product.

function multiply(a, b) {
  return a * b;
}
//test
console.log(multiply(2, 3)); // Expected output: 6
console.log(multiply(-1, 8)); // Expected output: -8
console.log(multiply(0, 5)); // Expected output: 0
console.log(multiply(7, 7)); // Expected output: 49
console.log(multiply(1.5, 2)); // Expected output: 3

//2--returns a string that says "Hello, [name]!".
function greeting(name) {
  return `Hello, ${name}!`;
}
console.log(greeting("Talal")); // Expected output: "Hello, Talal!"
console.log(greeting("Iram")); // Expected output: "Hello, Iram!"

//3--an array of numbers and returns the sum of those numbers
const sumNumbers = (arr) => arr.reduce((acc, num) => acc + num, 0);

// Test cases
console.log(sumNumbers([1, 2, 3, 4, 5])); // Expected output: 15
console.log(sumNumbers([10, 20, 30])); // Expected output: 60
console.log(sumNumbers([-1, -2, -3, -4, -5])); // Expected output: -15
console.log(sumNumbers([0, 0, 0, 0])); // Expected output: 0
console.log(sumNumbers([100])); // Expected output: 100

//4--returns their Body Mass Index (BMI).

function calculateBMI(weight, height) {
  return weight / (height * height);
}

// Test cases
console.log(calculateBMI(70, 1.75)); // Expected output: 22.8571
console.log(calculateBMI(50, 1.6)); // Expected output: 19.53125
console.log(calculateBMI(90, 1.9)); // Expected output: 24.930
console.log(calculateBMI(100, 2)); // Expected output: 25
console.log(calculateBMI(60, 1.5)); // Expected output: 26.666

//5--returns the length of that string.
const getStringLength = (str) => str.length;

// Test cases
console.log(getStringLength("hello")); // Expected output: 5
console.log(getStringLength("")); // Expected output: 0
console.log(getStringLength("OpenAI")); // Expected output: 6
console.log(getStringLength("JavaScript")); // Expected output: 10
console.log(getStringLength("This is a test.")); // Expected output: 15
console.log(getStringLength(" ")); // Expected output: 1
console.log(getStringLength("1234567890")); // Expected output: 10
console.log(getStringLength("long string with multiple words")); // Expected output: 31

//6-- returns the reverse of that string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Expected output: "olleh"
console.log(reverseString("OpenAI")); // Expected output: "IAnepO"
console.log(reverseString("JavaScript")); // Expected output: "tpircSavaJ"
//7-- returns a string that says "Hello, [first] [last]!".
const greetPerson = (person) => `Hello, ${person.first} ${person.last}!`;
console.log(greetPerson({ first: "Iram", last: "Khizar" })); // Expected output: "Hello, Iram khizar!"
console.log(greetPerson({ first: "Maliha", last: "Khizar" })); // Expected output: "Hello, Maliha Khizar!"
console.log(greetPerson({ first: "Talal", last: "Aswad" })); // Expected output: "Hello, Talal Aswad!"

//8--returns the same string with the first letter capitalized
function capitalize(str) {
  if (str.length === 0) {
    return str; // Return the empty string as is
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("hello")); // Expected output: "Hello"
console.log(capitalize("openAI")); // Expected output: "OpenAI"
console.log(capitalize("javaScript")); // Expected output: "JavaScript"

//--9 new array with all the strings capitalized.
const capitalizeStrings = (arr) => arr.map((str) => str.toUpperCase());

// Test
console.log(capitalizeStrings(["apple", "banana", "cherry"]));
console.log(capitalizeStrings(["book", "pen"]));
console.log(capitalizeStrings(["table", "chairs"]));
//10-- returns true if the string is a palindrome (i.e., it reads the same forwards and backwards) and false otherwise
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false
console.log(isPalindrome("level")); // Expected output: true
