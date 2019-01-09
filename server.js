const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes');

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
);

const PORT = 4000;

const app = express();
app.use(bodyParser.json({ useNewUrlParser: true }));
app.use(router);

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));