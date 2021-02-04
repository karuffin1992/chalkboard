const express = require('express'),
    http = require('http'),
    path = require('path'),
    helmet = require('helmet'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    fs = require('fs'),
    { notFound, errorHandler } = require('./errors/errors'),
    logger = require('./logger/winston').get('app'),
    morgan = require('./logger/logging'),
    baseRoute = require('./routes/baseRoute');

const self = {
    getLogger: () => {
        return require('./logger/winston').get('app');
    },
    getConfig: () => {
        return require('../data_providers');
    },
    configureExpress: () => {
        // Initializing Express app
        const app = express();

        // Middleware setup
        app.use(bodyParser.urlencoded( { extended: false }));
        app.use(bodyParser.json());

        app.use(cors());

        app.use(helmet());

        app.use(morgan.morganLogger());

        app.use(cookieParser());

        // Routes
        app.use('/', baseRoute.router);

        // Error handler
        app.use(notFound);
        app.use(errorHandler);

        return app;
    },
    getServerConfig: (config, logger) => {
        // App params
        const host = process.env.APP_HOST ? process.env.APP_HOST : config.get('APP_HOST'),
            port = process.env.APP_PORT ? process.env.APP_PORT : config.get('APP_PORT');

        logger.info(`Application running on node version: ${process.version}`);
        logger.info(`Application host and port: ${host}:${port}`);

        return {
            'host': host,
            'port': port
        };
    },
    createServer: (serverConfig, app, config, logger) => {
        let server;

        http.globalAgent.maxSockets = 100;

        logger.info('Creating HTTP server');
        server = http.createServer(app);

        return server;
    }
};

module.exports = self;
