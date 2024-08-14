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
export function DatePicker({ visible, mode, date, onChange }: DatePickerProps) {
  return (
    <>
      {visible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </>
  );
}
