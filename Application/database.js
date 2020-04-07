// A file that stores all the functions used to pull data from the database
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Chidi17",
  database: "employees_db",
});
connection.connect((err) => {
  if (err) throw err;
});

// Create a constructor to store all functions
