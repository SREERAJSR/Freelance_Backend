const mongoose = require('mongoose');


const reviewLink = new mongoose.Schema({

    reviewLink: {
        type: String,
        required:true
    },
    bussinessName: {
        type: String,
        required:true
    }

})

const review_link = mongoose.model('reviewLink', reviewLink)

module.exports = review_link    