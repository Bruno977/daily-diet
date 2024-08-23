import { Props, REGISTERED_MEAL_BUTTON_TEST_ID, RegisteredMeal } from ".";
import { fireEvent, render } from "../../../__tests__/utils/customRender";

jest.mock("phosphor-react-native", () => ({
  ArrowLeft: () => <></>,
}));

jest.mock("react-native-safe-area-context", () => {
  return {
    useSafeAreaInsets: jest.fn().mockReturnValue({
      left: 24,
      right: 24,
      top: 24,
      bottom: 24,
    }),
  };
});
const originalModule = jest.requireActual("@react-navigation/native");

const mockRoute: Props = {
  route: {
    params: { mealStatus: "inDiet" },
  },
  ...originalModule,
};

const mockNavigation = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    __esModule: true,
    ...mockRoute,
    useNavigation: () => ({
      navigate: mockNavigation,
    }),
  };
});

describe("<RegisteredMeal />", () => {
  it("Should render inDiet", () => {
    const { getByText } = render(<RegisteredMeal {...mockRoute} />);
    expect(getByText("Continue assim!")).toBeTruthy();
  });
  it("Should render outDiet", () => {
    const mockRouteOutDiet: Props = {
      route: {
        params: { mealStatus: "outDiet" },
      },
      ...originalModule,
    };
    const { getByText } = render(<RegisteredMeal {...mockRouteOutDiet} />);
    expect(getByText("Que pena!")).toBeTruthy();
  });
  it("should navigate user when press button", () => {
    const { getByTestId } = render(<RegisteredMeal {...mockRoute} />);
    fireEvent.press(getByTestId(REGISTERED_MEAL_BUTTON_TEST_ID));
    expect(mockNavigation).toHaveBeenCalledWith("Home");
  });
});
