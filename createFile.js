const fs = require('fs');

fs.writeFile('myfile.txt', 'This is content from Node.js in Termux.', (err) => {
  if (err) throw err;
  console.log('File created successfully!');
});
