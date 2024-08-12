import { PressableProps } from "react-native";
import * as S from "./styles";

type ButtonMealStatusProps = PressableProps & {
  title: string;
  variant: "primary" | "danger";
  isActive?: boolean;
};
export function ButtonMealStatus({
  title,
  variant,
  isActive = false,
  ...rest
}: ButtonMealStatusProps) {
  return (
    <S.ButtonContainer isActive={isActive} variant={variant} {...rest}>
      <S.Circle variant={variant} isActive={isActive} />
      <S.Label>{title}</S.Label>
    </S.ButtonContainer>
  );
}
