// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./Employee");

class Engineer {
    constructor(name, role, email, id, github) {
        this.name = name;
        this.role = role;
        this.email =email;
        this.id = id;
        this.github = github;
    }

};

module.exports = Engineer;