import styled from "styled-components/native";

type CircleProps = {
  inDiet: boolean
}

export const Container = styled.View`
  background-color: ${props => props.theme.COLORS.GRAY_6};
  padding: 8px 16px;
  gap: 8px;
  align-items: center;
  flex-direction: row;
  border-radius: 99999px;
  align-self: flex-start;
`
export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${props => props.inDiet ? props.theme.COLORS.GREEN_DARK : props.theme.COLORS.RED_DARK};
`
export const Title = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_1};
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
  font-family: ${props => props.theme.FONT_WEIGHT.REGULAR};
`