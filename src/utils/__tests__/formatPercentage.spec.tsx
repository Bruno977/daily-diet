import { formatPercentage } from "../formatPercentage";

describe("formatPercentage", () => {
  it("should return percentage formatted", () => {
    const result = formatPercentage(90.05);
    expect(result).toBe("90,05");
  });
});
