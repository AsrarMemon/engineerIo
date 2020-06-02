const mongoose = require('mongoose')
const config = require('../config');

const connectDb = async  () => {
   await mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true})    
}

module.exports = connectDb;