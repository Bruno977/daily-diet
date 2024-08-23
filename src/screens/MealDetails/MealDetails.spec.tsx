import { BUTTON_EDIT_MEAL, BUTTON_REMOVE_MEAL, MealDetails } from ".";
import { mealItem } from "../../../__tests__/__mocks__/mealItem";
import {
  fireEvent,
  render,
  waitFor,
} from "../../../__tests__/utils/customRender";
import { MODAL_CONFIRM_TEST_ID } from "../../components/Modal";
import { getMealStorage, removeMealStorage } from "../../utils/asyncStorage";
import { MealDetailsProps } from "./types";

jest.mock("phosphor-react-native", () => ({
  ArrowLeft: () => <></>,
  PencilSimpleLine: () => <></>,
  Trash: () => <></>,
}));

const originalModule = jest.requireActual("@react-navigation/native");

const mockRoute: MealDetailsProps = {
  route: {
    params: { mealId: "1" },
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

jest.mock("../../utils/asyncStorage.ts", () => ({
  getMealStorage: jest.fn(),
  removeMealStorage: jest.fn(),
}));

describe("<MealDetails/>", () => {
  const mockGetMealStorage = getMealStorage as jest.MockedFunction<
    typeof getMealStorage
  >;
  const mockRemoveMealStorage = removeMealStorage as jest.MockedFunction<
    typeof removeMealStorage
  >;
  it("should render a meal", async () => {
    mockGetMealStorage.mockResolvedValueOnce(mealItem);
    const { getByText } = render(<MealDetails {...mockRoute} />);
    await waitFor(() => {
      expect(getByText("titulo teste")).toBeTruthy();
    });
  });
  it("should render a modal when press button", async () => {
    mockGetMealStorage.mockResolvedValueOnce(mealItem);
    const { getByText, getByTestId } = render(<MealDetails {...mockRoute} />);
    fireEvent.press(getByTestId(BUTTON_REMOVE_MEAL));
    await waitFor(() => {
      expect(getByText(/Deseja realmente excluir o/)).toBeTruthy();
    });
  });
  it("should remove a meal when press button", async () => {
    mockGetMealStorage.mockResolvedValueOnce(mealItem);

    const { getByText, getByTestId } = render(<MealDetails {...mockRoute} />);
    fireEvent.press(getByTestId(BUTTON_REMOVE_MEAL));
    expect(getByText(/Deseja realmente excluir o/)).toBeTruthy();
    fireEvent.press(getByTestId(MODAL_CONFIRM_TEST_ID));
    await waitFor(() => {
      expect(mockRemoveMealStorage).toHaveBeenCalledWith("1");
      expect(mockNavigation).toHaveBeenCalledWith("Home");
    });
  });

  it("should navigate user when press edit meal", async () => {
    mockGetMealStorage.mockResolvedValueOnce(mealItem);
    const { getByTestId } = render(<MealDetails {...mockRoute} />);
    fireEvent.press(getByTestId(BUTTON_EDIT_MEAL));
    await waitFor(() => {
      expect(mockNavigation).toHaveBeenCalledWith("NewMeal", { mealId: "1" });
    });
  });
});
