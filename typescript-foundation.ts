// TypeScript

// TypeScript is an advanced version of JavaScript developed by Microsoft that adds datatype checking and improves code safety.
// It is a superset of javascript.
// semicolon is must in typescript.

// Variable typing was used to define specific datatypes like string and number.
let userage: number = 22;
let username: string = "Hrithicka";

// Union types (|) (or) were used to allow multiple datatypes in a single variable.
let result: number | string;
result = 45;
result = "success";
console.log(name, result);

// Function parameter typing was used to restrict input values to numbers.
// Function return typing was used to ensure the function returns a string value.

function add(a: number, b: number): string {  // : string should return a string 
    return "Sum: " + (a + b);
}
console.log(add(5, 10));


