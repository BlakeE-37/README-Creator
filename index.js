// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require = ('fs')

// TODO: Create an array of questions for user input
// const licenses = Choices(["Choice A", "choice B"])
const questions = ['What is the title of your project?', 'Write a short description of your project', 'write instructions on how to install the application', 'explain how to use the application', 'Chose a License', 'Explain your contributing guidlines', 'Write out instructions on how to test the application'];

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
                message: questions[4],
                name: 'contributing',
            },
        ])
        .then((response) => {
            // markdown.generateMarkdown(response);
            console.log(response.title);
            console.log(response.description);
            console.log(response.license);
        })

}

// Function call to initialize app
init();
