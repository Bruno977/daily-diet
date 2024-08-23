import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderAction } from "../../components/HeaderAction";
import { HeaderCardTitle } from "../../components/HeaderCardTitle";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { CardStatistics } from "../../components/CardStatistics";
import { Container } from "../NewMeal/styles";
import { DATA_MEAL_STORAGE_KEY, getStorage } from "../../utils/asyncStorage";
import { DataStorageProps } from "../../@types/storage";
import { getTotalMeal } from "../../utils/getTotalMeal";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

export function MealStatistics() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const [statusMeal, setStatusMeal] = useState({
    percentage: 0,
    inDiet: 0,
    outDiet: 0,
    totalMeals: 0,
    mealInSequence: 0,
  });

  async function getMealStorage() {
    try {
      const response = (await getStorage(
        DATA_MEAL_STORAGE_KEY
      )) as DataStorageProps[];
      const { percentage, inDiet, outDiet, mealInSequence } =
        getTotalMeal(response);
      setStatusMeal({
        percentage,
        inDiet,
        outDiet,
        mealInSequence,
        totalMeals: inDiet + outDiet,
      });
    } catch (error) {
      console.error("Error get meal", error);
    }
  }
  useFocusEffect(
    useCallback(() => {
      getMealStorage();
    }, [])
  );
  return (
    <>
      <S.HeaderContainer
        isPositive={statusMeal.percentage > 60}
        style={{
          paddingTop: insets.top + 24,
          paddingLeft: insets.left + 24,
          paddingRight: insets.right + 24,
        }}
      >
        <HeaderAction
          colorIcon={
            statusMeal.percentage > 60
              ? theme.COLORS.GREEN_DARK
              : theme.COLORS.RED_DARK
          }
        />
        <S.HeaderHeaderCardTitleContainer>
          <HeaderCardTitle
            percentage={statusMeal.percentage}
            subtitle="das refeições dentro da dieta"
          />
        </S.HeaderHeaderCardTitleContainer>
      </S.HeaderContainer>
      <Container
        style={{
          paddingLeft: insets.left + 24,
          paddingRight: insets.right + 24,
        }}
      >
        <S.TitleStatistics>Estatísticas gerais</S.TitleStatistics>
        <S.GridCardsContainer>
          <CardStatistics
            title={statusMeal.mealInSequence}
            description="melhor sequência de pratos dentro da dieta"
          />
          <CardStatistics
            title={statusMeal.totalMeals}
            description="refeições registradas"
          />
          <S.GridCardsRow>
            <CardStatistics
              color={theme.COLORS.GREEN_LIGHT}
              title={statusMeal.inDiet}
              description={`refeições dentro da \n dieta`}
            />
            <CardStatistics
              color={theme.COLORS.RED_LIGHT}
              title={statusMeal.outDiet}
              description={`refeições fora da \n dieta`}
            />
          </S.GridCardsRow>
        </S.GridCardsContainer>
      </Container>
    </>
  );
}
