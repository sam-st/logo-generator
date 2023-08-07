const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Enter 3 letters: "
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape: ",
        choices: ['triangle', 'circle', 'square']
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for your shape: "
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color for your text: "
    }
];

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
        })
}

init();