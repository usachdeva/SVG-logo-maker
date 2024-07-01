//importing the required modules
const { readFile, writeFile } = require("fs/promises");
const inquirer = require("inquirer");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");

// asking the required questions
inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message:
                "Enter the text for the logo (Must contain not more than three characters.)",
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter the text color",
        },
        {
            type: "list",
            name: "shape",
            message: "Enter the shape for the logo",
            choices: ["circle", "square", "triangle"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter the shape color",
        },
    ])
    .then((data) => {
        const text = data.text;
        const text_color = data.textColor;
        const shape = data.shape;
        const shape_color = data.shapeColor;
        let triangle = new Triangle(text, text_color, shape, shape_color);
        let circle = new Circle(text, text_color, shape, shape_color);
        let square = new Square(text, text_color, shape, shape_color);

        // finding the shape
        const shapeLogo = (shape) => {
            if (shape == "circle") {
                return writeFile("logo.svg", circle.renderLogo());
            } else if (shape == "triangle") {
                return writeFile("logo.svg", triangle.renderLogo());
            } else if (shape == "square") {
                return writeFile("logo.svg", square.renderLogo());
            }
        };

        // generating logo
        shapeLogo(shape);
        console.log("Generated logo.svg");
    })
    .catch((err) => {
        console.error(`An error found: ${err}`);
    });
