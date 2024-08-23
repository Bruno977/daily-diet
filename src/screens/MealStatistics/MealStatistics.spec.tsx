import { useFocusEffect } from "@react-navigation/native";
import { getStorage } from "../../utils/asyncStorage";
import { mockMealStorage } from "../../../__tests__/__mocks__/mealStorage";
import { render, waitFor } from "../../../__tests__/utils/customRender";
import { MealStatistics } from ".";

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

jest.mock("@react-navigation/native", () => {
  const originalModule = jest.requireActual("@react-navigation/native");
  return {
    __esModule: true,
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useFocusEffect: jest.fn(),
  };
});

jest.mock("../../utils/asyncStorage.ts", () => {
  return {
    getStorage: jest.fn(),
    getTotalMeal: jest.fn(),
  };
});

describe("<MealStatistics/>", () => {
  const mockedGetStorage = getStorage as jest.MockedFunction<typeof getStorage>;
  const mockedUseFocusEffect = useFocusEffect as jest.MockedFunction<
    typeof useFocusEffect
  >;
  it("should render correctly", async () => {
    mockedGetStorage.mockResolvedValueOnce(mockMealStorage);
    mockedUseFocusEffect.mockImplementationOnce((callback) => callback());
    const { getByText } = render(<MealStatistics />);

    await waitFor(() => {
      expect(getByText(/50,00/)).toBeTruthy();
    });
  });
});
