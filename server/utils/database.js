const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "admin",
  database: "AcademloBank",
  logging: false,
});

module.exports = { db };
