class SVG{
    constructor(characters, shape){
        this.characters = characters;
        this.shape = shape;
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${this.shape}${this.characters}</svg>`
    }

    setCharacters(characters, textColor){
        this.characters = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>`
    }

    setShape(shape){
        this.shape = shape.render();
    }
}

module.exports = SVG;