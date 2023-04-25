// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const licenses = Choices(["Choice A", "choice B"])
const questions = ['What is the title of your project?', 'Write a short description of your project', 'Write instructions on how to install the application', 'Write out how to use the application', 'Chose a License', 'Write out your contributing guidlines', 'Write out instructions on how to test the application', 'What is your Github username?', 'What is your email?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README Created')
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
                type: 'editor',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'editor',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'list',
                choices: ['MIT License', 'Other License'],
                message: questions[4],
                name: 'license',
            },
            {
                type: 'editor',
                message: questions[5],
                name: 'contributing',
            },
            {
                type: 'editor',
                message: questions[6],
                name: 'test',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((response) => {
            let fileName = 'newREADME.md'
            let newMarkdown = generateMarkdown(response);
            writeToFile(fileName, newMarkdown)
        })

}

// Function call to initialize app
init();
