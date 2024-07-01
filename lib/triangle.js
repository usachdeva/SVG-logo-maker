// importing shape
const Shape = require("./shape");

class Triangle extends Shape {
    constructor(text, text_color, shape, shape_color) {
        super(text, text_color, shape, shape_color);
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,30 70,150 230,150" fill="${this.shape_color}" />
        <text x="45" y="65" fill="${this.text_color}">${this.text}</text>
      </svg>`;
    }
}

// exporting the file
module.exports = Triangle;
