// A file that stores all the functions used to pull data from the database

// Create a constructor to store all functions
class Database {
  constructor(connection) {
    this.connection = connection;
  }
}

// Function that pulls list of employees from database, and returns it as an array
// of names.
Database.prototype.getEmployeeList = async function (list) {
  await this.connection.query(
    "select employee.first_name, employee.last_name from employee",
    (_, data) => {
      for (let employee of data) {
        list.push(employee.first_name + " " + employee.last_name);
      }
    }
  );
};

module.exports = Database;
