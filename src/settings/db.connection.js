const mongoose = require('mongoose');


const connectDB = async(mongoURI) => {
    if (mongoose.connection.readyState === 0) {
        mongoose.connect(mongoURI)
            .then(() => console.log('DB connection successful'))
            .catch((error) => {
                console.log('DB connection error');
                console.log(error);
            });
    }

}

module.exports = { connectDB };