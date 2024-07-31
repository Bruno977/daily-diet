import { DietButton } from "../../components/DietButton";
import { Header } from "../../components/Header";
import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <Header />
      <DietButton />
      <S.MealTitle>Refeições</S.MealTitle>
    </S.Container>
  );
}
