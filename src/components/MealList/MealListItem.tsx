import * as S from "./styles";

export function MealListItem({ data }: any) {
  return (
    <S.Container>
      <S.Hour>{data.hour}</S.Hour>
      <S.Divider />
      <S.Title>{data.title}</S.Title>
      <S.Status isFreeMeal={data.isFreeMeal} />
    </S.Container>
  );
}
