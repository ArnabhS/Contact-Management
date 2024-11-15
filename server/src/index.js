const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

const app = express();

dotenv.config();

connectDB();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
  }));

app.use(express.json());





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));