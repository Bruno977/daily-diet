import {
  HEADER_ACTION_BUTTON_TEST_ID,
  HEADER_ACTION_TITLE_TEST_ID,
  HeaderAction,
} from ".";
import { fireEvent, render } from "../../../__tests__/utils/customRender";
import { theme } from "../../config/theme";

jest.mock("phosphor-react-native", () => ({
  ArrowLeft: () => <></>,
}));

const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => {
  const originalModule = jest.requireActual("@react-navigation/native");
  return {
    __esModule: true,
    ...originalModule,
    useNavigation: () => ({
      goBack: () => mockGoBack(),
    }),
  };
});

const mockUseTheme = jest.fn().mockReturnValue({
  COLORS: {
    GRAY_2: theme.COLORS.GRAY_2,
  },
});

jest.mock("styled-components/native", () => {
  const actualStyledComponentsNative = jest.requireActual(
    "styled-components/native"
  );

  return {
    __esModule: true,
    ...actualStyledComponentsNative,
    useTheme: () => mockUseTheme(),
  };
});

describe("<HeaderAction />", () => {
  it("should not render a title", () => {
    const { queryByTestId } = render(<HeaderAction />);
    expect(queryByTestId(HEADER_ACTION_TITLE_TEST_ID)).toBeNull();
  });
  it("should render a title", () => {
    const { getByTestId } = render(<HeaderAction title="teste" />);
    expect(getByTestId(HEADER_ACTION_TITLE_TEST_ID)).toBeTruthy();
  });
  it("should goBack when press button", () => {
    const { getByTestId } = render(<HeaderAction />);
    fireEvent.press(getByTestId(HEADER_ACTION_BUTTON_TEST_ID));
    expect(mockGoBack).toHaveBeenCalled();
  });
});
