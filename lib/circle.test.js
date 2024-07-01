const Circle = require("./circle");

describe("Circle Suite", () => {
    test("render shape color", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="100" r="80" fill="green" />'
        );
    });
});
