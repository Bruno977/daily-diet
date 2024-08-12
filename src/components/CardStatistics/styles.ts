import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  min-height: 101px;
  flex: 1;
`
export const Title = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_1};
  font-size: ${props => props.theme.FONT_SIZE.XL}px;
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
`
export const Description = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_2};
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
  font-family: ${props => props.theme.FONT_WEIGHT.REGULAR};
  text-align: center;
  padding-top: 10px;
`