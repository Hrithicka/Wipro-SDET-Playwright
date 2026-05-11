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
console.log(username, result);

// Function parameter typing was used to restrict input values to numbers.
// Function return typing was used to ensure the function returns a string value.

function add(a: number, b: number): string {  // : string should return a string 
    return "Sum: " + (a + b);
}
console.log(add(5, 10));


// Interface 
// It is used to define the structure of an object.
// It tells what properties and datatypes an object should contain.
interface Person {
   id: number;
   name: string;
}

const person1: Person = {
   id: 1,
   name: "Hrithicka"
};

console.log(user);

// Interface Merging
// Same interface name can be reused to add extra properties.
interface Person {
   id: number;
}
interface Person {
   name: string;
}

const person2: Person = {
   id: 1,
   name: "Hrithicka"
};

console.log(user);

// Enum
// It is used to store fixed constant values.
// Mostly used for roles, status, categories etc.
enum Role {
   User = "USER",
   Admin = "ADMIN"
}

console.log(Role.User);

// Optional property (?)
// Optional property is not compulsory inside object.
interface AdminUser {
    name: string;
    isAdmin?: boolean;
}

const adminUser: AdminUser = {   
    name: "Hrithicka"
};

console.log(user);

// Tuple
// It stores fixed datatype values in fixed order.
let coordinates: [number, string] = [40.7128, "-74.0060"];
console.log(coordinates);

// Array Typing
// This restricts array values datatype.
let array: number[] = [1, 2, 3];
console.log(array);

// Generics
// It create reusable functions for different datatypes.
function identity<T>(value: T): T {
   return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));

// Generic Class
// Generic class works with multiple datatypes.
class DataStorage<T> {
   private items: T[] = [];

   // addItems()
   // Adds value into array.
   addItems(item: T): void {
      this.items.push(item);
   }

   // getItem()
   // Gets value using index.
   getItem(index: number): T {
      return this.items[index]!;
   }
}

// Using Generic Class
const names = new DataStorage<string>();
names.addItems("Hrithicka");
console.log(names.getItem(0));

// Object Typing
// Object must follow interface structure and datatype rules.
interface Student {
   id: number;
   name: string;
}

const student: Student = {
   id: 1,
   name: "Rohan"
};

console.log(student);


