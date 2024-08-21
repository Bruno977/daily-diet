import { BUTTON_MEAL_STATUS_TEST_ID, ButtonMealStatus } from ".";
import { render } from "../../../__tests__/utils/customRender";

describe("<ButtonMealStatus/>", () => {
  it("should render correctly", () => {
    const { getByText, getByTestId } = render(
      <ButtonMealStatus title="sim" variant="primary" />
    );
    expect(getByText("sim")).toBeTruthy();
    expect(getByTestId(BUTTON_MEAL_STATUS_TEST_ID)).toHaveStyle({
      backgroundColor: "#EFF0F0",
    });
  });
  it("should render with variant style", () => {
    const { getByText, getByTestId } = render(
      <ButtonMealStatus title="sim" variant="primary" isActive />
    );
    expect(getByText("sim")).toBeTruthy();
    expect(getByTestId(BUTTON_MEAL_STATUS_TEST_ID)).toHaveStyle({
      backgroundColor: "#E5F0DB",
    });
  });
});
