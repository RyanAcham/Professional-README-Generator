// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const { writeFile } = require("fs/promises");
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Repo title?',
    //check to see if the user put anything in the input
    validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your repository title.');
      return false;
    }
  }
},
{
    type: 'input',
    name: 'desc',
    message: 'Enter description.',
    //check to see if the user put anything in the input
    validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter the decription.');
      return false;
    }
  }
},
{
    type: 'input',
    name: 'install',
    message: 'Enter installation instructions.',
    //check to see if the user put anything in the input
    validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter the installation instructions (N/A if none).');
      return false;
    }
  }
},
{
    type: 'input',
    name: 'instruct',
    message: 'Enter program instructions.',
    //check to see if the user put anything in the input
    validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter program instructions (N/A if none).');
      return false;
    }
  }
},
{
    type: 'input',
    name: 'contr',
    message: 'Explain how others can contribute to this application.',
    //check to see if the user put anything in the input
    validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter the contribution instructions (N/A if none).');
      return false;
    }
  }
},
{
    type: 'input',
    name: 'test',
    message: 'Explain how people can test your application.',
    //check to see if the user put anything in the input
    validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter the testing instructions (N/A if none).');
      return false;
    }
  }
},
{
  type: 'checkbox',
  name: 'license',
  message: 'Choose a license.',
  choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3','GNU LGPLv3','The Unlicense', 'Mozilla Public License 2.0', 'MIT License'],
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please choose a license from the list.');
      return false;
    }
  }
},
{
    type: 'input',
    name: 'user',
    message: 'Input username.',
    //check to see if the user put anything in the input
    validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter github username.');
      return false;
    }
  }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter email.',
    //check to see if the user put anything in the input
    validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your email.');
      return false;
    }
  }
},
{
    type: 'input',
    name: 'contact',
    message: 'Explain how others can contact you if they have questions.',
    //check to see if the user put anything in the input
    validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Enter contact info.');
      return false;
    }
  }
}
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    await writeFile(fileName, data, (err) => {});
}

const createReadMe = util.promisify(writeToFile);
// TODO: Create a function to initialize app
async function init() {
    try {
        const userAns = await inquirer.prompt(questions);
        console.log('Processing data to user README.md ', userAns);

        const markDown = generateMarkdown(userAns);
        console.log(markDown);
        await createReadMe('README1.md', markDown);
    }
    catch (error){
        console.log('ERROR: ' + error)
    }
};

// Function call to initialize app
init();
