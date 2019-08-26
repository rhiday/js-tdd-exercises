const caesar = require("./caesar");

describe("caesar", ()=> {
    it("works with single letters", () => {
        expect(caesar("A", 1)).toEqual("B");
    });

    it("works with words", () => {
        expect(caesar("Aaa", 1)).toEqual("Bbb");
    });

    it("works with phrases", () => {
        expect(caesar("Hello world!", 5)).toEqual("Mjqqt, Btwqi!");
    });

    it("works with negative shift", () => {
        expect(caesar("Mjqqt, Btwqi!", -5)).toEqual("Hello world!");
    });

    it("wraps", () => {
        expect(caesar("Z", 1)).toEqual("A");
    });

    it("works with large shift factors", () => {
        expect(caesar("Hello World!", 75)).toEqual("Ebiil, Tloia!");
    });
});