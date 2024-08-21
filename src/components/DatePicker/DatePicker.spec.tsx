import { DATE_PICKER_TEST_ID, DatePicker } from ".";
import { render } from "../../../__tests__/utils/customRender";

const mockFunction = jest.fn();
describe("<DatePicker />", () => {
  it("should render the date picker when visible is true", () => {
    const { debug, getByTestId } = render(
      <DatePicker
        date={new Date()}
        mode="date"
        visible
        onChange={mockFunction}
      />
    );
    expect(getByTestId(DATE_PICKER_TEST_ID)).toBeTruthy();
    debug();
  });
  it("should not render the date picker when visible is false", () => {
    const { queryByTestId } = render(
      <DatePicker
        date={new Date()}
        mode="date"
        visible={false}
        onChange={mockFunction}
      />
    );
    expect(queryByTestId(DATE_PICKER_TEST_ID)).toBeNull();
  });
});
