// Main menu questions to be used by inquirer prompt

const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all Departments',
            'View all Roles',
            'View all Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Quit'
        ]
    }
]

module.exports = questions;