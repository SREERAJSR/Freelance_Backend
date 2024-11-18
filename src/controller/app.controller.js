const reviewLinkDb = require('../models/review_link.model');
const asyncHandler = require("express-async-handler");
const AppError = require('../utils/api_error_response');
const HttpStatus = require('../utils/httpStatusCodes')
const Apiresponse = require('../utils/api_response') 
module.exports = {
    saveBusinessInfo: asyncHandler(async (req, res, next) => {
        const { businessName, reviewLink } = req.body;

        if (!businessName || !reviewLink) {
   throw new AppError('Invalid inputs please fill 2 fields and submit',HttpStatus.BAD_REQUEST)
        } else {
            const businessInfo = new reviewLinkDb({
                bussinessName: businessName,
                 reviewLink:reviewLink
            })

       const addedInfo =await businessInfo.save()
            res.status(HttpStatus.OK).json(new Apiresponse(HttpStatus.OK,addedInfo,'business info added success'))
        }

    }) 
}




