// JavaScript functionality for the website

// Function to display current date and time
function displayDateTime() {
    const now = new Date();
    const formattedDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
    console.log('Current Date and Time (UTC): ' + formattedDateTime);
}

displayDateTime();