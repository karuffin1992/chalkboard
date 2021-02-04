const winston = require('winston'),
    mkdirp = require('mkdirp');

// Winston config
const loggingConfig = {
    'silent': false,
    'level': 'debug',
    'dir': './.tmp/logs',
    'categories': {
        'app': ['Console', 'File'],
        'api': ['Console', 'File'],
        'papertrail': ['Console']
    }
};

// Creating .tmp folder
mkdirp.sync(loggingConfig.dir);

// Creating winston container to hold logs
const container = new winston.Container({
    silent: loggingConfig.silent
});

// Basic console logger for Morgan
container.add('morgan', {
    transports: [
        new winston.transports.Console({
            level: 'info',
            timestamp: true,
            colorize: true,
            label: 'Morgan'
        })
    ]
});

const categories = loggingConfig.categories;

for (const category in categories) {
    const loggerTransports = [];

    for (const index in categories[category]) {
        const transport = categories[category][index];

        if (transport === 'Console') {
            loggerTransports.push(new winston.transports.Console({
                level: loggingConfig.level,
                timestamp: true,
                colorize: true,
                label: category + '.js'
            }));
        } else if (transport === 'File') {
            loggerTransports.push(new winston.transports.File({
                level: loggingConfig.level,
                timestamp: true,
                dirname: loggingConfig.dir,
                filename: category + '.log'
            }));
        }
    }

    container.add(category, { transports: loggerTransports });
}

module.exports = container;

// Stream for morgan to use
module.exports.stream = {
    write: function (message) {
        const mLogger = container.get('morgan');
        // Morgan likes to add a line break, so let's get rid of it
        mLogger.info(message.slice(0, -1));
    }
};
