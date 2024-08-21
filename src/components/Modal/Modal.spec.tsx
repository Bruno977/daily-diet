import { Modal, MODAL_CANCEL_TEST_ID, MODAL_CONFIRM_TEST_ID } from ".";
import {
  fireEvent,
  render,
  waitFor,
} from "../../../__tests__/utils/customRender";

const mockOnClose = jest.fn();
const mockOnConfirm = jest.fn();
describe("<Modal/>", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <Modal onClose={mockOnClose} onConfirm={mockOnConfirm} />
    );
    expect(getByText(/Deseja realmente excluir/)).toBeTruthy();
  });

  it("should close modal when press cancel", () => {
    const { getByTestId } = render(
      <Modal onClose={mockOnClose} onConfirm={mockOnConfirm} />
    );
    fireEvent.press(getByTestId(MODAL_CANCEL_TEST_ID));

    expect(mockOnClose).toHaveBeenCalled();
  });
  it("should close modal when press confirm", () => {
    const { getByTestId } = render(
      <Modal onClose={mockOnClose} onConfirm={mockOnConfirm} />
    );
    fireEvent.press(getByTestId(MODAL_CONFIRM_TEST_ID));

    expect(mockOnConfirm).toHaveBeenCalled();
  });
});
