// fetching API data using async/await
// 1) cat facts API
async function getCatFacts() {
  try {
    const res = await fetch("https://catfact.ninja/facts");
    const data = await res.json();

    const facts = data.data
      .filter(f => f.length > 50)
      .map(f => f.fact);

    console.log("Cat Facts:", facts);
  } catch (err) {
    console.error(err);
  }
}
getCatFacts();

// 2) dog images API
async function getDogs() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
    const data = await res.json();

    const dogs = data.message
      .slice(0, 5)
      .map(url => "Dog: " + url);

    console.log("Dogs:", dogs);
  } catch (err) {
    console.error(err);
  }
}
getDogs();

// 3) random users API
async function getUsers() {
  try {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const data = await res.json();

    const emails = data.results
      .filter(u => u.gender === "female")
      .map(u => u.email);

    console.log("Female Emails:", emails);
  } catch (err) {
    console.error(err);
  }
}
getUsers();

// 4) universities API
async function getUniversities() {
  try {
    const res = await fetch("http://universities.hipolabs.com/search?country=India");
    const data = await res.json();

    const names = data
      .filter(u => u.name.includes("Technology"))
      .map(u => u.name);

    console.log("Tech Universities:", names);
  } catch (err) {
    console.error(err);
  }
}
getUniversities();

// 5) jokes API
async function getJokes() {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/jokes/ten");
    const data = await res.json();

     const jokes = data.map(j => j.setup);

    console.log("Jokes:", jokes);
  } catch (err) {
    console.error(err);
  }
}
getJokes();

// 6) countries API
async function getCountries() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,region");
    const data = await res.json();

    const countries = data
      .filter(c => c.region === "Asia")
      .map(c => c.name.common);

    console.log("Asian Countries:", countries);
  } catch (err) {
    console.error(err);
  }
}
getCountries();

// 7) CoinGecko API
async function getCrypto() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    const data = await res.json();

    const coins = data
      .filter(c => c.current_price > 1000)
      .map(c => c.name);

    console.log("Expensive Coins:", coins);
  } catch (err) {
    console.error(err);
  }
}
getCrypto();

// 8) posts API
async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const posts = data
      .filter(p => p.id <= 5)
      .map(p => p.title);

    console.log("Top Posts:", posts);
  } catch (err) {
    console.error(err);
  }
}
getPosts();

// 9) quotes API
async function getQuotes() {
  try {
    const res = await fetch("https://zenquotes.io/api/quotes");
    const data = await res.json();

    const quotes = data
      .filter(q => q.q.length < 80)
      .map(q => q.q);

    console.log("Short Quotes:", quotes);
  } catch (err) {
    console.error(err);
  }
}
getQuotes();

// 10) astronauts API
async function getAstronauts() {
  try {
    const res = await fetch("http://api.open-notify.org/astros.json");
    const data = await res.json();

    const names = data.people
      .filter(p => p.craft === "ISS")
      .map(p => p.name);

    console.log("Astronauts:", names);
  } catch (err) {
    console.error(err);
  }
}
getAstronauts();