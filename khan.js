const express = require('express');                    const path = require('path');
const app = express();
app.get('/',(req,res)=>{
res.send('sai');
});
const PORT = 3000;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
