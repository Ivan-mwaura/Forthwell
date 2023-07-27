const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path'); // Import the 'path' module
require('dotenv').config();
require('express-async-errors');

const mainRoutes = require('./routes/main');
const adminRoutes = require('./routes/adminRoutes');
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middlewares/error-handler');

app.use(express.json());
app.use(cors());
app.use(errorHandlerMiddleware);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/homepage.html'));
});

app.use(express.static(path.resolve(__dirname, './client'))); // Use path.resolve

app.use('/api/v1', mainRoutes);
app.use('/api/v1', adminRoutes);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is listening on port ${port}`));
  } catch (error) {
    // Handle any potential errors here
  }
};

start();
