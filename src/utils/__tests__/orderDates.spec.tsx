import { mockMealStorage } from "../../../__tests__/__mocks__/mealStorage";
import { orderDates } from "../orderDates";

describe("orderDates", () => {
  it("should return correctly", () => {
    const result = orderDates(mockMealStorage);
    const firstDate = result[0].data[0].hour;
    expect(firstDate).toBe("2024-08-30T19:36:57.388Z");
  });
});
