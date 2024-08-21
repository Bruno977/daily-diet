import { Input } from ".";
import { render } from "../../../__tests__/utils/customRender";

describe("<Input/>", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Input label="teste" />);
    expect(getByText("teste")).toBeTruthy();
  });
});
