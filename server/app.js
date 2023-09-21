const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./models/dataschema.js');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/reactdata', { useNewUrlParser: true });

app.post('/insert', async (req, res) => {
    const { name, phoneNumber, message } = req.body;

    const formData = new User({
        name: name,
        phoneNumber: phoneNumber,
        message: message
    });

    try {
        await formData.save();
        res.send("Inserted data successfully.");
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while inserting data.");
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
