// import inquirer for cli prompts
const inquirer = require('inquirer');
// import jest for test requirement
const jest = require('jest');
// import fs because we will have to write data to html
const fs = require('fs')

// import classes that the employee object so we can pass it to html creator
const Employee = require('./lib/employee.js'); // I don't think I need this here
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

// Create a array to store employee data, this array will then be used to create the html 
const team = [];

// Create questions for each type of employee to be called during prompt
const employeeRoles = {
    manager: [{    
        type: 'input',
        name: 'name',
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
    ],
    engineer: [{    
        type: 'input',
        name: 'name',
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
        name: 'gitHubname',
        message: 'Please enter your GitHub username'
    }
    ],
    intern: [{    
        type: 'input',
        name: 'name',
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
        name: 'school',
        message: 'Please enter your school name'
    }
    ]
}

// Create questions only for manager
const managerQuestion = {
    employeeType: [
        {
            type: 'list',
            name: 'type',
            choices: ['Engineer','Intern'],
            message: 'Please choose an employee type'
        }
    ],
    continue: [
        {
            type: 'confirm',
            name: 'moreEmployees',
            message: 'Are there any more employees you would like to add?'
        }
    ]
};


// When I start the application I'm prompted with the team managers prompts
function managerPrompt(){
    inquirer.prompt(employeeRoles.manager)
    .then(answers => {
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber )
        team.push(manager);
        console.log(team)
    });
}

function engineerPrompt(){
    inquirer.prompt(employeeRoles.engineer)
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github)
        team.push(engineer);
        console.log(team)
    })
}
function internPrompt(){
    inquirer.prompt(employeeRoles.intern)
    .then(answers => {
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.github)
        team.push(intern);
        console.log(team)
    })
}

// managerPrompt();
// engineerPrompt();

inquirer.prompt(managerQuestion.continue)
    .then(answers=> console.log(answers))