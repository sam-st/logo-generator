class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }

}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,30 270,170 30,170" fill="${this.shapeColor}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="150" height="150" fill="${this.shapeColor}" />`;
    }
}
module.exports = { Triangle, Circle, Square };

//`<circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />`;
//`<rect x="50" y="50" width="150" height="150" fill="${this.shapeColor}" />`;
// `<polygon points="150,30 270,170 30,170" fill="${shapeColor}" />`;
