// Code Practice 
// 1) Flight booking data cleaner
const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];

// parsing and destructuring
const flights = rawFlights.map(flight => {
  const [route, priceValue] = flight.split(":");
  const [from, to] = route.split("-");

// validation and coercion
  let price = Number(priceValue);
  if (isNaN(price)) {
    price = 0;
  }

// Object creation
  return {
    from,
    to,
    price
  };
});

// filtering 
const filteredFlights = flights.filter(flight => {
  return flight.price >= 100 && flight.price <= 500;
});

// sorting
filteredFlights.sort((a, b) => a.price - b.price);

// return
const finalOutput = JSON.stringify(filteredFlights);

console.log(finalOutput);


// 2) E-commerce discount applicator
const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

// The Pipeline
function applyPromo(cart, promoCallback) {
  let discountedCount = 0;
  let totalSavings = 0;

// Transformation
  const updatedCart = cart.map(product => {

    // Use callback to identify eligible items
    if (promoCallback(product)) {
      const discount = product.price * 0.10;
      discountedCount++;
      totalSavings += discount;

      return {
        name: product.name,
        price: product.price - discount,
        category: product.category,
        isDiscounted: true
      };
    }

    return {
      name: product.name,
      price: product.price,
      category: product.category,
      isDiscounted: false
    };
  });

// Final Summary
console.log(
    `Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSavings}.`
);

// Delayed Return
setTimeout(() => {
    console.log(updatedCart);
}, 1000);
}

// The Callback (isEligible)
function isEligible(product) {
  if (!product) {
    return false;
  }
  return (
    product.category === "Electronics" &&
    product.price > 200
  );
}

applyPromo(cart, isEligible);


// 3) Movie stream analytics
const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"
];

// Parsing, Object Creation and Validation
const movies = rawMovies.map(movie => {
  const [name, genre, viewValue] = movie.split("|");

  // Convert views into Number
  let views = Number(viewValue);

  // If views is invalid, set to 0
  if (isNaN(views)) {
    views = 0;
  }
  
  // Return object
  return {
    name,
    genre,
    views
  };
});

// Filtering
const filteredMovies = movies.filter(movie => {
  return (
    (movie.genre === "Action" ||
     movie.genre === "Sci-Fi") &&
     movie.views > 5000
  );
});

// Sorting
filteredMovies.sort((a, b) => {
  return b.views - a.views;
});

// Return Final JSON String
const movieOutput = JSON.stringify(filteredMovies);

console.log(movieOutput);


// 4) Automated payroll processor
const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];

// Callback Function
function taxLogic(employee) {
  if (!employee) {
    return 0;
  }
  if (employee.salary > 5000) {
    return 0.20;
  }
  return 0.10;
}

// calculatePayroll Function
function calculatePayroll(employees, taxCallback) {
  let totalNetPayout = 0;

// Process Each Employee
  const processedEmployees = employees.map(employee => {
    const taxRate = taxCallback(employee);
    const taxAmount = employee.salary * taxRate;

// Calculate net salary
    const netSalary = employee.salary - taxAmount;
    totalNetPayout += netSalary;

    let status;
    if (netSalary > 4000) {
      status = "Premium";
    } else {
      status = "Standard";
    }
    return {
      id: employee.id,
      name: employee.name,
      salary: employee.salary,
      netSalary: netSalary,
      status: status
    };
  });

// Template Literals 
  console.log(
    `Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees.`
  );

// setTimeout 
  setTimeout(() => {
    console.log(processedEmployees);
  }, 2000);
}

calculatePayroll(employees, taxLogic);