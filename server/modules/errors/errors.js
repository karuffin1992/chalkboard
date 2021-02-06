const logger = require('../logger/winston').get('app');

const self = {
    notFound: (req, res, next) => {
        const err = new Error(`Not Found ${req.originalUrl}`);
        res.status(404);
        next(err);
    },
    errorHandler: (error, req, res, next) => {
        res.status(res.statusCode || 500);
        res.json({
            message: error.message,
            error: process.env.NODE_ENV === 'production' ? {} : error.stack
        });
        logger.error(error.message);
    }
}

module.exports = self;
