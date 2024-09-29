const inquirer = require('inquirer');
const { Client } = require('pg');
const questions = require('./lib/questions.js')

const client = new Client(
    {
    user: '', //Enter your own credentials here
    host: 'localhost',
    database: 'company_db',
    password: '' //Enter your own credentials here
},
console.log(`Connected to the company_db database.`)
);

client.connect();

// Xpert Learning Assistant recommended using a switch statement for this application
// I chose to use the switch statement because I haven't tried it in any previous challenges and I thought it would make the code more readable than writing several if-else statements
function mainMenu() {
    inquirer.prompt(questions).then((response) => {
        switch(response.action) {
            case 'View all Departments':
                viewDepartments();
                break;
            case 'View all Roles':
                viewRoles();
                break;
            case 'View all Employees':
                viewEmployees();
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Update an Employee Role':
                updateRole();
                break;
            case 'Quit':
                client.end();
                break;

        }
    })
};

// Function to view all departments
function viewDepartments() {
    const sql = `SELECT * FROM department;`;
    client.query(sql, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);  //Xpert Learning Assistant suggested using console.table to display the data as a table
        mainMenu();
    });
};

// Function to view all roles
function viewRoles() {
    const sql = `SELECT * FROM role;`;
    client.query(sql, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);
        mainMenu();
    });
};

// Function to view all employees
function viewEmployees() {
    const sql = `SELECT * FROM employee`;
    client.query(sql, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);
        mainMenu();
    });
};

// Function to add a department
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'Enter the name of the department you want to add',
        }
    ]).then((answer) => {
        const sql = `INSERT INTO department(name) VALUES('${answer.department}');`
        client.query(sql, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Added " + answer.department + " to the database")
            mainMenu();
        });
    });
};

mainMenu();

// To-do: Implement function to add a role

// To-do: Implement function to add an employee

// To-do: Implement function to update an employee role