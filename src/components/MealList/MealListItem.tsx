import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { MealItem } from "./types";

type MealListItemProps = {
  data: MealItem;
};

export function MealListItem({ data }: MealListItemProps) {
  const { navigate } = useNavigation();
  return (
    <S.Container onPress={() => navigate("MealDetails", { mealId: data.id })}>
      <S.Hour>{data.hour}</S.Hour>
      <S.Divider />
      <S.Title>{data.title}</S.Title>
      <S.Status isFreeMeal={data.isFreeMeal} />
    </S.Container>
  );
}
