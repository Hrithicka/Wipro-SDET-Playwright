// Fetching API with public API (Today's task)
// 1) Cat Facts
fetch("https://catfact.ninja/facts")
  .then(res => res.json())
  .then(data => data.data)
  .then(arr => arr.filter(f => f.length > 50))
  .then(arr => arr.map(f => f.fact))
  .then(data => console.log("Cat Facts:", data))
  .catch(console.error);


// 2) Dog Images
fetch("https://dog.ceo/api/breeds/image/random/10")
  .then(res => res.json())
  .then(data => data.message)
  .then(arr => arr.slice(0, 5))
  .then(arr => arr.map(url => "Dog: " + url))
  .then(data => console.log("Dogs:", data));


// 3) Random Users
fetch("https://randomuser.me/api/?results=10")
  .then(res => res.json())
  .then(data => data.results)
  .then(arr => arr.filter(u => u.gender === "female"))
  .then(arr => arr.map(u => u.email))
  .then(data => console.log("Female Emails:", data));


// 4) Universities
fetch("http://universities.hipolabs.com/search?country=India")
  .then(res => res.json())
  .then(arr => arr.filter(u => u.name.includes("Technology")))
  .then(arr => arr.map(u => u.name))
  .then(data => console.log("Tech Universities:", data));


// 5) Jokes
fetch("https://official-joke-api.appspot.com/jokes/ten")
  .then(res => res.json())
  .then(arr => arr.filter(j => j.type === "programming"))
  .then(arr => arr.map(j => j.setup))
  .then(data => console.log("Programming Jokes:", data));


// 6) Countries (fixed version)
fetch("https://restcountries.com/v3.1/all?fields=name,region")
  .then(res => res.json())
  .then(arr => arr.filter(c => c.region === "Asia"))
  .then(arr => arr.map(c => c.name.common))
  .then(data => console.log("Asian Countries:", data));


// 7) CoinGecko Crypto
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
  .then(res => res.json())
  .then(arr => arr.filter(c => c.current_price > 1000))
  .then(arr => arr.map(c => c.name))
  .then(data => console.log("Expensive Coins:", data));


// 8) Posts (Replacement for Bitcoin API)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(arr => arr.filter(p => p.id <= 5))
  .then(arr => arr.map(p => p.title))
  .then(data => console.log("Top Posts:", data))
  .catch(console.error);


  // 9) Quotes
fetch("https://zenquotes.io/api/quotes")
  .then(res => res.json())
  .then(arr => arr.filter(q => q.q.length < 80))
  .then(arr => arr.map(q => q.q))
  .then(data => console.log("Short Quotes:", data))
  .catch(console.error);


  // 10) Space People
fetch("http://api.open-notify.org/astros.json")
  .then(res => res.json())
  .then(obj => obj.people)
  .then(arr => arr.filter(p => p.craft === "ISS"))
  .then(arr => arr.map(p => p.name))
  .then(data => console.log("Astronauts:", data))
  .catch(console.error);