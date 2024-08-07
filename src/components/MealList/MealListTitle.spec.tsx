import { render } from "../../../__tests__/utils/customRender";
import { MealListTitle } from "./MealListTitle";

describe("<MealListTitle />", () => {
  it("should be render correctly", () => {
    const { getByText } = render(<MealListTitle title="teste" />);
    expect(getByText("teste")).toBeTruthy();
  });
});
