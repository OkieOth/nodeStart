import { strictEqual } from "assert";
import index from "../src";

describe("Typescript usage suite", () => {
    it("should be able to execute a test", () => {
        strictEqual(true, true);
    });
    it("should return expected string", () => {
        strictEqual(index(), true);
    });
});
