import styled from "styled-components/native";

type TitleProps = {
  inDiet: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text<TitleProps>`
  color: ${props => props.inDiet ? props.theme.COLORS.GREEN_DARK : props.theme.COLORS.RED_DARK};
  font-size: ${props => props.theme.FONT_SIZE.XL}px;
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-weight: 700;
`
export const Description = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_1};
  font-size: ${props => props.theme.FONT_SIZE.MD}px;
  font-family: ${props => props.theme.FONT_WEIGHT.REGULAR};
  padding-top: 8px;
  text-align: center;
`

export const DescriptionStrong = styled.Text`
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-weight: 700;
`

export const containerImage = styled.View`
  margin: 30px 0px;
`