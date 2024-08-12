import { TextInputProps } from "react-native";
import * as S from "./styles";
type InputProps = TextInputProps & {
  label: string;
  fullWidth?: boolean;
};
export function Input({ label, fullWidth = false, ...rest }: InputProps) {
  return (
    <S.Container style={fullWidth && { flex: 1 }}>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} />
    </S.Container>
  );
}
