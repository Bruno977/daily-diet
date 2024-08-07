import * as S from "./styles";
import { MealItem } from "./types";

type MealListItemProps = {
  data: MealItem;
};

export function MealListItem({ data }: MealListItemProps) {
  return (
    <S.Container>
      <S.Hour>{data.hour}</S.Hour>
      <S.Divider />
      <S.Title>{data.title}</S.Title>
      <S.Status isFreeMeal={data.isFreeMeal} />
    </S.Container>
  );
}
