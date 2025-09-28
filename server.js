const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Error connecting to the database', err));

app.get('/', (req, res) => {
  res.send('API de Gestion des Ventes');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});