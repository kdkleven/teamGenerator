const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { resolve } = require("path");
const { finished } = require("stream");
const { resolveSoa } = require("dns");

const employees = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Initialize the application
function init() {
    // Prompt user for input response
    inquirer.prompt([
        {
            type: 'input',
            name: 'team',
            message: 'Enter your team name:',
        }
    ]).then((res) => {
        // Assign variable to the user's response object
        employees.push(res.team);
        console.log(employees);
        newManager();
    });
}

function newManager() {
    inquirer.prompt([
        // MANAGER
        {
            type: 'input',
            name: 'name',
            message: "What's the Manager's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter email:",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter office number:",
        }
    ]).then((res) => {
        const newManager = new Manager(res.name, res.id, res.email, res.officeNumber);
        
        employees.push(newManager);
        console.log(employees);
        newMember();
    });
}

function newMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'newMember',
            message: 'Add a new team member:',
            choices: ['Engineer', 'Intern', 'Finish'],
        }
    ]).then((res) => {
        
        if (res.newMember === 'Engineer') {
            console.log(res);
            newEngineer();
        } 
        else if (res.newMember === 'Intern') {
            console.log(res);
            newIntern();
        }
        else {
            console.log(res);
            renderTeam();
        }    
    });
}

function newEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter email:",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter GitHub username:",
        }
    ]).then((res) => {
        const newEngineer = new Engineer(res.name, res.id, res.email, res.github);
        
        employees.push(newEngineer);
        console.log(employees);
        newMember();
    });
}

function newIntern() {
    console.log("newIntern");
    inquirer.prompt([  
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter email:",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the school:",
        }
    ]).then((res) => {
        const newIntern = new Intern(res.name, res.id, res.email, res.school);
        
        employees.push(newIntern);
        console.log(employees);
        newMember();
    });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function renderTeam() {
    render(employees);
    fs.writeFile(`${OUTPUT_DIR}/${outputPath}`, (err) =>
    err ? console.log(err) : console.log('Successfully created team!')
    );
}

// Call intializer function
init();


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
