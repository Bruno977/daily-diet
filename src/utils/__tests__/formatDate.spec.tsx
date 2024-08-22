import {
  formatDate,
  formatDateTitle,
  formatDetailsMealTime,
  formatTime,
} from "../formatDate";

const date = new Date("2022-01-01T12:00:00.000Z");

describe("FormatDate", () => {
  it("should return data formatted", () => {
    const result = formatDate(date);
    expect(result).toBe("01/01/2022");
  });
  it("should return data title formatted", () => {
    const result = formatDateTitle(date);
    expect(result).toBe("01.01.2022");
  });
  it("should return time formatted", () => {
    const result = formatTime(date);
    expect(result).toBe("09:00");
  });
  it("should return details meal time formatted", () => {
    const result = formatDetailsMealTime(date);
    expect(result).toBe("01/01/2022 às 09:00");
  });
});
