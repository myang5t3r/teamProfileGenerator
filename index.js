// import inquirer for cli prompts
const inquirer = require('inquirer');
// import jest for test requirement
const jest = require('jest');
// import fs because we will have to write data to html
const fs = require('fs')

// import classes that the employe object so we can pass it to html creator
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');