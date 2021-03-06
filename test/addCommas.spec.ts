import { addCommas } from "../src/";

it("Add and remove commas", () => {
	expect(addCommas(30000000)).toEqual("30,000,000");
	expect(addCommas("30000000")).toEqual("30,000,000");
	expect(addCommas("30,000,000")).toEqual("30,000,000");
	expect(addCommas("۳۰۰۰۰۰۰۰")).toEqual("30,000,000");

	expect(addCommas(300)).toEqual("300");
	// @ts-ignore
	expect(addCommas(3000)).toBeType("string");
});

it("Add falsy value", () => {
	expect(addCommas(0)).toEqual("0");
	expect(addCommas()).toBeUndefined();
	expect(addCommas(undefined)).toBeUndefined();
});
