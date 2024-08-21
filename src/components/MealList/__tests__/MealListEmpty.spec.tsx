import { render } from "../../../../__tests__/utils/customRender";
import { MealListEmpty } from "../MealListEmpty";

describe("<MealListEmpty />", () => {
  it("should be render correctly", () => {
    const { getByText } = render(<MealListEmpty />);
    expect(getByText("Adicione uma Refeição!")).toBeTruthy();
  });
});
