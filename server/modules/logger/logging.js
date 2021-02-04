const morgan = require('morgan');

const self = {
    morganLogger: () => {
        const logStream = require('./winston').stream;
        return morgan('tiny', { 'stream': logStream });
    }
};

module.exports = self;
