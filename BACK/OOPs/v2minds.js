class GeometricShape {
    constructor(type, alignment, drawChar, numRows, numColumns) {
        this.type = type;
        this.alignment = alignment;
        this.drawChar = drawChar;
        this.numRows = numRows;
        this.numColumns = numColumns;
    }

    draw() {
        let shape = '';
        switch (this.type) {
            case 'rectangle':
                shape = this.drawRectangle();
                break;
            case 'square':
                shape = this.drawSquare();
                break;
            case 'triangle':
                shape = this.drawTriangle();
                break;
            default:
                throw new Error('Invalid shape type');
        }
        return shape;
    }

    drawRectangle() {
        let shape = '';
        for (let i = 0; i < this.numRows; i++) {
            for (let j = 0; j < this.numColumns; j++) {
                shape += this.drawChar;
            }
            shape += '\n';
        }
        return shape;
    }

    drawSquare() {
        return this.drawRectangle();
    }

    drawTriangle() {
        let shape = '';
        for (let i = 1; i <= this.numRows; i++) {
            const str = this.drawChar.repeat(i * 2 - 1);
            let padding = '';
            if (this.alignment === 'left') {
                padding = '';
            } else if (this.alignment === 'center') {
                const totalSpaces = this.numRows - i;
                padding = ' '.repeat(totalSpaces);
            } else if (this.alignment === 'right') {
                const totalSpaces = this.numRows - i;
                padding = ' '.repeat(totalSpaces * 2);
            }
            shape += padding + str + '\n';
        }
        return shape;
    }

    alignShape(shape) {
        return shape;
    }
}
const shape = new GeometricShape('triangle', 'center', 'A', 5, 0);
// const drawnShape = shape.draw();
const drawnShape = shape.drawRectangle();
console.log(drawnShape);