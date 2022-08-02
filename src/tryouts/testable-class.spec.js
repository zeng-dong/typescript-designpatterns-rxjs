import { SomeClass } from "./testable-class";

describe("A unit test", () => {
	it("called, no params, returns true", () => {
		const sut = new SomeClass();

		const result = sut.invoke();

		expect(result).toBe(true);
	});
});
