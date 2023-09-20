const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const port = 3001;

const app = express();


app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running and this is the root.');
});

app.post('/api/enquiries', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);

    await enquiry.save();

    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
