import { doSomething } from "./testable-function";

describe("A unit test", () => {
	it("called, no params, returns true", () => {
		const result = doSomething();

		expect(result).toBe(true);
	});
});
