// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// office number?

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(officeNumber) {
    const officeNumber = officeNumber;
    super(fullName, id, email);
    this.fullName = fullname;
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

const manager = new Manager('Jeff', 1, 'test@example.com', 204);
//manager.printInfo();