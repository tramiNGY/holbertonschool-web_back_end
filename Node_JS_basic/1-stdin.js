const readline = require('readline');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

readLine.question('', (name) => {
  console.log(`Your name is: ${name}`);

  console.log('This important software is now closing');

  readLine.close();
});
