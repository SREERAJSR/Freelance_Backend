const { Router } = require("express");
const { saveBusinessInfo, sendWhatsAppLink } = require('../controller/app.controller')


const appRoutes = () => {
    const router = Router();

    router.post('/save_business_info', saveBusinessInfo)
    router.post('/sendWhatsappLink', sendWhatsAppLink)
    return router;
}

module.exports = appRoutes;