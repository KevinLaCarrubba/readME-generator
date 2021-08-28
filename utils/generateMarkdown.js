// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
      return `https://img.shields.io/badge/License-${license}-green.svg`;
    }
    else{
      return "";
    }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  # Description
  
  ${data.projectDescription}
  
  # Table of Contents
  
  * [Install](#install)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)

  * [Contact](#contact)
  
  ## Install
  
  Copy and paste 
  
  
      ${data.installCommand}
  
  
  ## Usage

  ## Contributing

  In order to contribute to this repo please **${data.addToRepo}**
  
  ## Tests

  Copy and paste to run tests 

  
    ${data.testCommand}
  
  
  ## Questions
  [@${data.userName}](https://github.com/${data.userName}?tab=repositories)
  Email: ${data.email}
  
  ## License
  
  explination goes here
  
`;
}

module.exports = generateMarkdown;
