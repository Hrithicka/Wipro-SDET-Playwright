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

// async/await method 
// async method is used to declare a function as asynchronous, allowing you to use the await keyword inside it. it makes synchronous code look and behave more like synchronous code, making it easier to read and understand. 
// await method is used to wait for a promise to resolve before proceeding with the execution of the code. It can only be used inside an async function.
async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
getUsers();

// stringify and parse methods
// stringify method converts a JavaScript object into a JSON string. This is useful when you want to send data to a server or store it in a file.
// parse method converts a JSON string back into a JavaScript object. This is useful when you receive data from a server or read it from a file and want to work with it in your code.
const obj = {
    name: "Hrithicka",
    age: 22,
    city: "New York"
}
console.log(JSON.stringify(obj)); // object -> string
console.log(JSON.parse('{"name":"Hrithicka","age":22,"city":"New York"}')); // string -> object

// cleartimeout and clearInterval methods
// clearTimeout is a built-in JavaScript function that allows you to cancel a timeout that was previously set using setTimeout. It takes the timeout ID returned by setTimeout as an argument and prevents the associated function from being executed after the specified delay.
// clearInterval is a built-in JavaScript function that allows you to cancel an interval that was previously set using setInterval. It takes the interval ID returned by setInterval as an argument and stops the associated function from being executed repeatedly at the specified intervals.
const timeoutId = setTimeout(() => {
    console.log("This will not be logged");
}, 5000);
clearTimeout(timeoutId);

const intervalId = setInterval(() => {
    console.log("This will not be logged repeatedly");
}, 3000);
clearInterval(intervalId);


// oops concepts in JavaScript
// oops stands for Object-Oriented Programming System. It is a programming paradigm that uses objects and classes to organize code and data. The main concepts of OOPS in JavaScript include:
// 1) Constructor function: A special function used to create and initialize objects in JavaScript. It is called when a new instance of an object is created using the new keyword.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const dog = new Animal("Jhonny");
const cat = new Animal("Whiskers");
dog.speak();
cat.speak();

// 2) Encapsulation: The bundling of data and methods that operate on that data within a single unit (class or object).
class BankAccount {
    #balance = 0; // private variable | Access modifier
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const HrithickaAccount = new BankAccount();
HrithickaAccount.deposit(1000);
HrithickaAccount.withdraw(200);
// HrithickaAccount.balance = 10000;
console.log(`Final Balance: ₹${HrithickaAccount.getBalance()}`);
 
const AarthiAccount = new BankAccount();
AarthiAccount.deposit(500);
AarthiAccount.withdraw(1000);
console.log(`Final Balance: ₹${AarthiAccount.getBalance()}`);

// 3) Inheritance: The ability of a new class (child class) to inherit properties and methods from an existing class (parent class).
class User {
    constructor(name) {
        this.name = name;
    }
    logIn() {
        console.log(`${this.name} has logged in.`);
    }
}
class Admin extends User {
    constructor(name, role) {
        super(name); // call the parent class constructor
        this.role = role;
    }
    logIn() {
        super.logIn(); // call the parent class method
        console.log(`${this.name} has admin privileges as a ${this.role}.`);
    }
}
 
const user1 = new User("Alice");
const admin1 = new Admin("Bob", "Super Admin");
 
user1.logIn(); // Alice has logged in.
admin1.logIn(); // Bob has logged in. Bob has admin privileges as a Super Admin.

// 4) Polymorphism: The ability of different classes to be treated as instances of the same class through a common interface.
class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}
class Square extends Shape {
    draw() {
        console.log('Drawing a square');
    }
}
 
const shapes = [new Circle(), new Square()];
 
shapes.forEach(shape => shape.draw());

// 5) Abstraction: The process of hiding the internal details of an object and exposing only the necessary features to the user.
class CoffeMachine {
    #waterTemperature = 90;
    #boilWater() {
        return `Boiling water to ${this.#waterTemperature} degrees.`;
    }
    #grindBeans() {
        return "Grinding beans.";
    }
    brew() {
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grindBeans();
        return `${boilMessage} ${grindMessage} Brewing coffee.`;
    }
}
 
const myCoffeMachine = new CoffeMachine();
console.log(myCoffeMachine.brew());


// Code practice (day 6)
// Flight booking data cleaner
// Used .map() to convert raw strings into objects.
// Used .split() to separate cities and price.
// Used Number() to convert price into number.
// Used isNaN() to validate price.
// Used .filter() to keep prices between 100 and 500.
// Used .sort() for ascending order.
// Used JSON.stringify() to convert final array into JSON string.

// E-commerce discount applicator
// Used callback function (isEligible) to check discount eligibility.
// Used .map() to transform cart items.
// Applied 10% discount using arithmetic operators.
// Added new property isDiscounted.
// Used Template Literal for summary message.
// Used setTimeout() to delay output by 1000ms.

// Movie stream analytics
// Used .map() to convert raw movie strings into objects.
// Used .split() to separate name, genre, and views.
// Used Number() and isNaN() for validation.
// Used .filter() to keep Action/Sci-Fi movies with more than 5000 views.
// Used .sort() for descending order.
// Used JSON.stringify() for final JSON output.

// automated payroll processor
// Used callback function (taxLogic) for tax calculation.
// Used .map() to process employee data.
// Calculated tax and net salary using arithmetic operations.
// Used condition statements (if/else) to assign status.
// Used Template Literal for payroll summary.
// Used setTimeout() to delay output by 2000ms.


// Prototype inheritance
// It is a mechanism by which objects can inherit properties and methods from other objects. 
// In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from.
// When you create a new object using a constructor function, the new object inherits properties and methods from the constructor's prototype. 
// This allows you to define shared behavior for all instances of a constructor function without having to duplicate code for each instance.
function person(name) {
    this.name = name;
}
person.prototype.sayHi = function() {
    console.log('hello ' + this.name);
}
const me = new person("Hrithicka");
const you = new person("you");
me.sayHi();
you.sayHi();
console.log(Object.getPrototypeOf(me) === person.prototype); // true
console.log(me.sayHi === you.sayHi); // true


// Callback function
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// give different  simple examples
function greetUser(name, callback) {
    console.log('Hello ' + name);
    callback();
}
function sayGoodbye() {
    console.log('Goodbye!');
}
greetUser('Hrithicka', sayGoodbye);


// stack and heap
// Stack is a data structure that follows the Last In First Out (LIFO) principle. 
// Heap is a memory area used for dynamic memory allocation where variables are stored as objects.
// Primitive types (like numbers and strings) are stored in the stack, while objects and arrays are stored in the heap.
let age = 22; // number --> Stack
let name = "Hrithicka"; // string --> Stack
let user = { // object --> Heap
    name: "Hrithicka",
    age: 22
}

// Primitive copy (Stack) 
let x = 5;
let y = x; // copy of value of x is stored in y

// Reference copy (Heap)
let obj1 = { name: "Hrithicka" }; // heap
let obj2 = obj1;
obj2.name = "aarthi";
console.log(obj1.name); // obj1 and obj2 are referencing the same object in heap, so change in obj2 reflects in obj1


// spread operator
// The spread operator (...) allows you to expand an iterable (like an array or object) into individual elements. It is commonly used for copying arrays or objects, merging arrays, and passing elements as function arguments.
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // creates a new array with the same elements as arr1
console.log(arr2); // [1, 2, 3]

let obj1 = { name: "Hrithicka", age: 22 };
let obj2 = { ...obj1 }; // creates a new object with the same properties as obj1
console.log(obj2); // { name: "Hrithicka", age: 22 }

// hoisting
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. 
// This means that you can use variables and functions before they are declared in the code. 
// However, only the declarations are hoisted, not the initializations. 
// For example, if you declare a variable using var, it will be hoisted and initialized with undefined, while let and const declarations are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration.
console.log(greet); // undefined due to hoisting of var
var greet = "Hello, World!";
console.log(greet); // "Hello, World!"

// function hoisting
// Function declarations are hoisted, meaning you can call the function before its declaration in the code.
sayHi(); // "Hello, World!"
function sayHi() {
    console.log('Hello, World!');
}

// arrow function hoisting
// Arrow functions are not hoisted in the same way as function declarations. If you try to call an arrow function before it is defined, you will get a ReferenceError because the variable that holds the arrow function is not initialized until the code execution reaches that line.
sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization
var sayHi = () => {
    console.log('Hello');
}

// Object creation and manipulation
// In JavaScript, you can create objects using object literals, constructor functions, or classes.
// Object literals
const car = {
        brand: "Tesla",
        start: () => console.log("VroomVroom")
    }
// Constructor function
function start() {
    console.log("VroomVroom")
}
const c1 = new start();
const c2 = new start();
start.prototype.stop = function() {
    console.log("Stop");
}

// car {start} --> prototype {stop}
// c1 --> start
// c2 --> start
// c1.stop(); // Stop

// Prototype chaining
// Prototype chaining is a mechanism in JavaScript where objects can inherit properties and methods from other objects through a chain of prototypes. 
// When you access a property or method on an object, JavaScript first looks for it on the object itself. 
// If it doesn't find it there, it looks for it on the object's prototype, and if it's not found there, it continues up the prototype chain until it either finds the property/method or reaches the end of the chain (null).
const animal = { eats: true };
const rabbit = Object.create(animal); // creates a new object rabbit with prototype animal
rabbit.carrot = () => console.log("He is eating carrot");
console.log(rabbit.eats); // inherited from animal
console.log(rabbit.hasOwnProperty('eats')); // false, because eats is inherited from animal
console.log(rabbit.hasOwnProperty('carrot')); // true, because carrot is a property of rabbit
console.log(rabbit.toString()); // toString is inherited from Object.prototype

// array methods
// sort() method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings in ascending order. 
// reverse() method reverses the order of the elements in an array in place and returns the reversed array.
const arr = [1, 2, 3, -1];
arr.sort(); // sorts the array in ascending order (as strings)
console.log(arr); // [-1, 1, 2, 3]

arr.reverse(); // reverses the order of the elements
console.log(arr); // [3, 2, 1, -1]

// closure function
// It is a function that "remembers" the environment in which it was created.
// It allows an inner function to access variables from an outer function's scope even after the outer function has finished executing.
let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);


// Advance JS concepts
// Parameters are variables used inside function.
// They receive values when function is called.
function greet(name){
   console.log(`Hello ${name}`);
}
greet("Hrithicka");

// Default paramter
// If user does not pass value, default value will be used.
function welcome(name = "Guest"){
   console.log(`Welcome ${name}!`);
}
welcome("Hrithicka"); // Welcome Hrithicka!
welcome(); // Welcome Guest!

// spraed operator (...)
// It expands values one by one, mostly used in arrays and objects.
const nums = [1,2,3];
const newNums = [...nums,4,5]; // old array values copied + new values added
console.log(newNums);

// Output:
// [1,2,3,4,5]

// spread operator with object copies old object values into new object.
const obj = {
   name:"Hrithicka"
};
const updatedObj = {
   ...obj,
   age:22
};
console.log(updatedObj);

// Output:
// {name:"Hrithicka", age:22}

// Rest parameter (...)
// rest collects multiple values into single array and used mostly in functions.
const cal = {
   sum:(...nums) => nums.reduce((a,b) => a+b,0)
};

console.log(cal.sum(1,2,3,4));

// Output:
// 10
// here ...nums collects all numbers into array.

// destructuring
// It means taking values from array/object and storing directly into variables.
// Normal way
const arr = ["Hrithicka","Agnes","Akshayaa"];
const first = arr[0];
const second = arr[1];
console.log(first);

// array destructuring
// values taken based on positions.
const [one,two,three] = [10,20,30];

console.log(one); // 10
console.log(two); // 20
console.log(three); // 30

// Rest with destructuring
// remaining values stored into array.
const [a,b,...c] = [1,2,3,4,5];

console.log(a); // 1
console.log(b); // 2
console.log(c); // [3,4,5]

// Object destructuring
// values taken based on key names.
const person = {
   name:"Hrithicka",
   age:22
};
const {name, age} = person;

console.log(name); // Hrithicka
console.log(age); // 22

// Key difference

// Array destructuring = position based
// Object destructuring = key based


// Astronaut Data Fetching Using API and Axios

// HTML basics were used to create the webpage structure with button, text, and list elements.
// JavaScript functions and async-await were used to fetch astronaut data from an API asynchronously without stopping program execution.
// Axios dependency was used to send API requests and receive JSON data easily from the server.
// await axios.get() is used inside an async function to wait until the API data is received.
// axios.get() sends request to API
// await pauses the function until response comes
// async allows use of await
// CDN → external online library link
// response.data → actual API data
// package.json → stores project dependencies
// .gitignore → ignores unnecessary files from GitHub upload
// DOM manipulation was used to dynamically display astronaut names and total count inside the webpage.
// Event handling using onclick was used to run the function when the user clicks the button.
// Array methods, arrow functions, and template literals were used to extract data, simplify functions, and display dynamic content neatly.