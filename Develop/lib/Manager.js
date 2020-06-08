// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name, email, id, "Manager")
        this.officeNumber = officeNumber;
    }
    getRole(){
       return this.role; 
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
};

module.exports = Manager;