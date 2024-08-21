import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { DataStorageItemProps } from "../../@types/storage";
import { formatTime } from "../../utils/formatDate";
import { formatTitle } from "../../utils/formatTitle";

type MealListItemProps = {
  data: DataStorageItemProps;
};

export const MEAL_LIST_ITEM_TEST_ID = "MealsListItem";

export function MealListItem({ data }: MealListItemProps) {
  const { navigate } = useNavigation();

  return (
    <S.Container
      testID={MEAL_LIST_ITEM_TEST_ID}
      onPress={() => navigate("MealDetails", { mealId: data.id })}
    >
      <S.Hour>{formatTime(new Date(data.hour))}</S.Hour>
      <S.Divider />
      <S.Title>{formatTitle(data.title)}</S.Title>
      <S.Status inDiet={data.inDiet} />
    </S.Container>
  );
}
