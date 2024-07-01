// importing shape
const Shape = require("./shape");

class Circle extends Shape {
    constructor(text, text_color, shape, shape_color) {
        super(text, text_color, shape, shape_color);
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shape_color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>  
      </svg> `;
    }
}

// export
module.exports = Circle;
