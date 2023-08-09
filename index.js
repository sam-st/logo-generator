const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes');

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Enter up to 3 letters: "
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color for your text (keyword or hexadecimal): "
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
        message: "Enter a color for your shape (keyword or hexadecimal): "
    }
];

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            const shape = new Shape(answers);
        })
}

init();