const Employee = require("./employee");

class Engineer extends Employee{
    constructor(github){
        this.github=github;
    }

    getGithub();
    getRole(); // Overridden to return Engineer
}