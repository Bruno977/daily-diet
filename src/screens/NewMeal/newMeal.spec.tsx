import {
  CREATE_NEW_MEAL_BUTTON_TEST_ID,
  INPUT_DATE_TEST_ID,
  INPUT_TIME_TEST_ID,
  NewMeal,
  UPDATE_MEAL_BUTTON_TEST_ID,
} from ".";
import { mealItem } from "../../../__tests__/__mocks__/mealItem";
import {
  fireEvent,
  render,
  waitFor,
} from "../../../__tests__/utils/customRender";
import { DATE_PICKER_TEST_ID } from "../../components/DatePicker";
import { getMealStorage } from "../../utils/asyncStorage";
import { NewMealProps } from "./types";

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

jest.mock("phosphor-react-native", () => ({
  ArrowLeft: () => <></>,
  PencilSimpleLine: () => <></>,
  Trash: () => <></>,
}));

const originalModule = jest.requireActual("@react-navigation/native");

const mockRoute: NewMealProps = {
  route: {
    params: { mealId: "1" },
  },
  ...originalModule,
};
const mockRouteEmpty: NewMealProps = {
  route: {
    params: { mealId: "" },
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

jest.mock("../../utils/validateInput.ts", () => ({
  validateInput: jest.fn(),
}));

jest.mock("../../utils/asyncStorage.ts", () => ({
  getMealStorage: jest.fn(),
  createNewMealStorage: jest.fn(),
  updateMealStorage: jest.fn(),
}));

describe("<MealDetails/>", () => {
  const mockGetMealStorage = getMealStorage as jest.MockedFunction<
    typeof getMealStorage
  >;

  it("should create a new meal", async () => {
    const { getByTestId } = render(<NewMeal {...mockRouteEmpty} />);
    fireEvent.press(getByTestId(CREATE_NEW_MEAL_BUTTON_TEST_ID));
    await waitFor(() => {
      expect(mockNavigation).toHaveBeenCalledWith("RegisteredMeal", {
        mealStatus: "inDiet",
      });
    });
  });

  it("should render meal edit", async () => {
    mockGetMealStorage.mockResolvedValueOnce(mealItem);
    const { getByDisplayValue } = render(<NewMeal {...mockRoute} />);
    await waitFor(() => {
      expect(getByDisplayValue("titulo teste")).toBeTruthy();
    });
  });
  it("should update a meal", async () => {
    mockGetMealStorage.mockResolvedValueOnce(mealItem);
    const { getByTestId } = render(<NewMeal {...mockRoute} />);
    fireEvent.press(getByTestId(UPDATE_MEAL_BUTTON_TEST_ID));
    await waitFor(() => {
      expect(mockNavigation).toHaveBeenCalledWith("Home");
    });
  });
  it("should open datePicker", () => {
    const { getByTestId } = render(<NewMeal {...mockRouteEmpty} />);
    fireEvent.press(getByTestId(INPUT_DATE_TEST_ID));
    expect(getByTestId(DATE_PICKER_TEST_ID)).toBeTruthy();
  });
  it("should open timePicker", () => {
    const { getByTestId } = render(<NewMeal {...mockRouteEmpty} />);
    fireEvent.press(getByTestId(INPUT_TIME_TEST_ID));
    expect(getByTestId(DATE_PICKER_TEST_ID)).toBeTruthy();
  });
});
