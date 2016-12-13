var path = require('path'),
    config;

config = {
    production: {
        url: 'http://144.168.58.91',
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host     : '0.0.0.0',
                user     : 'ghost',
                password : 'zyj13961077199',
                database : 'ghost',
                charset  : 'utf8'
            },
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: '2368'
        },

        storage: {
            provider: 'local-file-store'
        },

    }
};

module.exports = config;
