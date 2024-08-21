import { ArrowUp } from "phosphor-react-native";
import { Button, BUTTON_ICON_TEST_ID } from ".";
import { render } from "../../../__tests__/utils/customRender";

jest.mock("phosphor-react-native", () => ({
  ArrowUp: "",
}));

describe("<Button />", () => {
  it("should render without icon", () => {
    const { getByText, queryByTestId } = render(<Button title="teste" />);
    expect(getByText("teste")).toBeTruthy();
    expect(queryByTestId(BUTTON_ICON_TEST_ID)).toBeNull();
  });
  it("should render with icon", () => {
    const { getByText, getByTestId } = render(
      <Button title="teste" icon={<ArrowUp />} />
    );
    expect(getByText("teste")).toBeTruthy();
    expect(getByTestId(BUTTON_ICON_TEST_ID)).toBeTruthy();
  });
});
