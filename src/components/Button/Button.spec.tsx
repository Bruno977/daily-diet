import { Button } from ".";
import { render } from "../../../__tests__/utils/customRender";

describe("<Button />", () => {
  it("should be render correctly", () => {
    const { getByText } = render(<Button title="teste" />);
    expect(getByText("teste")).toBeTruthy();
  });
});
