const mongoose = require('mongoose')

const configKeys = require('./configKeys')

const MONGO_URL = configKeys().MONGO_URL;
const DB_NAME = configKeys().DB_NAME;

const databaseConfig = async () => {
    try {
        await mongoose.connect(MONGO_URL, { dbName: DB_NAME })
        console.log('db connected')
    } catch (error) {
        if (error) console.log('Database connection error', error);
        process.exit(1)
    }
}

module.exports= databaseConfig;