const {SHA256} = require('crypto-js');

let message = "I'm number 3";
let hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

let data = {
  id: 4
};

// Sent to client
let token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesalt').toString()
};

// Man in the middle
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data.id) + 'somesalt').toString();

let resultHash = SHA256(JSON.stringify(token.data) + 'somesalt').toString();
if (resultHash === token.hash) {
    console.log("Data not changed.");
} else {
    console.log("Data was changed. Do not trust");
}