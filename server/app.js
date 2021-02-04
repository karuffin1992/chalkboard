// Require application configuration module
const appConfig = require('./modules/config');

// Get logger instance
const logger = appConfig.getLogger();

// Get default configs
const config = appConfig.getConfig();

// Get configured express instance
const app = appConfig.configureExpress(config, logger);

// Get config object containing host, port, and appUrl
const serverConfig = appConfig.getServerConfig(config, logger);

// Create the server
const server = appConfig.createServer(serverConfig, app, config, logger);

// Start the server
server.listen(serverConfig.port, '0.0.0.0', () => {
    const serverAddress = server.address();
    logger.info(`Express server listening on ${serverAddress.address}:${serverAddress.port}`);
});
