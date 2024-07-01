// importing shape
const Shape = require("./shape");

class Square extends Shape {
    constructor(text, text_color, shape, shape_color) {
        super(text, text_color, shape, shape_color);
    }

    setColor(shape_color) {
        this.shape_color = shape_color;
    }

    render() {
        return `<rect width="160" height="160" x="110" y="30" fill="${this.shape_color}" />`;
    }

    renderLogo() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="160" x="110" y="30" fill="${this.shape_color}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>  
        </svg>`;
    }
}

// export
module.exports = Square;
