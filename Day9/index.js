// Advance javascript concepts
// parameters
// default parameter
function welcome(name = "Guest") { // default params
    console.log(`Welcome ${name}!`);
}

welcome("Hrithicka")
welcome("Agnes")
welcome()

// spread operator
const nums = [1, 2, 3, 4, 5]; // spread operator
const newNums = [...nums, 6, 7, 8];
console.log(newNums);

// rest operator and parameter
const obj = {name: "Hrithicka"};
const updatedObj = {...obj, age: 22};
console.log(updatedObj);

const cal = { // rest operator
    sum: (...nums) => nums.reduce((a, b) => a + b, 0), // rest parameters
}

console.log(cal.sum(1, 2, 43, 4))

// destructuring 
// general way
const arr = ["Hrithicka", "Agnes", "Akshayaa", "Navya"];
const first = arr[0];
const second = arr[1];
const third = arr[2];
const fourth = arr[3];

// destructured way (position-based extraction)
const [first, second, third, fourth, fifth] = ["Hrithicka", "Agnes", "Akshayaa", "Navya"]; // pos-based extraction
const [one, two, ...three] = [1, 3, 5, 6, 7];
console.log(first, second, third, fourth, fifth);
console.log(one, two, three)

// (key-based extraction)
const { name, age } = {name: "Hrithicka", age: 22}; // key-based extraction
console.log(name, age);