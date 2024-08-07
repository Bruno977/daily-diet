import { mealItem } from "../../../__tests__/mock/mealItem";
import { render } from "../../../__tests__/utils/customRender";
import { MealListItem } from "./MealListItem";

describe("<MealListItem />", () => {
  it("should be render correctly", () => {
    const { getByText } = render(<MealListItem data={mealItem} />);
    expect(getByText("titulo teste")).toBeTruthy();
  });
});
