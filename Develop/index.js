// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your repository? (Required)',
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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error =>{
        if (error){
            return console.log('ERROR ERROR ERROR ERROR ERROR ERROR : '+error)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
