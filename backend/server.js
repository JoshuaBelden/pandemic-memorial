const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Define middleware
app.use(express.json({ extended: false }));
app.options('*', cors());
app.use(cors())

// Define routes
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/articles', require('./routes/api/article'));

// Connect Database
connectDB();

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
