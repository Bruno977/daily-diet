import { DietButton } from ".";
import { render, waitFor } from "../../../__tests__/utils/customRender";

jest.mock("phosphor-react-native", () => ({
  ArrowUpRight: () => <></>,
}));
describe("<DietButton/>", () => {
  it("Should render Diet Percentage", async () => {
    const { getByText } = render(<DietButton variant="primary" />);
    await waitFor(() => {
      expect(getByText("das refeições dentro da dieta")).toBeTruthy();
    });
  });
});
