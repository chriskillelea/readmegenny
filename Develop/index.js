// TODO: Include packages needed for this application

    const fs = require('fs');
  const inquirer = require('inquirer');
    const generateMarkdown = require('./utils/generateMarkdown.js');




// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Hello there! What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title');
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

     resolve({
            ok: true,
                message: console.log ('Success!')
            });
        });
    });
};

// TODO: Create a function to initialize app

const init = () => {
    return promptUser();
}

// Function call to initialize app

init()
    .then(data => { writeToFile(data) }, failureCallback);
