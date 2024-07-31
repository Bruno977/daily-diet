import { HeaderCardTitle } from ".";
import { render, waitFor } from "../../../__tests__/utils/customRender";
describe("<HeaderCardTitle />", () => {
  it("Should be render correctly", async () => {
    const { getByText } = render(
      <HeaderCardTitle percentage={90.86} subtitle="teste" />
    );
    await waitFor(() => {
      expect(getByText("90,86%")).toBeTruthy();
      expect(getByText("teste")).toBeTruthy();
    });
  });
});
