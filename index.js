import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Github Account?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Description of Project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'tableOfContents',
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
    },
    {
        type: 'input',
        message: 'Contributing',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Contact Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Questions',
        name: 'questions',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    console.log(`Writing to file: ${fileName}`);
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Success! README file has been generated.');
        }
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            const fileName = 'README.md';
            writeToFile(fileName, markdown);
        })
        .catch((error) => {
            console.error('Error prompting user:', error);
        });
};

// Function call to initialize app
init();