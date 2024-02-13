const usernameRegex = /^[a-zA-Z0-9_-]{4,9}$/;

// Example usernames to test
const usernames = [
    "john_doe123",
    "alice-123",
    "user",
    "avery_long_username",
    "luther"
];

// Function to test if a username is valid
function isValidUsername(username) {
    return usernameRegex.test(username);
}

// Iterate over each username and test against the regex pattern
usernames.forEach(username => {
    if (isValidUsername(username)) {
        console.log(`${username} is a valid username.`);
    } else {
        console.log(`${username} is not a valid username.`);
    }
});

module.exports = isValidUsername;
