import { useTheme } from "styled-components/native";
import * as S from "./styles";
type CardStatisticsProps = {
  title: number;
  description: string;
  color?: string;
};
export function CardStatistics({
  title,
  color,
  description,
}: CardStatisticsProps) {
  const theme = useTheme();
  const background = color ? color : theme.COLORS.GRAY_6;
  return (
    <S.Container style={{ backgroundColor: background }}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
