const appRoutes = require("../routes/routes")


const routesConfig = async (app) => {
    app.use('/api/admin',appRoutes())
}

module.exports = routesConfig