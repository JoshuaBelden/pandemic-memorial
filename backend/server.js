const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const config = require('config');

const app = express();


// MIDDLEWARE

app.use(express.json({ extended: false }));
app.options('*', cors());
app.use(cors());

// ROUTES

app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/articles', require('./routes/api/article'));

connectDB();

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} in ${config.get('environment')} environment`));
