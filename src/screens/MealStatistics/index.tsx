import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderAction } from "../../components/HeaderAction";
import { HeaderCardTitle } from "../../components/HeaderCardTitle";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { CardStatistics } from "../../components/CardStatistics";

export function MealStatistics() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
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
            percentage={90.86}
            subtitle="das refeições dentro da dieta"
          />
        </S.HeaderHeaderCardTitleContainer>
      </S.HeaderContainer>
      <S.Container
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
      </S.Container>
    </>
  );
}
