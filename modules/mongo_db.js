const mongoose = require('mongoose');
require('dotenv').config();
// connect mongodb
function dbConnect() {
    mongoose.connect(process.env.MONGODB_URL,  {useNewUrlParser: true});

    mongoose.connection.on("error", error => console.log(error))
// Globally permitted here
mongoose.Promise = global.Promise;
}

module.exports = dbConnect();