"user strict";

const mysql = require("mysql");
const dbConfig = require("../../config/database.config.js");

//local mysql db connection
const connection = mysql.createConnection(dbConfig.mysql);

connection.connect(function(err) {
  if (err) {
    console.log("Could not connect to mysql database. Exiting now...", err);
    process.exit();
  }
});

module.exports = connection;
