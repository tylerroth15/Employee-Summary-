// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, email, id, school){
    super(name, email, id, "Intern")
        this.school = school;
    }
    getRole(){
        return this.role;
    };

    getSchool(){
        return this.school;
    };

};
const e = new Intern(); 

module.exports = Intern;