import { formatPercentage } from "../../utils/formatPercentage";
import * as S from "./styles";
interface HeaderCardProps {
  percentage: number;
  subtitle: string;
}
export function HeaderCardTitle({ percentage, subtitle }: HeaderCardProps) {
  return (
    <>
      <S.Percentage>{formatPercentage(percentage)}%</S.Percentage>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </>
  );
}
