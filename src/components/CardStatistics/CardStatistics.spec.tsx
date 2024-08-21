import { CARD_STATISTICS_TEST_ID, CardStatistics } from ".";
import { render } from "../../../__tests__/utils/customRender";

describe("<CardStatistics />", () => {
  it("should render the card statistics", () => {
    const { getByText, getByTestId } = render(
      <CardStatistics title={3} description="teste" />
    );
    expect(getByText("3")).toBeTruthy();
    expect(getByText("teste")).toBeTruthy();
    expect(getByTestId(CARD_STATISTICS_TEST_ID)).toHaveStyle({
      backgroundColor: "#EFF0F0",
    });
  });
  it("should render the card statistics with red color", () => {
    const { getByText, getByTestId } = render(
      <CardStatistics title={3} description="teste" color="red" />
    );
    expect(getByText("3")).toBeTruthy();
    expect(getByText("teste")).toBeTruthy();
    expect(getByTestId(CARD_STATISTICS_TEST_ID)).toHaveStyle({
      backgroundColor: "red",
    });
  });
});
