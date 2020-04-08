// Dependencies, must be installed first
const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");
const Database = require("./database.js");

// Create connection, and create object to store functions related to the database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Chidi17",
  database: "employees_db",
});
const database = new Database(connection);

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
          "select employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id\n";
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
          // Renaming the manager column
          for (let instance of data) {
            var manager_id = instance.manager_id;
            if (manager_id !== null) {
              var manager = data.filter((a) => {
                return a.id == manager_id;
              });
              delete instance.manager_id;
              instance.manager =
                manager[0].first_name + " " + manager[0].last_name;
            } else {
              var manager_id = instance.manager_id;
              delete instance.manager_id;
              instance.manager = manager_id;
            }
          }
          console.table(data);
        });
        break;
      case options[1]:
        var list = [];
        database.getEmployeeList(list);
        console.log(list);
        inquirer.prompt([
          {
            type: "input",
            message: "What is your employee's first name?",
            name: "first_name",
          },
          {
            type: "input",
            message: "What is your employee's last name?",
            name: "last_name",
          },
          {
            type: "input",
            message: "What is your employee's role?",
            name: "role",
          },
          {
            type: "input",
            message: "Who is your employee's manager?",
            name: "manager",
          },
        ]);
        break;
    }
    connection.end();
  });
