// import inquirer for cli prompts
const inquirer = require('inquirer');
// import jest for test requirement
const jest = require('jest');
// import fs because we will have to write data to html
const fs = require('fs')

// import classes from the employee object so we can pass it to html creator
const Employee = require('./lib/employee.js'); // I don't think I need this here
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const GenerateHTML = require('./src/generateHTML');

// Create a array to store employee data, this array will then be used to create the html 
const team = [];

///////////////////             Questions from Inquirer         ////////////////////

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
        message: 'What is name of this engineer?',
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter the engineers employeeId',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the engineers email',
    },
    {
        type: 'input',
        name: 'gitHubname',
        message: 'Please enter the engineers GitHub username'
    }
    ],
    intern: [{    
        type: 'input',
        name: 'name',
        message: 'What is the name of this intern?',
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter the interns employeeId',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the interns email',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter the interns school name'
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
            message: 'Please choose an employee type you would like to add'
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

///////////////////             Functions individual prompts            ///////////////////

async function managerPrompt(){
    console.log('\u001b[31m Hello Manager, lets begin with creating your team!')
    await inquirer.prompt(employeeRoles.manager)
            .then(answers => {
            const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber )
            team.push(manager);
            // console.log(team)
        });
}

async function engineerPrompt(){
    await inquirer.prompt(employeeRoles.engineer)
            .then(answers => {
                const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.gitHubname)
                team.push(engineer);
                // console.log(team)
            })
}

async function internPrompt(){
    await inquirer.prompt(employeeRoles.intern)
            .then(answers => {
                const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school)
                team.push(intern);
                // console.log(team)
            })
}

async function managerContinue() {
    let ret;
    await inquirer.prompt(managerQuestion.continue)
            .then(answers => {
                // console.log(answers)
                ret = answers;
            })
    return ret;        
}

async function managerEmployeetype() {
    let ret = ""
    await inquirer.prompt(managerQuestion.employeeType)
            .then(answers => {
                console.log(answers)
                ret = answers
            })
    return ret;
}


//////////////////              Function to write html              //////////////
function writeToFile(fileName, data) {
    console.log(fileName)
    fs.writeFile(fileName, data, (e) =>
      e ?console.error(e) : console.log('HTML file Created') )
  }

///////////////////             Initialization function             /////////////////////

async function init(){
    // When I start the application I'm prompted with the team managers prompts
    await managerPrompt();
    
    // Lets use while loop to ask manager if he has more employees
    let cont = true;
    while(cont === true){
        // Then ask question for which type of employee you want the manager to add
        let data1 = await managerEmployeetype()
        // Add condition for employee type to call correct prompt
        if (data1.type === "Engineer"){
            console.log('You Selected Engineer')
            await engineerPrompt();
        } else{
            console.log('You Selected Intern')
            await internPrompt();
        }
        // console.log(team)
        // Now ask manage if he would like to add more employees
        let data2 = await managerContinue()
        // Set boolean if true loop again, if false exit
        cont = data2.moreEmployees;
    }

    // Now that employees are created and stored in a object lets pass it to a function that creates the html!!
    const createHTML = GenerateHTML(team);
    // write file to location
    // writeToFile('./dist/index.html',createHTML)
}

//////////////////////////      Initialization              /////////////////////////
init()
