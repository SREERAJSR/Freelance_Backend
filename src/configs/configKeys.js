const dotenv = require('dotenv')

dotenv.config();

function configKey() {
    return {
        PORT: process.env.PORT,
        MONGO_URL: process.env.MONGO_URL,
        DB_NAME: process.env.DB_NAME,
        EXPRESS_SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET
    }
}

return configKey;