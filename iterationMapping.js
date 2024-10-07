// Prompt the user to input the Max Limit of the Loops
const prompt = require('prompt-sync')();
const maxLimit = parseInt(prompt('Enter the Limit of the Double Loop: '));

// Initialize all counters to zero
let counter1 = 0;
let counter2 = 0;

let addedValue = 0;
// Loop through the iterations
for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j <= maxLimit; j++) {
        // Calculate the added value
            addedValue = i + j;
        // Log the loop points and added value
        console.log(`[${i}] [${j}] Added value is ${addedValue}`);
    }
}