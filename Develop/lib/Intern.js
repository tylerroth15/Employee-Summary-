// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, email, id, school, role){
    super(name, email, id, role)
        this.school = school;
    }
    getRole(){
        return "Intern";
    };

    getSchool(){
        return this.school;
    };

};
const e = new Intern(); 

module.exports = Intern;