// import inquirer for cli prompts
const inquirer = require('inquirer');
// import jest for test requirement
const jest = require('jest');
// import fs because we will have to write data to html
const fs = require('fs')

// import classes that the employee object so we can pass it to html creator
// const Employee = require('./lib/employee.js');
// const Manager = require('./lib/manager.js');
// const Engineer = require('./lib/engineer.js');
// const Intern = require('./lib/intern.js');

// Create questions for each type of employee to be called during prompt
const employeeRoles = {
    manager: [{    
        type: 'input',
        name: 'managerName',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter your employeeId',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number'
    }
    ]
}

inquirer.prompt(employeeRoles.manager)
    .then(answers => console.log(answers));