const { Triangle, Circle, Square } = require('./shapes');
describe('Shapes', () => {

    describe('Triangle', () => {
        it('should render a triangle SVG with the provided color', () => {
            const triangle = new Triangle('red');
            const expectedSVG = '<polygon points="150,30 270,170 30,170" fill="red" />';
            expect(triangle.render()).toBe(expectedSVG);
        });
    });

    describe('Circle', () => {
        it('should render a circle SVG with the provided color', () => {
            const circle = new Circle('blue');
            const expectedSVG = '<circle cx="150" cy="100" r="90" fill="blue" />';
            expect(circle.render()).toBe(expectedSVG);
        });
    });

    describe('Square', () => {
        it('should render a square SVG with the provided color', () => {
            const square = new Square('green');
            const expectedSVG = '<rect x="50" y="50" width="150" height="150" fill="green" />';
            expect(square.render()).toBe(expectedSVG);
        });
    });

});

