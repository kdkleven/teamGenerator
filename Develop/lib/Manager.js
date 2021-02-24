// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// office number?

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(officeNumber) {
   officeNumber = officeNumber;
    super(name, id, email, type);
    this.name = name;
    this.id = id;
    this.email = email;
    this.type = type;
  }
}

module.exports = Manager;
