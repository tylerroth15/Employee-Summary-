# Employee Summary

In this homework assignment, our challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Testing is a key piece in making code maintainable and I made sure that all unit tests pass.


## Passing the Tests

Started the homework with the focus of completing the classes first and then getting the tests to pass. I knew from the instructions for this assignment that this task needed to be the priority.I had to be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work!

## app.js
The initial section of the file was provided. I used inquirer to gather information about the development team members and to create objects for each team member. After the user has inputed thier employee's information, the function `render` along with the pass in arrary conataining all of the employee objects will generate and return a html page title `team.html`. 


## Installation

* Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. 

* The app will run as a Node CLI to gather information about each employee.

## Dependencies 

* [jest]
* [inquirer]


### Collaboration

I worked with Chris Enright on this homework and bounced ideas and best practices off of him to create the working code that you will see today. 
