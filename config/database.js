// module.exports = ({ env }) => ({
//     defaultConnection: 'default',
//     connections: {
//         default: {
//             connector: 'bookshelf',
//             settings: {
//                 client: 'postgres',
//                 host: env('DATABASE_HOST', 'localhost'),
//                 port: env.int('DATABASE_PORT', 5432),
//                 database: env('DATABASE_NAME', 'strapiapi'),
//                 username: env('DATABASE_USERNAME', 'postgres'),
//                 password: env('DATABASE_PASSWORD', 'chukwumc'),
//                 schema: env('DATABASE_SCHEMA', 'public'), // Not Required
//                 ssl: {
//                     rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//                 },
//                 ssl: env('DATABASE_SSL', false)
//             },
//             options: {},
//         },
//     },
// });


module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'mongoose',
            settings: {
                host: env('DATABASE_HOST', ),
                srv: env.bool('DATABASE_SRV', true),
                port: env.int('DATABASE_PORT', 27017),
                database: env('DATABASE_NAME', ),
                username: env('DATABASE_USERNAME', ),
                password: env('DATABASE_PASSWORD', ),
            },
            options: {
                authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
                ssl: env.bool('DATABASE_SSL', true),
            },
        },
    },
})