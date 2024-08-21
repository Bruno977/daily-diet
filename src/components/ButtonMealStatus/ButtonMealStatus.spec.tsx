import { ButtonMealStatus } from ".";
import { render } from "../../../__tests__/utils/customRender";

describe("<ButtonMealStatus/>", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <ButtonMealStatus title="sim" variant="primary" />
    );
    expect(getByText("sim")).toBeTruthy();
  });
});
