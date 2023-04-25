// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require = ('fs')

// TODO: Create an array of questions for user input
// const licenses = Choices(["Choice A", "choice B"])
const questions = ['What is the title of your project?', 'Write a short description of your project:', 'Chose a License'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'editor',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'list',
                choices: ['MIT License', 'Other License'],
                message: questions[2],
                name: 'license',
            },
        ])
        .then((response) => {
            console.log(response.title);
            console.log(response.description);
            console.log(response.license);
        })

}

// Function call to initialize app
init();
