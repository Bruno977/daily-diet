import { useFocusEffect } from "@react-navigation/native";
import { Home, HOME_DIET_BUTTON_TEST_ID, HOME_NEW_MEAL_TEST_ID } from ".";
import { mockMealStorage } from "../../../__tests__/__mocks__/mealStorage";
import {
  fireEvent,
  render,
  waitFor,
} from "../../../__tests__/utils/customRender";
import * as asyncStorageModule from "../../utils/asyncStorage";
import React from "react";

jest.mock("phosphor-react-native", () => ({
  ArrowUpRight: () => <></>,
  Plus: () => <></>,
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

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const originalModule = jest.requireActual("@react-navigation/native");
  return {
    __esModule: true,
    ...originalModule,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
    useFocusEffect: jest.fn(),
  };
});

jest.mock("../../utils/asyncStorage.ts", () => {
  return {
    getStorage: jest.fn(),
  };
});

describe("<Home />", () => {
  const mockedUseFocusEffect = useFocusEffect as jest.MockedFunction<
    typeof useFocusEffect
  >;
  const mockGetStorage = asyncStorageModule.getStorage as jest.MockedFunction<
    typeof asyncStorageModule.getStorage
  >;
  it("Should be render meals", async () => {
    mockGetStorage.mockResolvedValue(mockMealStorage);
    mockedUseFocusEffect.mockImplementationOnce((callback) => callback());

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText("primeira refeicao")).toBeTruthy();
    });
  });
  it("Should render meals list empty", async () => {
    mockGetStorage.mockResolvedValue(mockMealStorage);
    mockedUseFocusEffect.mockImplementationOnce((callback) => callback());

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText("Adicione uma Refeição!")).toBeTruthy();
    });
  });
  it("Should navigate user when press dietButton", async () => {
    mockGetStorage.mockResolvedValue([]);
    mockedUseFocusEffect.mockImplementationOnce((callback) => callback());

    const { getByTestId } = render(<Home />);

    fireEvent.press(getByTestId(HOME_DIET_BUTTON_TEST_ID));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("MealStatistics");
    });
  });
  it("Should navigate user when press newMeal", async () => {
    mockGetStorage.mockResolvedValue([]);
    mockedUseFocusEffect.mockImplementationOnce((callback) => callback());

    const { getByTestId } = render(<Home />);

    fireEvent.press(getByTestId(HOME_NEW_MEAL_TEST_ID));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("NewMeal");
    });
  });
});
