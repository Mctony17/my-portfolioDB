module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'mongoose',
            settings: {
                host: env('DATABASE_HOST', 'cluster1.9vjt4.mongodb.net'),
                srv: env.bool('DATABASE_SRV', true),
                port: env.int('DATABASE_PORT', 27017),
                database: env('DATABASE_NAME', 'portfolio'),
                username: env('DATABASE_USERNAME', 'Matthew'),
                password: env('DATABASE_PASSWORD', 'chukwumc'),
            },
            options: {
                authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
                ssl: env.bool('DATABASE_SSL', true),
            },
        },
    },
})