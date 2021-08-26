// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
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
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var fileName = fileName;
  data = generateMarkdown(data);
  fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  questions().then((data) => {
    console.log(data);
    let print = writeToFile("README.md", data);
    console.log(print);
    fs.writeFile(print, (err) =>
      err ? console.log(err) : console.log("Generating README.md ...")
    );
  });
}

// Function call to initialize app
init();
