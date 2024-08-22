import { formatTitle } from "../formatTitle";

describe("formatTitle", () => {
  it("should return title", () => {
    const result = formatTitle("titulo teste");
    expect(result).toBe("titulo teste");
  });
  it("should return title with ...", () => {
    const result = formatTitle("titulo teste titulo teste titulo teste");
    expect(result).toContain("...");
  });
});
