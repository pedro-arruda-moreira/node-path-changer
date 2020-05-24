import { changeNodePath } from "..";
import * as Mocha from "mocha";
import chai from "chai"

Mocha.describe("node-path-changer", () => {
    it("works", () => {
        try {
            require("dummy").dummy();
            chai.assert.fail("Module wasn't supposed to load.");
        } catch(e) {
            changeNodePath(__dirname);
            chai.assert.equal(require("dummy").dummy(), "dummy");
        }
    })
})