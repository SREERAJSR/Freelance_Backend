const reviewLinkDb = require('../models/review_link.model');
const asyncHandler = require("express-async-handler");
const AppError = require('../utils/api_error_response');
const HttpStatus = require('../utils/httpStatusCodes')
const Apiresponse = require('../utils/api_response')
const configKeys = require('../configs/configKeys'); 
const { default: mongoose } = require('mongoose');
const accountSid = configKeys().TWILIO_ACCOUNT_SID
const authToken = configKeys().TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid,authToken)


module.exports = {
    saveBusinessInfo: asyncHandler(async (req, res, next) => {
        const { businessName, reviewLink } = req.body;

        if (!businessName || !reviewLink) {
            throw new AppError('Invalid inputs please fill 2 fields and submit', HttpStatus.BAD_REQUEST)
        } else {
            const businessInfo = new reviewLinkDb({
                bussinessName: businessName,
                reviewLink: reviewLink
            })

            const addedInfo = await businessInfo.save()
            res.status(HttpStatus.OK).json(new Apiresponse(HttpStatus.OK, addedInfo, 'business info added success'))
        }

    }),

    sendWhatsAppLink: asyncHandler(async (req, res, next) => {
        const { numbers, businessName_id } = req.body;

        // Fetch business info
        const businessInfo = await reviewLinkDb.findById(new mongoose.Types.ObjectId(businessName_id));
        if (!businessInfo) {
            throw new AppError("Applied business is not registered", HttpStatus.BAD_REQUEST);
        }

        const review_link = businessInfo.reviewLink;

        // Format numbers to ensure they start with +91
        const formattedNumbers = numbers.map((number) => {
            const numStr = String(number).trim();
            return numStr.startsWith('+91') ? numStr : `+91${numStr}`;
        });

        const failedMessages = [];

        // Send messages concurrently
        await Promise.all(
            formattedNumbers.map(async (number) => {
                try {
                    const message = await client.messages.create({
                        from: 'whatsapp:+14155238886',
                        body: `${review_link}`,
                        to: `whatsapp:${number}`,
                    });
                    console.log(message)
                    console.log(`Message sent to ${number}: SID ${message.sid}`);
                } catch (error) {
                    console.error(`Failed to send message to ${number}:`, error.message);
                    failedMessages.push({ number, error: error.message });
                }
            })
        );

        // Construct response
        if (failedMessages.length > 0) {
            return res.status(HttpStatus.PARTIAL_CONTENT).json(
                new Apiresponse(HttpStatus.PARTIAL_CONTENT, { failedMessages }, "Some messages failed to send")
            );
        }

        return res.status(HttpStatus.OK).json(
            new Apiresponse(HttpStatus.OK, {}, "All messages sent successfully")
        );
    })

}