const inquirer = require('inquirer');
const fs = require('fs').promises;
const {Circle, Triangle, Square} = require('./lib/shapes');
const SVG = require('./lib/svg');

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
            let shape; //declared it here so i can use it outside of the if statements
            if(answers.shape === "triangle"){
                shape = new Triangle(answers.shapeColor);
            }
            else if(answers.shape === "circle"){
                shape = new Circle(answers.shapeColor);
            }
            if(answers.shape === "square"){
                shape = new Square(answers.shapeColor);
            }

            console.log(shape);

            const svg = new SVG();
            svg.setCharacters(answers.characters, answers.textColor);
            svg.setShape(shape);

            return fs.writeFile("logo.svg", svg.render());
        })
        .then(() => {
            console.log("Generated logo.svg");
        })
        .catch(err => {
            console.error("Error:", err);
        });
}

init();