// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Write a description of your project.",
  },
  {
    type: "input",
    name: "installCommand",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "testCommand",
    message: "What command should be run for tests?",
  },
  {
    type: "input",
    name: "useRepo",
    message: "Info for the user on how to use this repo:",
  },
  {
    type: "input",
    name: "addToRepo",
    message: "How can the user method to contribute to this repo:",
  },
  {
    type: "list",
    name: "license",
    message: "Please select 1 license: ",
    choices: ["MIT", "Apache2.0", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Generating README.md ...")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
