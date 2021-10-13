module.exports = {
  database: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password:process.env.PASSWORD,
    dateStrings: true,
    port: process.env.PORT,
  },
};
