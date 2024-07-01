const Shape = require("./shape");

class Triangle extends Shape {
    constructor(text, text_color, shape, shape_color) {
        super(text, text_color, shape, shape_color);
    }

    setColor(shape_color) {
        this.shape_color = shape_color;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}" />`;
    }

    renderLogo() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
      </svg>`;
    }
}

module.exports = Triangle;
