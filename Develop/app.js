const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Initialize the application
function init() {
    // Prompt user for input response
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: 'Enter your team name:',
        },
        {
            type: 'list',
            name: 'teamMember',
            message: 'Add a team member:',
            choices: ['Manager', 'Engineer', 'Intern'];
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'Install Instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage Instructions:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'License:',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3', 'Mozilla Public License 2.0', 'The Unlicense', ''],
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Contribution Guidelines:',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Test Instructions:',
        },
        {
            type: 'input',
            name: 'gitHubUser',
            message: 'GitHub Username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email Address:',
        },
    ]).then((response) => {
        // Assign variable to the user's response object
        const readmePageContent = generateMarkdown(response);
        // Call function to write the README.md file
        writeToFile(readmePageContent);
    });
}

// Call intializer function
init();




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

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
