// setTimeout function
setTimeout(() => {
    console.log("Hello World");
}, 1000);

// setInterval function
setInterval(() => {
    console.log("Hello again");
}, 2000);

// Promises object
const myDataPromise = new Promise((resolve, reject) => {
    console.log("Request initiated...");
    setTimeout(() => {
        const isSuccess = true; 
        if (isSuccess) {
            resolve("Success: Data received! 🚀");
        } else {
            reject("Error: Connection timed out. 🔌");
        }
    }, 2000); // 2-second delay
});

// Use .then() to handle success and .catch() to handle errors
myDataPromise
    .then((message) => {
        // Runs if resolve() was called
        console.log(message); 
    })
    .catch((error) => {
        // Runs if reject() was called
        console.error(error); 
    });
    