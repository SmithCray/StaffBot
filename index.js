const inquirer = require("inquirer");
const fs = require("fs");

const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

const managerPrompt = [
  {
    type: "input",
    message: "Please enter Team Manager's name.",
    name: "managerName",
  },
  {
    type: "input",
    message: "Please enter your employee ID.",
    name: "managerID",
  },
  {
    type: "input",
    message: "Please enter your email address.",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Please enter you office number.",
    name: "managerOffice",
  },
];

const addMembers = [
  {
    type: "list",
    message: "Would you like too...",
    name: "teamMembers",
    options: [
      "Add an engineer.",
      "Add an intern.",
      "Or finish building my Team!",
    ],
  },
];

const engineerPrompt = [{}];

const internPrompt = [{}];

function buildTeam();
//Step 1
//Prompt to enter the team MANAGER's name, employee ID, email address, and office number
//use inquirer npm to prompt questions

// function writeToFile(fileName, data) {
//   fs.writeFileSync(fileName, data, (err) =>
//     err ? console.log(err) : console.log("Writing ReadMe!")
//   );
// }

function init() {
  inquirer
    .prompt(managerPrompt)
    .then((data) => {
      //   console.log(managerPrompt(data));
      //   var managerData = managerPrompt(data);
      //   writeToFile("readme.md", rawMarkdown);
      console.log(data);
    })
    // .then(buildTeam())
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
}

init();

//.then(
//Call the function in step 2
//)

//Step 2
//Create a function to prompt user with OPTIONS: add an engineer or an intern or to finish building my team.
//use inquirer npm to prompt options
//.then(
//If else or switch statement to let app know which option was chosen
//If Engineer - Call engineer prompt (function step 3)
//If Intern - Call intern prompt (function step 4)
//If buildMyTeam - Call function step 5
//)

//Step 3:
//Create a function for Engineer prompts

//Step 4:
//Creat a function for Intern prompts

//Step 5:
//Create a function to build the team
//Find a way to collect all user's input for manager, Engineer, and intern
//Use that collection to build the team html
