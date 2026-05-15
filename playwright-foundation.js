//Playwright 
// Playwright is an automation testing framework used for : Web testing, UI testing. Browser automation
// It supports : Chromium, Firefox, WebKit
// It uses languages like : JavaScript, TypeScript, Python, Java

// Important commands
// Initialization of Playwright : npm init playwright@latest
// Run all Tests : npx playwright test
// Run Specific Test File : npx playwright test techx.spec.js
//.spec.js indicates that the file is a test specification file.

// Basic Playwright Test Structure
// 1. Importing Playwright Functions 
// import { test, expect } from "@playwright/test";
// test → Used to create test cases
// expect → Used for validations/assertions

// 2. Creating Test Case
// test('check title', async ({ page }) => {
// });
// 'check title' → Test name
// async → Allows asynchronous operations
// page → Browser page object

// 3. Opening Website
// await page.goto("https://www.techxincorporation.com/");
// Opens the given URL in browser

// 4. Locator
// const consultBtn = page.getByRole("link", { name: /Request/ }).nth(1);
// getByRole() → Finds element by role
// "link" → HTML link element
// { name: /Request/ } → Matches text using regex
// .nth(1) → Selects second matching element

// 5. Click Action
// await consultBtn.click();
// Clicks the selected button/link

// 6. Assertion / Validation
// expect(page.url()).toBe("https://www.techxincorporation.com/contact");
// Checks whether current URL matches expected URL

// full code 
// import { test, expect } from "@playwright/test";

// test('check title', async ({ page }) => {
    // await page.goto("https://www.techxincorporation.com/");

    // const texhXHeading = page.locator('//*[@id="root"]/header/div/a[1]/span[1]');
    // console.log(texhXHeading);

    // const exporeBtn = page.getByRole("link", { name: /Explore/ });
    // await exporeBtn.click();
    // expect(page.url()).toBe("https://www.techxincorporation.com/training");

    // const consultBtn = page.getByRole("link", { name: /Request/ }).nth(1);

    // await consultBtn.click();

    // expect(page.url()).toBe("https://www.techxincorporation.com/contact");

// });


// Created a simple login application using Express.js, HTML, CSS, and JavaScript.
// Implemented routing, static file serving, and environment variables using dotenv.
// Built login validation for username and password in the backend.
// Connected frontend and backend using JavaScript fetch API for form submission.
// Automated login testing using Playwright with multiple test cases and assertions.
// Generated Playwright reports and pushed the Day13 project to GitHub.

// Playwright Login Form Automation using Express.js
// Objective
// Created a login web application using Express.js and automated the login validation process using Playwright.
// Packages Installed
// Inside webapp:
// npm install express
// npm install dotenv
// npm install body-parser
// npm install path

// Backend Setup using Express.js
// Imported required modules:
// express
// path
// dotenv : Used dotenv to read environment variables:
// require('dotenv').config();

// Created Express application:
// const app = express();

// Configured PORT using:
// const PORT = process.env.PORT;

//Enabled middleware:
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// Routes Created
// Home Route
// app.get('/')
// Displays:
// index.html

// Login Route
// app.get('/login')
// Displays:
// login.html

// Login Validation Route
// app.post('/loginwithcreds')
// Validation Conditions:
// 1. Username length must be greater than 3
// 2. Password length must be greater than 5
// 3. Valid credentials:
   // Username: admin123
   // Password: admin123

// Responses Returned:
// Login successful
// Invalid credentials
// Validation error message

// Frontend Implementation

// index.html
// Created simple home page displaying:
// <h1>Home</h1>

// login.html
// Created login form with:
// Username input field
// Password input field
// Login button
// Message display section

// Used JavaScript fetch API to send POST request:
// fetch('/loginwithcreds')

// Handled:
// Success response
// Error response
// Validation response

// Used preventDefault() to stop page reload.

// CSS Styling
// Created login.css to style:
// Username field
// Password field
// Login button
// Form container
// Success/Error messages

// Playwright Automation
// Created automated login testing in:
// tests/example.spec.js

// Used data-driven testing approach.
// Test Data Used:

// 1. tom / tom
// 2. tom123 / tom
// 3. admin123 / admin123
// 4. admin123 / admin12345

// Expected Outputs:
// Validation error
// Login successful
// Invalid credentials

// Playwright Methods Used
// page.goto()
// locator()
// fill()
// click()
// expect()

// Assertion Used
// await expect(msg).toHaveText(data.expected);

// Purpose:
// Checks whether actual message matches expected message.

// Utility Function
// Created reusable helper function in:
// utils.js
// Function Name:
// testLoginForm()

// Purpose:
// Reusable login logic
// Avoid repeated code
// Simplify automation scripts

// Environment Variable
// Created .env file:
// PORT=3000

// Purpose:
// Stores server configuration separately.

// Git Ignore
// Used .gitignore to ignore:
// node_modules/
// .env
// playwright-report/
// test-results/

// Purpose:
// Avoid pushing unnecessary files to GitHub.

// Successfully:
// Created Express.js login application
// Implemented frontend and backend integration
// Performed login validation
// Automated testing using Playwright
// Executed multiple test cases
// Generated Playwright HTML report