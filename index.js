// const { default: generateEmptyCoverage } = require('@jest/reporters/build/generateEmptyCoverage');
const fs = require('fs');
const inquirer = require('inquirer');


const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
let managerHTML = "";
let engineerHTML = "";
let internHTML = "";
console.log("Please built your team!")


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
        }

    ]).then(({ managerName, managerId, managerEmail, managerOffice }) => {
        let newManager = new Manager(managerName, managerId, managerEmail, managerOffice);
        managerHTML += `
            <div class="card col-6 col-md-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${managerName}</h5>
                <p class="card-text">ICON MANAGER</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${managerId}</li>
                <li class="list-group-item">Email:<a href="mailto:${managerEmail}">${managerEmail}</a></li>
                <li class="list-group-item">Office Number:${managerOffice}</li>
            </ul>
            </div>`
        addMember();
    })
}
managerInfo();

const addMember = () => {
    inquirer.prompt({
        type: 'list',
        name: 'memberType',
        message: 'Which type of member would you like to add?',
        choices: ['Engineer', 'Intern', 'I dont want to add any more team members'],

    }).then(({ memberType }) => {
        console.log(memberType)
        switch (memberType) {
            case 'Engineer':
                engineerInfo();
                break;
            case 'Intern':
                internInfo();
                break;
            default:
                createHTML()
        }
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

    ]).then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
        let newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        engineerHTML += `
        <div class="card col-6 col-md-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineerName}</h5>
            <p class="card-text">ICON ENGINEER</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${engineerId}</li>
            <li class="list-group-item">Email:<a href="mailto:${engineerEmail}">${engineerEmail}</a></li>
            <li class="list-group-item">Github:<a href="https://github.com/${engineerGithub}">${engineerGithub}</a></li>
        </ul>
        </div>`
        addMember();

    })
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

    ]).then(({ internName, internId, internEmail, internSchool }) => {
        let newIntern = new Intern(internName, internId, internEmail, internSchool);
        internHTML += `
        <div class="card col-6 col-md-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${internName}</h5>
                <p class="card-text">ICON INTERN</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${internId}</li>
                <li class="list-group-item">Email:<a href="mailto:${internEmail}">${internEmail}</a></li>
                <li class="list-group-item">School:${internSchool}</li>
            </ul>
        </div>`
        addMember();

    })
};

// managerInfo()
//     .then(addMember)

//     .then(managerData => {
//         generateManager(managerData);
//         fs.writeFile('../dist/Output_index.html', htmlFilt, err => {
//             if (err) throw err;

//             console.log('Manager is added')
//         })

//     })
//     .then(engineerData => {
//         generateEngineer(engineerData);
//         fs.writeFile('../dist/Output_index.html', htmlFilt, err => {
//             if (err) throw err;

//             console.log('Engineer is added')
//         })

//     })
//     .then(internData => {
//         generateIntern(internData);
//         fs.writeFile('../dist/Output_index.html', htmlFilt, err => {
//             if (err) throw err;

//             console.log('Intern is added')
//         })

//     })


function createHTML() {

    var opening = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="/assets/style.css"/>
    <title>My Team</title>
</head>

<body>
    <header>My Team</header>
    <section class="row">
    `
    var closing = `


    </section>
</body>

</html>
    `
    var content = opening + managerHTML + engineerHTML + internHTML + closing
    fs.writeFileSync("./dist/index.html", content, function (err) {
        if (errr) throw err;
    })
    console.log("Team HTML file generated in ./dist/index.html")
}