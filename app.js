const express = require('express');
const path = require('path');
const app = express();

// Controllers and routes
const controler = require('./controllers/userController');
const user = require('./user');        // ✅ Fixed
const { host } = require('./host');    // ✅ Fixed

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(user);       // Home listing route
app.use(host);       // Hosting form route
app.use(controler.status);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
