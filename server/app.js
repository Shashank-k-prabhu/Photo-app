const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const port = 3001;

const app = express();


app.use(express.json());


app.use(cors());
app.use(morgan("dev"));

mongoose.connect('mongodb://localhost:27017/Enquiry_Form', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Enquiry = mongoose.model('Enquiry', {
  name: String,
  phoneNumber: Number,
  message: String,
});


app.get('/', (req, res) => {
  res.send('Server is running and this is the root route.');
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
app.post('/api/enquiries', async (req, res) => {
  try {
    console.log('Received POST request'); 
    const enquiry = new Enquiry(req.body);
    // ...
  } catch (error) {
    console.error('Error:', error);
    // ...
  }
});
