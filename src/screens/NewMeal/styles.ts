import styled from "styled-components/native";

export const Container = styled.View`
  padding: 30px 24px 24px 24px;
  flex: 1;
  background-color: ${props => props.theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: -20px;
`
export const GridContainer = styled.View`
  gap: 24px;
  flex: 1;
`

export const GridRow = styled.View`
  flex-direction: row;
  gap: 20px;
`
export const Subtitle = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_2};
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-weight: 700;
`