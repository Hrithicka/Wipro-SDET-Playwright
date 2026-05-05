// Fetching API with public API
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
fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(data => data.filter(c => c.population > 100000000))
  .then(data => data.map(c => c.name.common))
  .then(data => console.log("Countries:", data));


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