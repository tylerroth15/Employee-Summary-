// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id, "Engineer")
        this.github = github;
    }

    getRole() {
        return this.role;
    };

    getGithub(){
        return this.github;
    }

};

module.exports = Engineer;