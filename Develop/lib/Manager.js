// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Manager = require("./Employee")

class Manager{
    constructor(name, role, email, id, officeNumber){
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber;

    }
};

module.exports = Manager;