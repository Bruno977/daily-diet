import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { DataStorageItemProps } from "../../@types/storage";
import { formatTime } from "../../utils/formatDate";

type MealListItemProps = {
  data: DataStorageItemProps;
};

export function MealListItem({ data }: MealListItemProps) {
  const { navigate } = useNavigation();
  return (
    <S.Container onPress={() => navigate("MealDetails", { mealId: data.id })}>
      <S.Hour>{formatTime(new Date(data.hour))}</S.Hour>
      <S.Divider />
      <S.Title>{data.title}</S.Title>
      <S.Status inDiet={data.inDiet} />
    </S.Container>
  );
}
