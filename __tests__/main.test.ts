import { add } from "../src/main";

describe("test add", () => {
  it("should return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});
