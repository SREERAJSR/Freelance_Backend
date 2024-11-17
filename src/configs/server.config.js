
const configKeys = require('./configKeys')
const PORT = configKeys().PORT;
const serverConfig = async (httpServer) => {
    httpServer.listen(PORT, () => {
        console.log(`Server is connected ${PORT}`)
    })
}

module.exports = serverConfig