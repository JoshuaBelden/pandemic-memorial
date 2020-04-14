const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const config = require('config');
const https = require('https');
const fs = require('fs');

const app = express();

// HANDLE CORS
app.use(express.json({ extended: false }));
app.options('*', cors());
app.use(cors());

// HANDLE HSTS
app.use(require('helmet')());

// ALLOW STATIC CONTENT
app.use(express.static('static'));

// ROUTES
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/article', require('./routes/api/article'));

connectDB();

const environment = config.get('environment');
if (environment == 'production') {
    app.listen(80, () => console.log(`Server running in ${environment} environment on port 80.`));
    try {
        const options = {
            cert: fs.readFileSync('./sslcert/fullchain.pem'),
            key: fs.readFileSync('./sslcert/privkey.pem')
        };
        https.createServer(options, app).listen(443);
        console.log('Https listening on port 443.')
    } catch(err) {
        console.log('Error launching secure server. Continuing with http.', err.message);
    }
} else {
    app.listen(7000, () => console.log(`Server running in ${environment} environment on port 7000.`));
}
