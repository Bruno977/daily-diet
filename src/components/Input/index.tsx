import { TextInputProps } from "react-native";
import * as S from "./styles";
type InputProps = TextInputProps & {
  label: string;
  fullWidth?: boolean;
  isTextArea?: boolean;
};
export function Input({
  label,
  fullWidth = false,
  isTextArea = false,
  ...rest
}: InputProps) {
  const propsTextArea = {
    multiline: true,
    numberOfLines: 4,
  };
  return (
    <S.Container style={fullWidth && { flex: 1 }}>
      <S.Label>{label}</S.Label>
      <S.Input
        isTextArea={isTextArea}
        {...rest}
        {...(isTextArea && propsTextArea)}
        style={isTextArea && { textAlignVertical: "top" }}
      />
    </S.Container>
  );
}
