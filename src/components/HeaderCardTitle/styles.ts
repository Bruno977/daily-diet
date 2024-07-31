import styled from "styled-components/native";

export const Percentage = styled.Text`
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-size:  ${props => props.theme.FONT_SIZE.XXL}px;
  color: ${props => props.theme.COLORS.GRAY_1};
`
export const Subtitle = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_2};
  font-size:  ${props => props.theme.FONT_SIZE.SM}px;
  font-family: ${props => props.theme.FONT_WEIGHT.REGULAR};
`