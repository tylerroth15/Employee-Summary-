const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "./output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```



const renderTeam = employeeInfoArray =>{
    fs.writeFile(outputPath, render(employeeInfoArray), () => {});
    console.log(employeeInfoArray);
    
}

const teamInfo = () =>{

    // Manager Information Prompt

    const promptManagerInfo = (name, id, email) =>{
        inquirer.prompt({
            type: "Number",
            message: "What is the Manager's Office Number?",
            name: "officeNumber",
                }).then (({officeNumber}) => {
            employeeInfoArray.push(new Manager(name, id, email, officeNumber));
            inquirer.prompt({
                type: "confirm", 
                message: "Would you like to add additional employees?",
                name: "addEmployee"
            }).then(({ addEmployee})=>{
                if (addEmployee){
                    promptEmployeeInfo();
                } else {
                    renderTeam(employeeInfoArray);
                }
        })
        })
    };

    // Engineer Information Prompt

    const promptEngineerInfo = (name, id, email)=> {
        inquirer.prompt({
            type: "input",
            message: "Enter Engineer's GitHub Username.",
            name: "github"
        }).then(({github})=>{
            employeeInfoArray.push(new Engineer(name, id, email, github));
            inquirer.prompt({
                type: "confirm", 
                message: "Would you like to add additional employees?",
                name: "addEmployee"
            }).then(({ addEmployee})=>{
                if (addEmployee){
                    promptEmployeeInfo();
                } else {
                    renderTeam(employeeInfoArray);
                }
            })
        })
    };

    //  Intern Information Prompt

    const promptInternInfo = (name, id, email) => {
        inquirer.prompt({
            type: "input",
            message: "Please enter the Intern's School?",
            name: "school"
        }).then(({school})=>{
            employeeInfoArray.push(new Intern(name, id, email, school));
            inquirer.prompt({
                type: "confirm",
                message: "Continue to add another employee", 
                name: "addNextEmployee"
            }).then (({ addNextEmployee})=>{
                if (addNextEmployee){
                    promptEmployeeInfo();
                } else {
                    renderTeam (employeeInfoArray);
                }
            })
        })
    };

    // Employee Information Prompt
    const promptEmployeeInfo = () =>{
        inquirer.prompt ([{
            type: "input",
            message: "Please enter the employee's name.",
            name: "name"
        },{
            type: "number",
            message: "Please enter the employee's ID number.",
            name: "id",
        },{
            type: "input",
            message: "Please enter the employee's email address.",
            name: "email"
        },{
            type: "list",
            choices: ["Intern", "Engineer", "Manager"],
            name: "role"
        }]).then(({ name, id, email, role}, error)=>{
            switch (role){
                case "Intern":
                promptInternInfo(name, id, email);
                break;
                case "Engineer":
                promptEngineerInfo(name, id, email);
                break;
                case "Manager":
                promptManagerInfo(name, id, email);
                break;
            }
        })
    };

    const employeeInfoArray = [];

    promptEmployeeInfo();
}

teamInfo();