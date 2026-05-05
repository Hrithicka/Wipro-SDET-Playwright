// Asynchronous JavaScript
// setTimeout function
setTimeout(() => {
    console.log("Data received");
}, 5000);
console.log("test");

// setInterval function
setInterval(() => {
    console.log("Checking for new data...");
}, 3000);

// Promises object
    function getData() {
    return new Promise((resolve, reject) => {
        if(2 > 3) {
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject('not working')
        }
    });
}

// Use .then() to handle success and .catch() to handle errors
getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error:", error);
});

// Fetch API 
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json()) // res -> string -> json)
    .then(data => data.filter(d => d.id % 2 === 0))
    .then(data => data.map(d => (d.title = "Hrithicka " + d.title)))
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));
 

// Fetching API with public API (Today's task)
// 1) Users API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => data.filter(u => u.id <= 5))
  .then(data => data.map(u => u.name))
  .then(data => console.log("Users:", data))
  .catch(err => console.error("Error:", err));

// 2) Posts API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => data.filter(p => p.userId === 1))
  .then(data => data.map(p => p.title))
  .then(data => console.log("Posts:", data));

// 3) Products API
fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => data.products)
  .then(data => data.filter(p => p.price > 100))
  .then(data => data.map(p => p.title))
  .then(data => console.log("Products:", data));

// 4) Countries API
fetch("https://restcountries.com/v3.1/all?fields=name,population")
  .then(res => res.json())
  .then(data => data.filter(c => c.population > 10000000))
  .then(data => data.map(c => c.name.common))
  .then(data => console.log("Countries:", data))
  .catch(err => console.log("Error:", err));

// 5) Random Users API
fetch("https://randomuser.me/api/?results=10")
  .then(res => res.json())
  .then(data => data.results)
  .then(data => data.filter(u => u.gender === "female"))
  .then(data => data.map(u => u.name.first))
  .then(data => console.log("Female Names:", data));

// 6) Todos API
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => data.filter(t => t.completed === true))
  .then(data => data.map(t => t.title))
  .then(data => console.log("Completed Todos:", data));

