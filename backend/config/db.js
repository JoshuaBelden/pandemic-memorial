const mongoose = require('mongoose');
const config = require('config');

const uri = config.get('mongoEndpointUri');

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Connection to MongoDB has been established.');
    } catch (err) {
        console.error('Error connecting to mongo.', err.message);

        // If there are errors connecting to Mongo, then shut the entire
        //  api down. There's no sense in limping along.
        process.exit(1);
    }
};

module.exports = connectDB;
