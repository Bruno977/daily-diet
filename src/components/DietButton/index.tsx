import { HeaderCardTitle } from "../HeaderCardTitle";
import { ArrowUpRight } from "phosphor-react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";

export interface DietButtonProps {
  variant?: "primary" | "secondary";
}

export function DietButton({ variant = "primary" }: DietButtonProps) {
  const theme = useTheme();
  return (
    <S.Button variant={variant}>
      <S.Icon>
        <ArrowUpRight
          size={24}
          color={
            variant === "primary"
              ? theme.COLORS.GREEN_DARK
              : theme.COLORS.RED_DARK
          }
        />
      </S.Icon>
      <HeaderCardTitle
        percentage={90.86}
        subtitle="das refeições dentro da dieta"
      />
    </S.Button>
  );
}
