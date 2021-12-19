const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

inquirer.prompt("Please built your team!")
const managerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?",

        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email? "
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number? "
        },

    ])
}

const addMember = () => {
    return inquirer.prompt({
        type: 'checkbox',
        name: 'memberType',
        message: 'Which type of member would you like to add?',
        choices: ['Engineer','Intern','I dont want to add any more team members'],
        
    })
} 

const engineerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's id?",

        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email? "
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Github username? "
        },

    ])
};

const internInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's id?",

        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the team intern's email? "
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school name? "
        },

    ])
};

managerInfo()
.then(addMember)

.then(managerData => { generateManager(managerData);
    fs.writeFile('../dist/Output_index.html', htmlFilt, err => {
        if (err) throw err;

        console.log('Manager is added')
    })

})
.then(engineerData => { generateEngineer(engineerData);
    fs.writeFile('../dist/Output_index.html', htmlFilt, err => {
        if (err) throw err;

        console.log('Engineer is added')
    })

})
.then(internData => { generateIntern(internData);
    fs.writeFile('../dist/Output_index.html', htmlFilt, err => {
        if (err) throw err;

        console.log('Intern is added')
    })

})








