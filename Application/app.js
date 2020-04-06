// Dependencies, must be installed first
const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");

// Create connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Chidi17",
  database: "employees_db",
});

// Initialize connection
connection.connect((err) => {
  if (err) throw err;
});
