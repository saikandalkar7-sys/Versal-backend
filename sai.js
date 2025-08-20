const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const HOST = '127.0.0.1'; // bind explicitly to localhost
app.get('/',(req,res)=>{
res.send('hellow');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
