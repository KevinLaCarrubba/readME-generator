// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
     return `[![License](https://img.shields.io/badge/License-${license}-green)]`;
    }
    else{
      return "";
    }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
   return `(https://opensource.org/licenses/${license})`
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if (license == 'Apache2.0') {
  return ` Copyright [2021] [${name}]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  }
if (license == 'MIT') {
return  ` Copyright [2021] [${name}]

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
}

if (license == 'None'){
  return "This project is not licensed.";
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license ,data.name);

  return `# ${data.title} 
  ${badge}${licenseLink}


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
  Github: [@${data.userName}](https://github.com/${data.userName}?tab=repositories)\n
  Email: ${data.email}
  
  ## License
  ${licenseSection}
  
`;
}

module.exports = generateMarkdown;
