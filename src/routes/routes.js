const { Router } = require("express");
const {saveBusinessInfo} = require('../controller/app.controller')


const appRoutes = () => {
    const router = Router();

    router.post('/save_business_info', saveBusinessInfo)
    
    return router;
}

module.exports = appRoutes;