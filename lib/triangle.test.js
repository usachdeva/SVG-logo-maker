const triangle = require("./triangle");

describe("Triangle Suite", () => {
    test("render shape color", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        );
    });
});
