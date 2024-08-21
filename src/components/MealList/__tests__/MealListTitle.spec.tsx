import { render } from "../../../../__tests__/utils/customRender";
import { MealListTitle } from "../MealListTitle";

describe("<MealListTitle />", () => {
  it("should be render correctly", () => {
    const { getByText } = render(
      <MealListTitle title="2024-08-21T19:36:57.388Z" />
    );
    expect(getByText("21.08.2024")).toBeTruthy();
  });
});
