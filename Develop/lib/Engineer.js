// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// prompt for github username
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(gitHub) {
    gitHub = gitHub;
    super(name, id, email, type);
    this.name = name;
    this.id = id;
    this.email = email;
    this.type = type;
  }
}

module.exports = Engineer;
