import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderAction } from "../../components/HeaderAction";
import { HeaderCardTitle } from "../../components/HeaderCardTitle";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { CardStatistics } from "../../components/CardStatistics";
import { Container } from "../NewMeal/styles";
import { DATA_MEAL_STORAGE_KEY, getStorage } from "../../utils/asyncStorage";
import { DataStorageProps } from "../../@types/storage";
import { getMealPercentage } from "../../utils/getMealPercentage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

export function MealStatistics() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const [percentage, setPercentage] = useState(0);

  async function getMealStorage() {
    try {
      const response = (await getStorage(
        DATA_MEAL_STORAGE_KEY
      )) as DataStorageProps[];
      const percentage = getMealPercentage(response);
      setPercentage(percentage);
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
        style={{
          paddingTop: insets.top + 24,
          paddingLeft: insets.left + 24,
          paddingRight: insets.right + 24,
        }}
      >
        <HeaderAction colorIcon={theme.COLORS.GREEN_DARK} />
        <S.HeaderHeaderCardTitleContainer>
          <HeaderCardTitle
            percentage={percentage}
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
            title={22}
            description="melhor sequência de pratos dentro da dieta"
          />
          <CardStatistics title={109} description="refeições registradas" />
          <S.GridCardsRow>
            <CardStatistics
              color={theme.COLORS.GREEN_LIGHT}
              title={32}
              description={`refeições dentro da \n dieta`}
            />
            <CardStatistics
              color={theme.COLORS.RED_LIGHT}
              title={77}
              description={`refeições fora da \n dieta`}
            />
          </S.GridCardsRow>
        </S.GridCardsContainer>
      </Container>
    </>
  );
}
