import { InputDate } from ".";
import { render } from "../../../__tests__/utils/customRender";

describe("<InputDate/>", () => {
  it("should render correctly", () => {
    const { getByText } = render(<InputDate label="label" value="value" />);
    expect(getByText("label")).toBeTruthy();
    expect(getByText("value")).toBeTruthy();
  });
});
