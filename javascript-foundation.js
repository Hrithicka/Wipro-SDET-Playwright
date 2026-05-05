// String Operations 
let str = "Hello, World!";
console.log("String:", str);
console.log("Length of string:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (0-5):", str.substring(0, 5));

// Array Operations
let colors = ["red", "green", "blue"];
console.log(colors.indexOf("yellow")); // indexOf method returns the index of the first occurrence of the specified 
console.log(colors.includes("yellow")); // includes method returns true if the element is found in the array, otherwise false
console.log(colors.length); 
console.log(colors[colors.length - 1]); // Accessing the last element of the array
colors.push("yellow"); // Adds "yellow" to the end of the array
colors.pop(); // Removes the last element from the array
colors.unshift("purple"); // Adds "purple" to the beginning of the array
colors.shift(); // Removes the first element from the array

// Operators (Mathematical and Logical)
let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("a > b:", a > b); 
console.log("a < b:", a < b); 
console.log("a == b:", a == b); 
console.log("a != b:", a != b); 
console.log("a >= b:", a >= b); 
console.log("a <= b:", a <= b);

// Statements (if-else, switch) 
let i = 0;
let j = 10;

if(i > j) {
    console.log("i is greater");
} else {
    console.log("j is greater");
}

let choice = "a";
switch(choice) {
    case "A":
        console.log("Choice is A");
        break;
    case "B":
        console.log("Choice is B");
        break;  
    default:
        console.log("Invalid choice");
}

// Loops
// For loop
let arr = [1, "Hrithicka", 3, true, 5];
let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length; i++) {  
    console.log("Element at index after * 2 ", i, ":", arr2[i] * 2);
}

// while loop
let count = arr2.length - 1;
while (count >= 0) {
    console.log("Element at index after * 2 ", count, ":", arr2[count] * 2);
    count--;
}

// forEach loop
 arr2.forEach(function(x) {
    console.log("Element after * 2 ", x, ":", x * 2);
 });

 // Using filter and map methods
 // filter method creates a new array with all elements that pass the test implemented by the provided function. In this case, it checks if the type of x is "number". If it is, it includes x in the new array; otherwise, it excludes it. 
 // map method creates a new array populated with the results of calling a provided function on every element in the calling array. In this case, it takes each element y from the filtered array and returns y multiplied by 2, creating a new array with these values.
 let arr = [1, 2, 3, 4, 5, "Hrithicka"];
arr.filter(function(x) { 
    return typeof x === "number";
}).map(function(y) { 
    return y * 2;
});

// Using Arrow functions
// Arrow functions provide a more concise syntax for writing functions in JavaScript. They are often used for short, simple functions and can help improve readability. In this case, the arrow function syntax is used to filter the array and then map the filtered numbers to their doubled values. 
let sum1 = sum(5, 10);
let sum = (x, y) => x + y; // 
console.log("Sum of 5 and 10:", sum(5, 10)); 

// Using callback functions
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. In this case, the callback function is used in the map method to multiply each element by 2 and then in the forEach method to log the result to the console.
arr.map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));

// Random and Floor function
// Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive). By multiplying it by 100, we scale the range to be between 0 and 100. Adding 1 shifts the range to be between 1 and 100. Finally, Math.floor() rounds down the result to the nearest whole number, giving us a random integer between 1 and 100.
// Math.floor(x) rounds down x to the nearest integer. For example, Math.floor(0.9) returns 0, Math.floor(1) returns 1, and Math.floor(1.6) returns 1. This is useful for generating random integers within a specific range.
console.log(Math.floor(Math.random() * 100) + 1);

// == / ===
// The == operator compares two values for equality after converting both values to a common type (type coercion). 
// The === operator compares both the value and the type without performing type coercion. It returns true only if both the value and the type are the same.
console.log(5 == "5");
console.log(5 === "5");

// Type Conversion
// Number() converts a string to a number. If the string cannot be converted to a valid number, it returns NaN (Not-a-Number). For example, Number("5") returns 5, while Number("abc") returns NaN.
// String() converts a number to a string. For example, String(5) returns "5".
let strnum = "5";
console.log(Number(strnum));
console.log(String(5));

//Parse methods
// parseInt() parses a string and returns an integer. It stops parsing when it encounters a non-numeric character. For example, parseInt("0.6") returns 0, while parseInt("abc") returns NaN.
// parseFloat() parses a string and returns a floating-point number. It also stops parsing when it encounters a non-numeric character. For example, parseFloat("0.6") returns 0.6, while parseFloat("abc") returns NaN.
let val = "0.6";
console.log(parseInt(val));
console.log(parseFloat(val));

// splice method
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. In this case, arr.splice(2, 1) removes 1 element at index 2 (which is the number 3) from the array arr. After this operation, the array will be [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // Removes 1 element at index 2
console.log(arr); 

// reduce method 
// The reduce() method executes a reducer function on each element of the array, resulting in a single output value. In this case, the reducer function takes an accumulator and the current value, adds them together, and returns the result. The initial value of the accumulator is set to 0. As the reduce method iterates through the array, it sums up all the elements, resulting in the total sum of the array elements.
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of array elements:", sum); 

// template literals
// Template literals are a way to create strings in JavaScript that allow for embedded expressions and multi-line strings. They are enclosed by backticks (`) instead of single or double quotes. In this case, the template literal is used to create a greeting message that includes the value of the variable name. The expression ${name} is evaluated and replaced with the value of the name variable, resulting in a personalized greeting message.
let name = "Hrithicka";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting);

// DOM Manipulation
// DOM (Document Object Model) manipulation refers to the process of using JavaScript to interact with and modify the structure, style, and content of a web page. The DOM represents the page as a tree of nodes, where each node corresponds to an element in the HTML document. By using JavaScript, you can select elements, change their properties, add new elements, or remove existing ones to create dynamic and interactive web pages.
// document.getElementById("myElement").innerText = "Hello, World!";
// Example: const username = document.getElementById("username").value;

// html, css, js connection
// <input type="text" id="username">
// <input type="password" id="password">
// <button onclick="login()">Login</button>

// linking js file to html
// In the HTML file, you can include a script tag to link your JavaScript file (app.js) to the HTML document. This allows you to use the functions and variables defined in app.js within your HTML page. The script tag should be placed before the closing </body> tag to ensure that the DOM is fully loaded before the JavaScript code runs.
// <script src="app.js"></script>

// making a separate page 
// To create a separate page, you can create a new HTML file (e.g., app.html) and include the necessary HTML structure and content. You can then link this new page from your main HTML file (e.g., index.html) using an anchor tag (<a>) or by redirecting to it using JavaScript (e.g., window.location.href = "app.html";). This allows you to navigate between different pages of your website or application.
// app.html
// <h1>Welcome to the App Page!</h1>
// <script src="app.js"></script>

// Event handling
// Event handling in JavaScript refers to the process of responding to user interactions or other events that occur on a web page. This can include actions such as clicking a button, submitting a form, hovering over an element, or pressing a key. By attaching event listeners to specific elements, you can execute JavaScript code in response to these events, allowing you to create interactive and dynamic web pages.
// function login() {
    // const username = document.getElementById("username").value;
    // const password = document.getElementById("password").value;
    // if (username === "admin" && password === "password") {
    //     alert("Login successful!");
    //     window.location.href = "app.html";
    // } else {
    //     alert("Invalid username or password.");
    // }
//}

// login function in app.js
// The login function retrieves the values entered by the user in the username and password input fields. It then checks if the username is "admin" and the password is "password". If both conditions are met, it displays a success message and redirects the user to app.html. If the credentials are incorrect, it shows an error message indicating that the username or password is invalid.
// function login() {
    // const username = document.getElementById("username").value;
    // const password = document.getElementById("password").value;
    // if (username === "admin" && password === "password") {
    //     alert("Login successful!");
    //     window.location.href = "app.html";
    // } else {
    //     alert("Invalid username or password.");
    // }
//}
    //     window.location.href = "app.html";
    // } else {
    //     alert("Invalid username or password.");
    // }
//}

// Asynchronous JavaScript
// setTimeout, setInterval and Promises
// setTimeout is a built-in JavaScript function that allows you to execute a function after a specified delay 
setTimeout(() => {
    console.log("Hello World");
}, 1000);

// setInterval is a built-in JavaScript function that allows you to execute a function repeatedly at specified intervals
setInterval(() => {
    console.log("Hello again");
}, 2000);

// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now,
// in the future, or never. A promise can be in one of three states: pending, fulfilled, or rejected.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

myPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Fetch API is a modern interface for making HTTP requests in JavaScript. It provides a more powerful and flexible way to interact with APIs compared to older methods like XMLHttpRequest.
// Example of using Fetch API to get data from a public API
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json()) // Convert the response to JSON
    .then(data => console.log(data)) // Log the data
    .catch(error => console.error("Error fetching data:", error)); // Handle any errors

// Fetching API in JavaScript means getting data from an external server (like a website or database) and using it in your code.
// It is used to connect your program to real-world data sources such as users, products, weather, jokes, etc.
// fetch() → sends a request to an API link
// API returns data (usually JSON format)
// .then(res => res.json()) → converts response into usable JavaScript object
// Then we can filter, modify, or display the data
// Fetching API means: Getting data from the internet and using it in JavaScript.

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));