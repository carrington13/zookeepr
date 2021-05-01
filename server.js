const express = require('express');
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

// ---------------------
// Express.js MIDDLEWARE
// ---------------------

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// makes some files readily available and not gated behind a server endpoint
app.use(express.static('public'));



// ALWAYS ON THE BOTTOM
router.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})