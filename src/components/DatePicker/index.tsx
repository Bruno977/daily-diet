import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { ModeProps } from "./types";

type DatePickerProps = {
  visible: boolean;
  mode: ModeProps;
  date: Date;
  onChange: (event: DateTimePickerEvent, date?: Date) => void;
};
export const DATE_PICKER_TEST_ID = "DatePicker";
export function DatePicker({ visible, mode, date, onChange }: DatePickerProps) {
  return (
    <>
      {visible && (
        <DateTimePicker
          testID={DATE_PICKER_TEST_ID}
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </>
  );
}
