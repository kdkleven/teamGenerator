// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// promt for school

const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
    const school = school;
    super(fullName, id, email);
    this.fullName = fullName;
    this.id = id;
    this.email = email;
  }

  printMember() {
    console.log(`\n Intern`);
    console.log(`\n ID: ${this.id}`);
    console.log(`\n Email: ${this.email}`);
    console.log(`\n School: ${this.school}`);
  }
}

const internJoe = new Intern('Vintern', '30', 'vintern@example.com', 'uofm');