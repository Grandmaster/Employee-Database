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

// Prompt user with various options
options = ["View All Employees", "Add Employee"];
inquirer
  .prompt({
    type: "list",
    message: "What would you like to do?",
    name: "employees",
    choices: options,
  })
  .then((response) => {
    switch (response.employees) {
      case options[0]:
        line1 =
          "select employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary\n";
        line2 =
          "from ((employee inner join role on employee.role_id = role.id) inner join department on role.department_id = department.id);";
        connection.query(line1 + line2, function (err, data) {
          console.log("\n");
          // Renaming the department column
          for (let instance of data) {
            var department = instance.name;
            delete instance.name;
            instance.department = department;
          }
          console.table(data);
          console.log(data);
        });
        break;
    }
    connection.end();
  });
