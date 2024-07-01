const Square = require("./square");

describe("Square Suite", () => {
    test("render shape color", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            '<rect width="160" height="160" x="110" y="30" fill="red" />'
        );
    });
});
