// Modules
var inquirer = require('inquirer');
var fs = require('fs');
var generateMd = require('./generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
     type: 'input',
     name: 'title',
     message: "What's your project title?",
   },
    {
     type: 'input',
     name: 'gitHubName',
     message: "What is your gitHub user name?",
   },
    {
     type: 'input',
     name: 'email',
     message: "What is your email address?",
   },
    {
     type: 'input',
     name: 'projectDescription',
     message: "Provide a description of what your project is about, be sure to include what technologies and why.",
   },
   {
    type: 'list',
    name: 'license',
    message: "Please select a license",
    choices: ['Apache 2.0','GNU GPLv3', 'MIT', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the steps to install your project?",
  },
  {
    type: 'input',
    name: 'usages',
    message: "Provide instructions and examples for how to use application.",
  },
  {
    type: 'input',
    name: 'contribution',
    message: "Include guidelines for how to contribute to project.",
  },
  {
    type: 'input',
    name: 'tests',
    message: "Provide examples on how to test application",
  },
  ];
  

// Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName)
  fs.writeFile(fileName, data, (e) =>
    e ?console.error(e) : console.log('Markdown file Created') )
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Pass answers object to generateMarkdown file to populate
    const generatedReadMe = generateMd(answers)
    writeToFile('../README.md', generatedReadMe )
  });
}

// Function call to initialize app
init();
 

