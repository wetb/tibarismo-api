module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'adcd0bcb3e7f02ac5fdd4d4a7d9893f9'),
    },
  },
});
