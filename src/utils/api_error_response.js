class AppError extends Error{
    statusCode;
    errormessage;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.errormessage = message;
        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports = AppError