const express = require('express');
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const configsKeys = require('./configKeys')

const expressConfig = async (app) => {
    
    app.use(morgan('dev')),
        app.use(cookieParser()),
        app.use(express.json()),
        app.use(express.urlencoded({ extended: true })),
        app.use(session({
            secret: configsKeys().EXPRESS_SESSION_SECRET,
            resave: false,
            saveUninitialized:false
        }))
}

module.exports = expressConfig;