import styled from "styled-components/native";

export const Container = styled.View``

export const Title = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_1};
  font-size: 20px;
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-weight: 700;
`
export const Description = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_2};
  font-size: ${props => props.theme.FONT_SIZE.MD}px;
  font-family: ${props => props.theme.FONT_WEIGHT.REGULAR};
`
export const TitleDateAndTime = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_1};
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
`