const readline = require('readline');

const read_line = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

read_line.question('', (name) => {
  console.log(`Your name is: ${name}`);
  
  console.log('This important software is now closing');
  
  read_line.close();
});
