import { mockMealStorage } from "../../../__tests__/__mocks__/mealStorage";
import { getTotalMeal } from "../getTotalMeal";

describe("getTotalMeal", () => {
  it("should return correctly", () => {
    const result = getTotalMeal(mockMealStorage);
    const expectedResult = {
      percentage: 50,
      inDiet: 2,
      outDiet: 2,
      mealInSequence: 2,
    };
    expect(result).toEqual(expectedResult);
  });
});
