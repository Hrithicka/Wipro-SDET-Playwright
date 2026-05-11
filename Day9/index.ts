// Basics of typescript

// let name = "Hrithicka";
// console.log(name);
// output : Hrithicka

let name: string = "Hrithicka";
let result: number | string;
result = 45;
result = "success";
console.log(name, result);
 
function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}
console.log(add(5, 10));
