require('dotenv').config();

const mongoose = require('mongoose');

const DATABASE_HOST = process.env.DATABASE_HOST;

mongoose.connect(`mongodb://${DATABASE_HOST}:27017/livro`, { useNewUrlParser: true });

module.exports = mongoose.connection;