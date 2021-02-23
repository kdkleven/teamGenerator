// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// prompt for github username
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(gitHub) {
    const gitHub = gitHub;
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
