const Triangle = require("./triangle");

describe("Triangle Suite", () => {
    test("render shape color", () => {
        const shape = new Triangle("B", "black", "blue");
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
        );
    });
});
