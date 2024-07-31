import * as S from "./styles";
interface HeaderCardProps {
  percentage: number;
  subtitle: string;
}
export function HeaderCardTitle({ percentage, subtitle }: HeaderCardProps) {
  const percentageFormatted = percentage.toString().replace(".", ",");
  return (
    <>
      <S.Percentage>{percentageFormatted}%</S.Percentage>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </>
  );
}
