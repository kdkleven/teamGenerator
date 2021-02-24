// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// promt for school

const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
    school = school;
    super(name, id, email, type);
    this.name = name;
    this.id = id;
    this.email = email;
    this.type = type;
  }
}

module.exports = Intern;