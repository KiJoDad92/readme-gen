import inquirer from 'inquirer';
import fs from 'fs';

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Description',
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
        type: 'input',
        message: 'License',
        name: 'license',
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
        message: 'Questions',
        name: 'questions',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success! README file has been generated.');
        }
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const data = `# Project Title\n\n## Description\n${answers.description}\n\n## Table of Contents\n${answers.tableOfContents}\n\n## Installation\n${answers.installation}\n\n## Usage\n${answers.usage}\n\n## License\n${answers.license}\n\n## Contributing\n${answers.contributing}\n\n## Tests\n${answers.tests}\n\n## Questions\n${answers.questions}\n`;
            const fileName = 'README.md';
            writeToFile(fileName, data);
        })
        .catch((error) => {
            console.error('Error prompting user:', error);
        });
}

// Function call to initialize app
init();
