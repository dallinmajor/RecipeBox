const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://dallinmajor:Pin4Dallin@ds151382.mlab.com:51382/mytestbd",
    { useNewUrlParser: true }
);

const PORT = 4000;

const app = express();
app.use(bodyParser.json({ useNewUrlParser: true }));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));