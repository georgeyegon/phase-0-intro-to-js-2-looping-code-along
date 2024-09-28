// Code your solutions in this file
// Function to create thank you messages
function writeCards(names, event) {
    const messages = []; // Create an empty array for messages
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages; // Return the array of messages
}

// Function to count down from a given number
function countDown(num) {
    while (num >= 0) {
        console.log(num); // Log the current number
        num--; // Decrement the number
    }
}

// Exporting functions if you're using a module system (like Node.js)
module.exports = { writeCards, countDown };
