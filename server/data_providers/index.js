const convict = require('convict'),
    fs = require('fs');

const conf = convict({
    env: {
        doc: 'The application execution environment',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
    },
    APP_HOST: {
        doc: 'Host URL for app',
        format: '*',
        default: 'localhost',
        env: 'APP_HOST'
    },
    APP_PORT: {
        doc: 'Port number for app',
        format: 'port',
        default: 5000,
        env: 'APP_PORT'
    }
});

module.exports = conf;
