import * as S from "./styles";
export function MealListEmpty() {
  return (
    <S.ContainerTitleMealListEmpty
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <S.TitleMealListEmpty>Adicione uma Refeição!</S.TitleMealListEmpty>
    </S.ContainerTitleMealListEmpty>
  );
}
