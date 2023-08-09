class Shape {
    constructor(characters, textColor, shape, shapeColor) {

        this.characters = characters;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;

        if (this.shape === 'triangle'){
            new triangle = Triangle(characters, textColor, shapeColor)
        }
        if (this.shape === 'circle'){
            new circle = Circle(characters, textColor, shape, shapeColor)
        }
        if (this.shape === 'square'){
            new square = Square(characters, textColor, shape, shapeColor)
        
        console.log('test');
    }
}

class Triangle extends Shape{
    constructor(characters, textColor, shapeColor){
        return `<polygon points="150,30 270,170 30,170" fill="${shapeColor}"
        <text> ${characters} <tspan fill="${textColor}"></tspan></text>/>`
    }
}

class Circle extends Shape{
    constructor(characters, textColor, shape, shapeColor){
        
    }
}

class Square extends Shape{
    constructor(characters, textColor, shape, shapeColor){
        
    }
}
module.exports = {Triangle, Circle, Square};

//if (shapeType === 'circle') {
//     svgContent += `<circle cx="150" cy="100" r="90" fill="${shapeColor}" />`;
// } else if (shapeType === 'square') {
//     svgContent += `<rect x="50" y="50" width="150" height="150" fill="${shapeColor}" />`;
// } else if (shapeType === 'triangle') {
//     svgContent += `<polygon points="150,30 270,170 30,170" fill="${shapeColor}" />`;
// }