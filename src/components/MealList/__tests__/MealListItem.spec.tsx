import { mealItem } from "../../../../__tests__/__mocks__/mealItem";
import { fireEvent, render } from "../../../../__tests__/utils/customRender";
import { MEAL_LIST_ITEM_TEST_ID, MealListItem } from "../MealListItem";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const originalModule = jest.requireActual("@react-navigation/native");
  return {
    __esModule: true,
    ...originalModule,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe("<MealListItem />", () => {
  it("should render correctly", () => {
    const { getByText } = render(<MealListItem data={mealItem} />);
    expect(getByText("titulo teste")).toBeTruthy();
  });
  it("should navigate user when press button", () => {
    const { getByTestId } = render(<MealListItem data={mealItem} />);
    fireEvent.press(getByTestId(MEAL_LIST_ITEM_TEST_ID));
    expect(mockNavigate).toHaveBeenCalledWith("MealDetails", { mealId: "1" });
  });
});
