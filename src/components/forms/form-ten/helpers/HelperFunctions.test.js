import { multiply, makeLowerCase } from "./HelperFunctions";

test("should return multiply value", () => {
  expect(multiply(3, 13)).toBe(39);
  expect(multiply(3, 4)).toBe(12);
  expect(multiply(-13, 4)).toBe(-52);
});

test("should return lower case value", () => {
  expect(makeLowerCase("Samuel")).toBe("samuel");
  expect(makeLowerCase("JavaScript")).toBe("javascript");
  expect(makeLowerCase("Node Js")).toBe("node js");
});
