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

const team = [];
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
    ]).then((response) => {
        // Assign variable to the user's response object
        team.push(response.team);
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
    ]).then((managerResponse) => {
        const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        
        team.push(managerResponse);
        console.log(team);
        newMember();
    });
}

function newMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'members',
            message: 'Add a new team member:',
            choices: ['Engineer', 'Intern', 'Finalize'],
        }
    ]).then((response) => {
        switch (response) {
            case 'Engineer':
                newEngineer();
                break;
            case 'Intern':
                newIntern();
                break;
            default:
                finalizeTeam();
        }
    });
}

function newEngineer() {
    inquirer.prompt([
          
    // ENGINEER
        {
            type: 'input',
            name: 'employeeName',
            message: "Enter the employee's name:",
        },
        {
            type: 'input',
            name: 'employeeID',
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
        },
        
    ]).then((response) => )
}

function newIntern() {
        {
            type: 'input',
            name: 'employeeName',
            message: "Enter the employee's name:",
        },
        {
            type: 'input',
            name: 'employeeID',
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
        },
}

function finalizeTeam() {


}

        // {
        //     type: '',
        // },

        // // INTERN

  
       

        // Call function to write the README.md file
        // writeToFile(readmePageContent);

// Call intializer function
init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// const generateHTML = (answers) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// // After you have your html, you're now ready to create an HTML file using the HTML
// // returned from the `render` function. Now write it to a file named `team.html` in the
// // `output` folder. You can use the variable `outputPath` above target this location.
// // Hint: you may need to check if the `output` folder exists and create it if it
// // does not.

// fs.writeFile('index.html', htmlPageContent, (err) =>
// err ? console.log(err) : console.log('Successfully created index.html!')
// );

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
