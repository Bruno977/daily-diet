import { HeaderCardTitle } from "../HeaderCardTitle";
import { ArrowUpRight } from "phosphor-react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { PressableProps } from "react-native";

export type DietButtonProps = PressableProps & {
  variant?: "primary" | "secondary";
  percentage?: number;
};

export function DietButton({
  variant = "primary",
  percentage = 0,
  ...rest
}: DietButtonProps) {
  const theme = useTheme();
  const isPositive = percentage > 60;
  return (
    <S.Button variant={variant} {...rest} isPositive={isPositive}>
      <S.Icon>
        <ArrowUpRight
          size={24}
          color={isPositive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
        />
      </S.Icon>
      <HeaderCardTitle
        percentage={percentage}
        subtitle="das refeições dentro da dieta"
      />
    </S.Button>
  );
}
