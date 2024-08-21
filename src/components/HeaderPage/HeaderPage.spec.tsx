import { HeaderPage } from ".";
import { render } from "../../../__tests__/utils/customRender";

jest.mock("phosphor-react-native", () => ({
  ArrowLeft: () => <></>,
}));

jest.mock("react-native-safe-area-context", () => {
  return {
    useSafeAreaInsets: jest.fn().mockReturnValue({
      left: 24,
      right: 24,
    }),
  };
});

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

describe("<HeaderPage />", () => {
  it("should render correctly", () => {
    const { getByText, debug } = render(<HeaderPage title="teste" />);
    debug();
    expect(getByText("teste")).toBeTruthy();
  });
});
