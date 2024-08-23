import styled from "styled-components/native";

type HeaderContainer = {
  isPositive: boolean;
};

export const HeaderContainer = styled.View<HeaderContainer>`
  background-color: ${(props) =>
    props.isPositive
      ? props.theme.COLORS.GREEN_LIGHT
      : props.theme.COLORS.RED_LIGHT};
  padding-bottom: 20px;
`;
export const HeaderHeaderCardTitleContainer = styled.View`
  padding-top: 10px;
  align-items: center;
  padding-bottom: 30px;
`;

export const Container = styled.View`
  background-color: ${(props) => props.theme.COLORS.WHITE};
  flex: 1;
`;
export const TitleStatistics = styled.Text`
  color: ${(props) => props.theme.COLORS.GRAY_1};
  font-size: ${(props) => props.theme.FONT_SIZE.SM}px;
  font-family: ${(props) => props.theme.FONT_WEIGHT.BOLD};
  padding: 30px 0px;
  text-align: center;
`;

export const GridCardsContainer = styled.View`
  gap: 12px;
`;
export const GridCardsRow = styled.View`
  flex-direction: row;
  gap: 12px;
`;
