module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'db-mysql-nyc3-20567-do-user-9145780-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', 25060),
        database: env('DATABASE_NAME', 'defaultdb'),
        username: env('DATABASE_USERNAME', 'doadmin'),
        password: env('DATABASE_PASSWORD', 'mksxvaj71kvu9ib9'),
      },
      options: {},
    },
  },
});
