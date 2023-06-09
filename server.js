const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api/contacts', require('./routes/contactsRoutes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

