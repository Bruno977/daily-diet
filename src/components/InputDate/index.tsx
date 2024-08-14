import { PressableProps } from "react-native";
import { Container, Label } from "../Input/styles";
import * as S from "./styles";
type InputDateProps = PressableProps & {
  label: string;
  value: string;
};
export function InputDate({ label, value, ...rest }: InputDateProps) {
  return (
    <Container style={{ flex: 1 }}>
      <Label>{label}</Label>
      <S.InputPressable {...rest}>
        <S.Text>{value}</S.Text>
      </S.InputPressable>
    </Container>
  );
}
