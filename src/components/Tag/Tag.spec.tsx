import { Tag } from ".";
import { render } from "../../../__tests__/utils/customRender";

describe("<Tag />", () => {
  it("should render tag inDiet", () => {
    const { getByText } = render(<Tag status="inDiet" />);
    expect(getByText("dentro da dieta")).toBeTruthy();
  });
  it("should render tag outDiet", () => {
    const { getByText } = render(<Tag status="outDiet" />);
    expect(getByText("fora da dieta")).toBeTruthy();
  });
});
