import { ButtonMealStatusProps } from "../../screens/NewMeal/types";
import * as S from "./styles";
type TagProps = {
  status: ButtonMealStatusProps;
};
export function Tag({ status }: TagProps) {
  return (
    <S.Container>
      <S.Circle inDiet={status === "inDiet"} />
      <S.Title>
        {status === "inDiet" ? "dentro da dieta" : "fora da dieta"}
      </S.Title>
    </S.Container>
  );
}
